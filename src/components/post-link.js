import React, {useState} from "react"
import { Link } from "gatsby"

const PostLink = (props) => {
let rgba = props.rgba(.5)
// let color = "rgba(63,57,226, 1)"
let color = "red"
console.log(rgba)
let post = props.post

const [hover, setHover] = useState(false);

let onMouseEnter=post
let onMouseLeave='rgba(255,255,255,.5)'

  return(
  <div className = {'card-container'}>
  <article className="card" style={{backgoundColor:rgba}}>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <div className="img-container"

       ><img class="preview-img" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} /></div>
      )}
    </Link>
    <header className="post-title-container">
    <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{background:hover?rgba:onMouseLeave}} className="post-preview-text-container">
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div    className="post-meta">{post.frontmatter.date}</div>
      </div>
    </header>
  </article>
  </div>)
      }
export default PostLink
