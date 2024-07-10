import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import gsap from "gsap";

function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="contact" id="contact">
      <p className="contact__number">
        02 <span className="contact__separator">/</span>
      </p>
      <div className="contact__container">
        <div className="contact__wrapper">
          <h1 className="contact__title">{translations[language].contact}</h1>
          <div className="contact__list">
            <div className="contact__item">
              <p className="contact__label">Mail</p>
              <a
                href="mailto:mariusyvt@gmail.com"
                target="_blank"
                className="contact__link"
              >
                mariusyvt@gmail.com
              </a>
            </div>
            <div className="contact__item">
              <p className="contact__label">Linkedin</p>
              <a
                href="https://linkedin.com/in/mariusyvart"
                target="_blank"
                className="contact__link"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
