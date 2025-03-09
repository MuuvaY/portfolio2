import React, { useContext, useLayoutEffect, useRef } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import marius from "./../assets/img/marius.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import MariusCV from "./../assets/doc/Marius_Yvart_CV.pdf";

gsap.registerPlugin(ScrollTrigger);

function Accueil() {
  const { language } = useContext(LanguageContext);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const linksRef = useRef(null);
  const arrowRef = useRef(null);
  const descriptionRef = useRef(null);
  const title2Ref = useRef(null);
  const contentRef = useRef(null);
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animation du titre principal et des liens
      const tl = gsap.timeline();

      tl.from(titleRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(imgRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(linksRef.current.children, {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        });

      // Animation de la flèche
      gsap.to(arrowRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });

      // Animation de la description et du titre secondaire avec ScrollTrigger
      tl.from(contentRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh(); // Refresh ScrollTrigger to account for new content
        },
      });

      gsap.from(descriptionRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(title2Ref.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: title2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section className="accueil" ref={componentRef}>
        <h1 className="accueil__titre" ref={titleRef}>
          <span>{translations[language].developpeur}</span>{" "}
          <span>{translations[language].web}</span>
        </h1>
        <div className="accueil__link">
          <img src={marius} alt="Photo" className="accueil__img" ref={imgRef} />
          <ul className="accueil__list" ref={linksRef}>
            <li className="accueil__item">
              <a
                href="https://github.com/MuuvaY"
                target="_blank"
                className="accueil__link"
              >
                Github
              </a>
            </li>
            <li className="accueil__item">
              <a
                href="https://linkedin.com/in/mariusyvart"
                target="_blank"
                className="accueil__link"
              >
                Linkedin
              </a>
            </li>
            <li className="accueil__item">
              <a
                href="mailto:mariusyvt@gmail.com"
                target="_blank"
                className="accueil__link"
              >
                Mail
              </a>
            </li>
            <li className="accueil__item">
              <a href={MariusCV} target="_blank" className="accueil__link">
                CV
              </a>
            </li>{" "}
          </ul>
        </div>
        <div className="accueil__content" ref={contentRef}>
          <svg
            width="123"
            height="123"
            viewBox="0 0 123 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={arrowRef}
            className="accueil__fleche"
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
            </defs>{" "}
          </svg>
          <p className="accueil__description" ref={descriptionRef}>
            <span>{translations[language].descriptionperso}</span>
          </p>
          <h1 className="accueil__titre2" ref={title2Ref}>
            <span>Marius</span>
            <span>YVART</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Accueil;
