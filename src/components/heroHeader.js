import React, {useState} from 'react';
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
    
      {buttonData.map((button) => (
        <button
          key={button.value}
          className={getButtonClass(button.value, selectedTab)}
          onClick={() => onSelect("_", button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

