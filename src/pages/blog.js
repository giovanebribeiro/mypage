import { Link } from "react-router-dom"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { posts } from "../generated/posts"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

const IndexPage = () => {
  // Filter posts that are published (not future-dated)
  const publishedPosts = posts.filter(post => {
    const postDate = new Date(post.rawDate);
    return postDate < new Date();
  });

  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>Blog</h1>
        {publishedPosts.map((post) => (
          <div key={post.slug}>
            <Link
              to={post.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>{post.title}</MarkerHeader>
            </Link>
            <div>
              <ArticleDate>{formatDate(post.date)}</ArticleDate>
              <ReadingTime> - {post.readingTime}</ReadingTime>
            </div>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </Content>
    </Layout>
  )
}

export default IndexPage
