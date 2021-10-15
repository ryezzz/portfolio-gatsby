import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import { hsla } from "../hooks/customHooks";


const ResumePage = ({
  data: {
    site
  },
  props
}) => {
  return (
    <Layout hsla={hsla}>

<div className="post">
<div className= "blog-post-content">
<p>Section</p>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
<div>Section</div>
</div>

      </div>
    </Layout>
  )
}
export default ResumePage
export const pageQuery = graphql`
  query ResumePageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
