import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content');
const OUTPUT_DIR = path.join(__dirname, '../src/generated');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'posts.js');

// Ensure output directory exists
fs.ensureDirSync(OUTPUT_DIR);

async function processMarkdown(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    // Filter out drafts
    if (frontmatter.draft === true) {
      return null;
    }

    // Calculate reading time
    const readingTimeResult = readingTime(content);

    // Process markdown to HTML
    const htmlResult = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrismPlus, {
        showLineNumbers: true,
        ignoreMissing: true,
        aliases: {
          sh: 'bash',
          js: 'javascript'
        }
      })
      .use(rehypeStringify)
      .process(content);

    let html = String(htmlResult);

    // Convert image paths from ../images/ to /images/
    html = html.replace(/src="\.\.\/images\//g, 'src="/images/');

    // Generate excerpt (first 160 characters, strip HTML)
    const excerpt = content
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove image markdown
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
      .replace(/[#*`_]/g, '') // Remove markdown symbols
      .substring(0, 160)
      .trim() + '...';

    // Extract slug from file path (number-slug.md -> slug)
    const fileName = path.basename(filePath, '.md');
    const slug = fileName.replace(/^\d+-/, ''); // Remove leading number

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      rawDate: frontmatter.date, // For filtering future posts
      path: frontmatter.path,
      excerpt,
      readingTime: readingTimeResult.text,
      html
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

async function generatePosts() {
  console.log('Generating posts from markdown files...');

  // Find all markdown files
  const markdownFiles = await glob(`${CONTENT_DIR}/*.md`);
  console.log(`Found ${markdownFiles.length} markdown files`);

  // Process all markdown files
  const posts = [];
  for (const file of markdownFiles) {
    const post = await processMarkdown(file);
    if (post) {
      posts.push(post);
    }
  }

  console.log(`Processed ${posts.length} posts (${markdownFiles.length - posts.length} drafts filtered out)`);

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));

  // Generate the output JavaScript module
  const outputContent = `// Auto-generated file - do not edit manually
// Generated on: ${new Date().toISOString()}

export const posts = ${JSON.stringify(posts, null, 2)};

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return posts;
};
`;

  // Write the output file
  fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf-8');
  console.log(`✓ Generated ${OUTPUT_FILE}`);
  console.log(`✓ ${posts.length} posts ready for build`);
}

// Run the generator
generatePosts().catch(error => {
  console.error('Failed to generate posts:', error);
  process.exit(1);
});
