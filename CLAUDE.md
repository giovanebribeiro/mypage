# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal blog/portfolio website built with Gatsby v3 (a React-based static site generator). The site is deployed to Netlify and features a blog with markdown-based posts, syntax highlighting, and reading time estimates.

## Common Commands

```bash
# Development
npm run develop          # Start dev server at http://localhost:8000
                        # GraphQL playground available at http://localhost:8000/___graphql

npm start               # Clean cache and start dev server (recommended when troubleshooting)

# Production
npm run build           # Build static site for production (output to /public)
npm run serve           # Serve production build locally
npm run start:prd       # Clean, build, and serve production build

# Maintenance
npm run clean           # Clear Gatsby cache and public directories
npm run format          # Format code with Prettier (src/**/*.{js,jsx})
```

## Architecture

### Content Pipeline

**Markdown → GraphQL → React Components**

1. **Content Source**: Markdown files in `src/content/` with frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2021-05-27"
   draft: false           # Draft posts are filtered out in gatsby-node.js
   path: "/blog/post-slug"
   ---
   ```

2. **Build Process** (`gatsby-node.js`):
   - `onCreateNode`: Generates slugs for each markdown file
   - `createPages`: Filters out draft posts and creates pages using `blog-post.js` template
   - Only posts with `draft: false` are published

3. **GraphQL Layer**:
   - `gatsby-source-filesystem` exposes markdown as GraphQL nodes
   - `gatsby-transformer-remark` transforms markdown to HTML with plugins:
     - `gatsby-remark-reading-time`: Adds estimated reading time
     - `gatsby-remark-prismjs`: Syntax highlighting (line numbers enabled)
     - `gatsby-remark-images`: Optimized image handling (max 800px width)

4. **Rendering**:
   - **Blog listing** (`src/pages/blog.js`): Queries all posts, filters by date, displays with title/date/excerpt
   - **Individual posts** (`src/templates/blog-post.js`): Renders post HTML with styled markdown content

### Styling

- **Emotion** (`@emotion/react`, `@emotion/styled`): CSS-in-JS solution
- **Design pattern**: "Text marker" style headings with yellow gradient backgrounds (inspired by Basecamp)
- **Typography**: Nunito font loaded via npm (`typeface-nunito`)

### Key Configuration

**`gatsby-config.js`**:
- **Site metadata**: Author name, subtitle, description
- **Plugins**:
  - Netlify deployment with HSTS headers
  - Google Analytics (gtag: UA-22546389-1)
  - PWA manifest (icon: `src/images/gatsby-icon.png`)
  - Offline support available but commented out

## File Structure

```
src/
├── components/
│   ├── header.js         # Site header
│   ├── layout.js         # Page layout wrapper
│   ├── landing-bio.js    # Homepage bio section
│   └── seo.js           # SEO meta tags (React Helmet)
├── content/             # Markdown blog posts
│   └── *.md
├── images/              # Static images (queried via GraphQL)
├── pages/
│   ├── index.js         # Homepage
│   ├── blog.js          # Blog listing page
│   └── 404.js           # Not found page
└── templates/
    └── blog-post.js     # Template for individual blog posts
```

## Working with Blog Posts

### Adding a New Post

1. Create markdown file in `src/content/`:
   ```bash
   # File naming convention: number-slug.md (e.g., 3-new-post.md)
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2021-06-01"
   draft: false
   path: "/blog/your-slug"
   ---
   ```

3. Future-dated posts are hidden (filtered in `blog.js` by comparing `rawDate < new Date()`)

### Images in Posts

- Place images in `src/images/`
- Reference in markdown: `![Alt text](../images/filename.jpg "Caption")`
- Images are automatically optimized via `gatsby-remark-images`

### Code Blocks

Syntax highlighting is enabled with line numbers:
````markdown
```javascript
const example = "code";
```
````

Aliases configured: `sh` → `bash`, `js` → `javascript`

## Deployment

- **Platform**: Netlify (auto-deploys from git)
- **Build command**: `gatsby build`
- **Output directory**: `public/`
- **Headers**: HSTS enabled via `gatsby-plugin-netlify`

## Troubleshooting

- **Stale cache issues**: Run `npm run clean` before `npm run develop`
- **GraphQL queries**: Use playground at `http://localhost:8000/___graphql` to test queries
- **Draft posts appearing**: Check frontmatter has `draft: false` and verify `gatsby-node.js` filter logic
