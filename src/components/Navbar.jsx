// import React, { useState, useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";
// import LanguageToggle from "./LanguageToggle";

// function Navbar() {
//   const { language } = useContext(LanguageContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <a href="#top" className="navbar__brand">
//         <span className="navbar__brand-name">Marius YVART</span>
//         <span className="navbar__brand-copyright">
//           {translations[language].portfolioCopyright}
//         </span>
//       </a>
//       <button
//         className={`navbar__hamburger hamburger hamburger--spring ${
//           isMenuOpen ? "hamburger--is-active" : ""
//         }`}
//         type="button"
//         onClick={toggleMenu}
//       >
//         <span className="hamburger__box">
//           <span className="hamburger__inner"></span>
//         </span>
//       </button>
//       <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
//         <li className="navbar__menu-item">
//           <a href="" className="navbar__menu-link">
//             {translations[language].competences}{" "}
//           </a>
//         </li>
//         <li className="navbar__menu-item">
//           <a href="" className="navbar__menu-link">
//             {translations[language].projets}{" "}
//           </a>
//         </li>
//         <li className="navbar__menu-item">
//           <a href="" className="navbar__menu-link">
//             {translations[language].contact}{" "}
//           </a>
//         </li>
//         <li className="navbar__menu-item navbar__menu-item--language-toggle">
//           <LanguageToggle />
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import LanguageToggle from "./LanguageToggle";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__brand">
        <span className="navbar__brand-name">Marius YVART</span>
        <span className="navbar__brand-copyright">
          {translations[language].portfolioCopyright}
        </span>
      </a>
      <button
        className={`navbar__hamburger hamburger hamburger--spring ${
          isMenuOpen ? "hamburger--is-active" : ""
        }`}
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
      <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <li className="navbar__menu-item">
          <a
            href="#competences"
            className="navbar__menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations[language].competences}
          </a>
        </li>
        <li className="navbar__menu-item">
          <a
            href="#projets"
            className="navbar__menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations[language].projets}
          </a>
        </li>
        <li className="navbar__menu-item">
          <a
            href=""
            className="navbar__menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations[language].contact}
          </a>
        </li>
        <li className="navbar__menu-item navbar__menu-item--language-toggle">
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
