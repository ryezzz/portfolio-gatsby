import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
);
