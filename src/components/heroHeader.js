import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import TypeOn from "../components/typeOn"
export default () => (
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

                <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>

      </div>
    )}
  />
)
