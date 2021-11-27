import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import {useKeypress } from "../hooks/customHooks";




export default function Template({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, previous } = pageContext;
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  const h = 360 * Math.random();
  const s = "70%";
  const l = "70%";
  const hslaFun = (opacity) => `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color


  let hsla = hslaFun;


  useKeypress(39, () => {
    navigate(next && next.frontmatter.path )
  });

  useKeypress(37, () => {
    navigate(previous && previous.frontmatter.path )
  });

  return (
    <Layout hsla={hsla}>
    <Helmet>
    <title>
      {frontmatter.title} | {siteMetadata.title}
    </title>
    <meta name="description" content={frontmatter.metaDescription} />
  </Helmet>
  <div className="blog-post-container">
    <article className="post">
      {!frontmatter.thumbnail && <div className="post-thumbnail"></div>}
      {!!frontmatter.thumbnail && (
        <>
          {" "}


          <div
            className="post-preview-text-container"
            style={{ backgroundColor: hsla(0.7) }}
          >



          <h1 className="post-title">{frontmatter.title}</h1>



          </div>
          <div
          className="page-thumbnail"
        >
        <img src={frontmatter.thumbnail}></img>


        </div>
          <div>

          </div>
        </>
      )}
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  </div>
    </Layout>
  );
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
`;
