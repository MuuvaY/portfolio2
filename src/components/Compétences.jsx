import React, { useContext, useLayoutEffect, useRef } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import gsap from "gsap";

function Compétences() {
  const { language } = useContext(LanguageContext);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animation du titre principal et des liens
      const tl = gsap.timeline();

      // Animation de la flèche
      gsap.to(arrowRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="competences2" id="competences">
      <p className="competences2__number">
        01 <span className="competences2__separator">/</span>
      </p>
      <div className="competences2__container">
        <div className="competences2__wrapper">
          <h1 className="competences2__title">
            {translations[language].competences}
          </h1>
          <div className="competences2__content">
            <h3 className="competences2__subtitle">
              {translations[language].competences}
            </h3>
            <p className="competences2__description">
              <span>{translations[language].competencesdescription}</span>
            </p>
            <a
              className="competences2__link"
              href="https://github.com/MuuvaY"
              target="_blank"
              rel="noopener noreferrer"
            >
              {translations[language].projetsliens}
            </a>
          </div>
        </div>
      </div>
      <svg
        width="123"
        height="123"
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={arrowRef}
        className="competences2__fleche"
      >
        <g clipPath="url(#clip0_263_453)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.625 111.694L98.5794 73.1133L102.5 76.4189L63.9549 122.544L25.625 76.4189L29.5405 73.1081L61.5 111.699L61.5 -0.456119L66.625 -0.456118L66.625 111.694Z"
            fill="#0339F9"
          />
        </g>
        <defs>
          <clipPath id="clip0_263_453">
            <rect
              width="123"
              height="123"
              fill="white"
              transform="translate(123 123) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}

export default Compétences;
