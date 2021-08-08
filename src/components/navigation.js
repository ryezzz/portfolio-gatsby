import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
  <Link to="/">Portfolio</Link>
  <Link to="/contact">Contact</Link>

{<ThemeChanger/>}

  </nav>

)
