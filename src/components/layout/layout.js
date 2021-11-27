import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../navigation";
import VeroniBackground from "../veroniBackground";
import "prismjs/themes/prism-okaidia.css";

let responsiveWidth = typeof window != "undefined" ? window.innerWidth : 5000;

const particles = (n, width, height) =>
  Array.from({ length: n }, () => [
    Math.random() * width,
    Math.random() * height,
  ]);

const getParticlesLarge = particles(300, responsiveWidth, 2000);
// const getParticlesSmall = particles(5, 50, 50)

export default (props) => {
  const hsla = props.hsla;
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
          hsla={hsla(0.2)}
        />
      </div>

      <div className="site-content">
        <header className="site-header">
          <div className="site-logo">
            <Link to="/" style={{ color: hsla(1) }}>
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <Navigation />
        </header>

        {/* <VeroniBackground particles={getParticlesSmall} n={5} stroke={2} width={50} height={50} rgba={rgba(.5)} /> */}
        {/* <ContainerDiv> {children}  </ContainerDiv> */}
        {/* {childrenWithProps} */}
        {props.children}
        {/* <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Liz Cal </p>
      </footer> */}
      </div>
    </containerDiv>
  );
};
