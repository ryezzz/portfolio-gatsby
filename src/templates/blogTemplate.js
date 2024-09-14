import React, {useEffect} from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import { useKeypress } from "../hooks/customHooks";

export default function Template({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, previous } = pageContext;
  const { site, markdownRemark } = data; // data.markdownRemark holds post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  const h = 360 * Math.random();
  const s = "70%";
  const l = "70%";
  const hsla = (opacity) => `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color

  const nextPost = next && (
    <Link to={next.frontmatter.path} style={{}}>
      <div className="right-float"> ❯ </div>
    </Link>
  );

  const previousPost = previous && (
    <Link to={previous.frontmatter.path} style={{}}>
      <div className="left-float"> ❮ </div>
    </Link>
  );
  useEffect(() => {
    const handleImageClick = (event) => {
      if (event.target.tagName === 'IMG') {
        console.log(event.target);
      }
    };

    document.addEventListener('click', handleImageClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleImageClick);
    };
  }, []);

  // Allow users to use keys to toggle through portfolio.
  useKeypress(39, () => {
    navigate(next && next.frontmatter.path);
  });

  useKeypress(37, () => {
    navigate(previous && previous.frontmatter.path);
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
              <div className="next-previous-container">
                {" "}
                {previousPost} {nextPost}
              </div>
              <div
                className="post-thumbnail"
                style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
              ></div>
              <div
                className="post-preview-text-container"
                style={{ backgroundColor: hsla(0.7) }}
              >
                <h1 className="post-title">{frontmatter.title}</h1>

                <div className="post-meta">{frontmatter.metaDescription}</div>
              </div>
              <div></div>
            </>
          )}
          <div
            className="blog-post-content"
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
    markdownRemark(frontmatter: { path: { regex: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        corporate
        exploration
        highlight

      }
    }
  }
`;
