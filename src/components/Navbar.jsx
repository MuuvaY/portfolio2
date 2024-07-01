import React from "react";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";

import LanguageToggle from "./LanguageToggle";
function Navbar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__brand">
        <span className="navbar__brand-name">Marius YVART</span>
        <span className="navbar__brand-copyright">
          {translations[language].portfolioCopyright}
        </span>
      </a>
      <LanguageToggle />
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="" className="navbar__menu-link">
            {translations[language].competences}{" "}
          </a>
          ,&nbsp;{" "}
        </li>
        <li className="navbar__menu-item">
          <a href="" className="navbar__menu-link">
            {translations[language].projets}{" "}
          </a>
        </li>
        ,&nbsp;{" "}
        <li className="navbar__menu-item">
          <a href="" className="navbar__menu-link">
            {translations[language].contact}{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
