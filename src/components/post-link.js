import React, { useState } from "react";
import { Link } from "gatsby";

const PostLink = (props) => {
  const h = 360 * Math.random();
  const s = "90%";
  const l = "70%";
  const hslaFun = (opacity) => `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color

  const hsla = hslaFun(0.7);

  // let color = "rgba(63,57,226, 1)"
  let post = props.post;

  const [hover, setHover] = useState(false);

  let onMouseEnter = post;
  let onMouseLeave = "0px";

  return (
    <div className={"card-container"}>
      {/* <article  style={{outline:hover?  `solid ${hsla} 10px`:onMouseLeave, outlineOffset:"0px"}} className="card" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}> */}

      {props.type === "widePortfolio" ? (
        <>
          <article className="card">
            <Link to={post.frontmatter.path}>
              {!!post.frontmatter.thumbnail && (
                <div className="">
                  <img
                    class="-img"
                    src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title + "- Featured Shot"}
                  />
                </div>
              )}
              <header className="">
                <div
                  className=""
                  style={{ backgroundColor: hsla }}
                  className="post-preview-text-container"
                >
                  <h2 className="post-title">
                    <Link to={post.frontmatter.path} className="post-link">
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <div className="post-meta">{post.frontmatter.date}</div>
                </div>
              </header>
            </Link>
          </article>
        </>
      ) : (
        <article className="card">
          <Link to={post.frontmatter.path}>
            {!!post.frontmatter.thumbnail && (
              <div className="img-container">
                <img
                  class="preview-img"
                  src={post.frontmatter.thumbnail}
                  alt={post.frontmatter.title + "- Featured Shot"}
                />
              </div>
            )}
            <header className="post-title-container">
              <div
                style={{ backgroundColor: hsla }}
                className="post-preview-text-container"
              >
                <h2 className="post-title">
                  <Link to={post.frontmatter.path} className="post-link">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <div className="post-meta">{post.frontmatter.date}</div>
              </div>
            </header>
          </Link>
        </article>
      )}
    </div>
  );
};
export default PostLink;
