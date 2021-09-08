import React from "react";
import { cloneElement } from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../navigation";
import VeroniBackground from "../veroniBackground";
import "prismjs/themes/prism-okaidia.css";
import { ContainerDiv } from "./layout.module.js"; // Import css modules stylesheet as styles

const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgba = (opacity) => `rgba(${r},${g},${b}, ${opacity})`; // Collect all to a css color string

let responsiveWidth = typeof window != "undefined" ? window.innerWidth : 1000;

const particles = (n, width, height) =>
  Array.from({ length: n }, () => [
    Math.random() * width,
    Math.random() * height,
  ]);

const getParticlesLarge = particles(40, responsiveWidth, 2000);
// const getParticlesSmall = particles(5, 50, 50)

export default (props) => {

console.log("Finding RGBA", props)
  let children = props.children

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
  );

  return (
    <containerDiv>
      <div className="background-div">
        <VeroniBackground
          particles={getParticlesLarge}
          stroke={5}
          width={responsiveWidth}
          height={2000}
          n={40}
          rgba={props.rgba(.5)}
        />
      </div>

      <div className="site-content">
        <header className="site-header">
          <div className="site-title"

          style={{ color: props.rgba(1) }}
          >
            <Link
            to="/"
            style={{ color: props.rgba(1) }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <Navigation />
        </header>

        {/* <VeroniBackground particles={getParticlesSmall} n={5} stroke={2} width={50} height={50} rgba={rgba(.5)} /> */}
        <ContainerDiv> {children}  </ContainerDiv>

        {/* <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Liz Cal </p>
      </footer> */}
      </div>
    </containerDiv>
  );
};
