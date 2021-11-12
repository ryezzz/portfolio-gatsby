import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import TypeOn from "../components/typeOn"


export default (props) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content"> {TypeOn(data.site.siteMetadata.home.description)}</div>

            {/*    <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>*/}
            {/* <span className="tiny-text">Sort by</span> */}
<div className="hero-button-group"><button className="btn" onClick={()=>props.useFilter("all")}>All Projects </button>
            <button className="btn" onClick={()=>props.useFilter("exploration")}>Data Experiments </button>
            <button className="btn" onClick={()=>props.useFilter("corporate")}>Corporate Work</button>
            </div>
      </div>
    )}
  />
)
