import React, {useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TypeOn from './typeOn';
import { getButtonClass } from './utils';

const HeroHeader = (props) => {

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

      {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      {/* <span className="tiny-text">Sort by</span> */}
      <div className="hero-button-group">
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
    </div>
  );
};

export default HeroHeader;