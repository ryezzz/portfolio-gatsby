import React, { useState, useRef, useReducer, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import PostLink from "../components/post-link";
import {HeroHeader, HeaderFilter} from "../components/heroHeader";
import Masonry from "react-masonry-css";
import { useInfiniteScroll, useLazyLoading, hsla } from "../hooks/customHooks";

//...
const breakpointColumnsObj = {
  default: 3,
  1800: 3,
  1500: 3,
  500: 1,
};




const IndexPage = (
  {
    data: {
      site,
      allMarkdownRemark: { edges },
    },
  }
) => {


  const imgReducer = (state, action) => {
    switch (action.type) {
      case "STACK_IMAGES":
        return { ...state, images: state.images.concat(action.images) };
      case "FETCHING_IMAGES":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const pageReducer = (state, action) => {
    switch (action.type) {
      case "ADVANCE_PAGE":
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };


  const [pagerDispatch] = useReducer(pageReducer, { page: 0 });
  const [imgData] = useReducer(imgReducer, {
    images: [],
    fetching: true,
  });
  const [filter, setFilter] = useState("all");

  const useFilter = (filterType) => {
    setFilter(filterType);
  };

  let bottomBoundaryRef = useRef(null);
  // useFetch(pager, imgDispatch);
  useLazyLoading(".card-img-top", imgData.images);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  const UnfilteredPosts = edges

  const FilteredPosts = UnfilteredPosts.filter((edge) => edge.node.frontmatter[filter]) ;


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); //delay
  
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <Layout hsla={hsla}>

        <HeroHeader hsla={hsla} useFilter={useFilter}></HeroHeader>

        {/* {edges.map((edge, index) => {
            const isHighlight = edge.node.frontmatter.highlight;
            {console.log("posts", edge)}
            return (
              <div className="" key={index}>
                {isHighlight && 
                <div className="card-body ">
                  <PostLink hsla={hsla} key={edge.node.id} post={edge.node} />
                </div>}
              </div>
            );
          })} */}
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
          <HeaderFilter hsla={hsla} useFilter={useFilter}></HeaderFilter>

        <Masonry
          // breakpointCols={2}
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid "
          columnClassName="my-masonry-grid_column "
        >
          {edges.map((edge, index) => {

const itemFilteredOut = !edge.node.frontmatter[filter] && filter !== "all";
            return (
              <div key={index}>
              
                 <div className={`${itemFilteredOut || !loaded ? 
                 "  transform opacity-0 translate-y-[400px] p-0 gap-0 m-0 max-h-0" : 
                 " transform opacity-100 translate-y-0 max-h-[1000px]"} 
                 transition-all duration-[500ms] ease-in-out card-body overflow-hidden`}             
                 style={{ transitionDelay: `${(edges.length - 1 - index) * 0}ms` }}>
    <PostLink hsla={hsla} key={edge.node.id} post={edge.node} />
  </div>
              </div>
            );
          })}
        </Masonry>
      </Layout>
    </>
  );
};

export default IndexPage;
export const pageQuery = graphql`
 query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {path: {regex: "\\/portfolio/"}, title: {}}, children: {}}
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          thumbnail
          corporate
          exploration
          highlight
          metaDescription
        }
      }
    }
  }
}
`;
