import React, {useState, useRef, useReducer} from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import Masonry from 'react-masonry-css'
import { useFetch, useInfiniteScroll, useLazyLoading } from '../hooks/customHooks'



//...
const breakpointColumnsObj = {
  default: 3,
  1800: 3,
  1500: 3,
  500: 1

};

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}, props) => {



console.log('props from index', props)
  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }

  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }


  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })
  const [filter, setFilter] = useState('exploration')


  const useFilter = (filterType) => {
    setFilter(filterType)
    }


  let bottomBoundaryRef = useRef(null);
  // useFetch(pager, imgDispatch);
  useLazyLoading('.card-img-top', imgData.images)
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);



  const FilteredPosts = edges
  .filter(edge => edge.node.frontmatter[filter])

  const ReverseFilteredPosts =  edges
  .filter(edge => !edge.node.frontmatter[filter])

  const SortedPosts = [...FilteredPosts, ...ReverseFilteredPosts]


    // .sort((a, b) => (a.node.frontmatter[filter]) ? 1 : -1)
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const h = 360 * Math.random();
    const s = "80%";
    const l = "50%";
    const rgba =(opacity)=> `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color string


  const Posts = SortedPosts
  .map(edge => <PostLink rgba={rgba} key={edge.node.id} post={edge.node} />)


  return (
    <>
    <Layout rgba={rgba}>

      <HeroHeader useFilter={useFilter}></HeroHeader>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      {/* <h2>Blog Posts &darr;</h2> */}




    <Masonry
    breakpointCols={2}
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
       {Posts.map((post, index) => {
              const { author, download_url } = post
              return (
                <div key={index}>
                  <div className="card-body ">
                    {post}
                  </div>
                </div>
              )
            })}
  </Masonry>
  </Layout>

    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
          }
        }
      }
    }
  }
`
