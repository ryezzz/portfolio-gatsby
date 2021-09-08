import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"


const h = 360 * Math.random();
const s = "80%";
const l = "50%";
const rgba =(opacity)=> `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color string

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  return (
    <Layout rgba={rgba}>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">

          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              {/* <h1 className="post-title">{frontmatter.title}</h1> */}
              {/* <div className="post-meta">{frontmatter.date}</div> */}
            </div>
          )}
          {!!frontmatter.thumbnail && (
          <>  <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>

            </div>

   <h1 className="post-title">{frontmatter.title}</h1>
            <div className="post-meta">{frontmatter.date}</div>
            </>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        corporate
        exploration
      }
    }
  }
`
