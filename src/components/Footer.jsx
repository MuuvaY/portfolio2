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
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com/MuuvaY"
              target="_blank"
              className="footer__link"
            >
              Github
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://linkedin.com/in/mariusyvart"
              target="_blank"
              className="footer__link"
            >
              Linkedin
            </a>
          </li>
          <li className="footer__item">
            <a
              href="mailto:mariusyvt@gmail.com"
              target="_blank"
              className="footer__link"
            >
              Mail
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/MuuvaY"
              target="_blank"
              className="footer__link"
            >
              CV
            </a>
          </li>{" "}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
