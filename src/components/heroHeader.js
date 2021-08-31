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
            <button className="btn" onClick={()=>props.useFilter("corporate")}>All</button>
            <button className="btn" onClick={()=>props.useFilter("exploration")}>Data Experiments </button>
            <button className="btn" onClick={()=>props.useFilter("corporate")}>Corporate Work</button>
            <p></p>

      </div>
    )}
  />
)
