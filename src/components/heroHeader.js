import React, {useState, useRef} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TypeOn from './typeOn';
import { getButtonClass } from './utils';

export const HeroHeader = (props) => {

  const [selectedTab, setSelectedTab ] = useState("all");

  const buttonData = [
    { label: "All Projects", value: "all" },
    { label: "Data Experiments", value: "exploration" },
    { label: "Professional Work", value: "corporate" }
  ];
  


  const onSelect = (tabValue, tabId) => {
    setSelectedTab(tabId);
    props.useFilter(tabId)
    // console.log("selectedTab", selectedTab)

  }
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <div className="hero-header">
      <div className="headline">{data.site.siteMetadata.home.title}</div>
      <div className="primary-content">{TypeOn(data.site.siteMetadata.home.description)}</div>
 
    </div>
  );
};

export const HeaderFilter = (props) => {

  const [selectedTab, setSelectedTab ] = useState("all");

  const buttonData = [
    { label: "All Projects", value: "all" },
    { label: "Data Experiments", value: "exploration" },
    { label: "Professional Work", value: "corporate" }
  ];
  
  const targetRef = useRef(null);

  // TODO: This is an insane way to slow down scroll
  const scrollToElement = () => {
    if (targetRef.current) {
      const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 700; // Duration in milliseconds
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const onSelect = (tabValue, tabId) => {
    setSelectedTab(tabId);
    props.useFilter(tabId)
    // console.log("selectedTab", selectedTab)

  }
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <div className="hero-header mb-10">
    
      {buttonData.map((button) => (
        <button
          key={button.value}
          className={getButtonClass(button.value, selectedTab)}
          onClick={() => {onSelect("_", button.value); scrollToElement()}}
         ref={targetRef} 
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

