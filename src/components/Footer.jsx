import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";

function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          <span className="footer__author">Marius YVART</span>{" "}
          <span className="footer__copyright">
            {translations[language].portfolioCopyright}
          </span>
        </p>
        <p className="footer__text">{translations[language].footerText}</p>
        <p className="footer__text">
          <span className="footer__developer">
            {translations[language].developpeur}
          </span>
          <span className="footer__role">{translations[language].web}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
