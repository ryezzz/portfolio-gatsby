import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className = {'card-container'}>
  <article className="card">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <div className="img-container"><img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} /></div>
      )}
    </Link>
    <header className="post-title-container">
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
  </div>
)
export default PostLink
