import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import VeroniBackground from "../components/veroniBackground"
import 'prismjs/themes/prism-okaidia.css';


const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgba = `rgba(${r},${g},${b},.5)`; // Collect all to a css color string





export default ({ children }) => {


console.log(rgba)
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
    <div className="background-div"><VeroniBackground rgba={rgba} /></div>
    {/* <div><VeroniBackground/></div> */}

<div className="site-content">
      <header className="site-header" >
        <div className="site-title" style={{color:rgba}}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>


      {children}
      {/* <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Liz Cal </p>
      </footer> */}
      </div>
    </div>
  )
}
