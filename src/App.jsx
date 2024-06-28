import React, { useState, useEffect, useRef } from "react";
import "./scss/style.scss";
import gsap from "gsap";

import Header from "./components/Header";
import Curseur from "./components/Curseur";

import GridContainer from "./components/GridContainer";

import MariusImg from "./assets/img/IMG_4087.webp";
import logo from "./assets/img/logo.webp";

import Table from "./components/Table";
import Skills from "./components/Skills";
import Grid from "./components/Grid";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";

import Testslide from "./components/Testslide";
import Number from "./components/Number";
// import Test from "./components/Test";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      titre: "01",
      nom: "Beez2Be",
      content:
        "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande. Cette section du site offre la possibilité de réserver un repas pour une date et une heure spécifiques. Pour plus d'informations, vous pouvez consulter le code sur mon GitHub.",
      img: logo,
    },
    {
      id: 2,
      titre: "02",
      nom: "Angouloriente",
      content:
        "Cette application vous fait vivre une course d'orientation intéractive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visible sur la carte ainsi que votre position en temp réel. Attention ! Il est important de respecter l'ordre des points en commencant par le point n°1 et en finissant par le points n°8. A chaque points, vous trouverez un qr code que vous pourrez scanner en clique sur le ping correspondant au points sur la carte. Une fois le qr scanné, une lettre vous sera donnée. Récuperez les 8 lettres pour former un mot. A noté que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fais toutes les balises (plus d'infos sur le chiffrement de César: https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu a cet effet pour terminer la course et arréter le chrono !",
      img: logo,
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <Curseur />
      <div className="accueil">
        <div className="accueil__haut">
          <Header />
        </div>
        <div className="accueil__ligne-svg">
          {" "}
          <svg
            width="48"
            height="28"
            viewBox="0 0 48 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="accueil__svg __chiffre"
          >
            <text
              className="svg-text"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="12"
              fill="#eeeef0"
            >
              01
            </text>
            <path d="M8 1H1V4.5V8" stroke="#2556D4" strokeWidth="2" />
            <path d="M1 20L1 27H4.5H8" stroke="#2556D4" strokeWidth="2" />
            <path
              d="M47 8L47 1L43.5 0.999999L40 0.999998"
              stroke="#2556D4"
              strokeWidth="2"
            />
            <path
              d="M40 27L47 27L47 23.5L47 20"
              stroke="#2556D4"
              strokeWidth="2"
            />
          </svg>
          <svg
            width="221"
            height="71"
            viewBox="0 0 221 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="accueil__svg __nom"
          >
            <text
              className="svg-text"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="12"
              fill="#eeeef0"
            >
              <tspan x="50%" dy="-0.5em">
                Marius YVART
              </tspan>
              <tspan x="50%" dy="1.2em">
                PORTFOLIO 2024©
              </tspan>
            </text>
            <path
              d="M19.0992 1H1V10.0496V19.0992"
              stroke="#2556D4"
              strokeWidth="3"
            />
            <path
              d="M1 51.6777L1 69.7769H10.0496H19.0992"
              stroke="#2556D4"
              strokeWidth="3"
            />
            <path
              d="M220 19.0992L220 1L210.95 1L201.901 0.999999"
              stroke="#2556D4"
              strokeWidth="3"
            />
            <path
              d="M201.901 69.7769L220 69.7769L220 60.7273L220 51.6777"
              stroke="#2556D4"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="accueil__gauche">
          {/* <div className="circlebk"></div> */}
          {/* <div className="accueil__info"> */}
          <p className="accueil__sous-titre">
            Etudiant en BUT Métiers du Multimédia et de l'Internet
          </p>
          <h1 className="accueil__titre">Marius YVART</h1>
          <div className="accueil__content">
            <div className="accueil__p">
              <p>
                J'ai 21 ans et je viens d'Angers. J'étudie à l'IUT d'Angoulême.
                Avant de venir en BUT MMI, j'ai fait un BTS Conception des
                Produits Industriels que j'ai obtenu.
              </p>
            </div>
            <div className="accueil__btn">
              <a
                href="https://github.com/MuuvaY"
                className="btn__github"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="btn-svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                github
              </a>

              <a
                href="https://linkedin.com/in/mariusyvart"
                className="btn__github"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="btn-svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                Linkedin
              </a>
              <a
                href="mailto:mariusyvt@gmail.com"
                className="btn__github"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="btn-svg"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                Mail
              </a>
              <a href="./" className="btn__github" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="btn-svg"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                </svg>
                CV
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="accueil__droite">
          <div className="accueil__grid">
            <Grid />
            {/* <img src={MariusImg} alt="Marius" className="accueil__img" /> */}
          </div>
        </div>
      </div>
      <div className="competences__title">
        <div className="competences__titre-container">
          <div class="competences__inner">
            <h1 className="competences__titre">Compétences</h1>
            <h1 className="competences__titre2">Compétences</h1>
            <h1 className="competences__titre">Compétences</h1>
            <h1 className="competences__titre2">Compétences</h1>
          </div>
          <div class="competences__inner" aria-hidden="true">
            <h1 className="competences__titre">Compétences</h1>
            <h1 className="competences__titre2">Compétences</h1>
            <h1 className="competences__titre">Compétences</h1>
            <h1 className="competences__titre2">Compétences</h1>
          </div>
        </div>
        <div class="competences">
          <div class="competences__skills">
            <Skills />
          </div>
          <div class="competences__design">
            <div className="custom__container">
              <div className="custom__num-content">
                <div className="custom__num">
                  <h1 className="custom__num-titre">Marius YVART</h1>
                  <h1 className="custom__num-titre">Portfolio 2024©</h1>
                </div>
                <div className="custom__border custom__border-top-left"></div>
                <div className="custom__border custom__border-top-right"></div>
                <div className="custom__border custom__border-bottom-left"></div>
                <div className="custom__border custom__border-bottom-right"></div>
              </div>
            </div>{" "}
            <div className="competences__grid">
              <svg
                width="31vw"
                height="31vh"
                viewBox="0 0 310 310"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.00006" cy="3" r="3" fill="#D9D9D9" />
                <circle cx="79.0001" cy="3" r="3" fill="#D9D9D9" />
                <circle cx="155" cy="3" r="3" fill="#D9D9D9" />
                <circle cx="231" cy="3" r="3" fill="#D9D9D9" />
                <circle cx="307" cy="3" r="3" fill="#D9D9D9" />
                <circle cx="3.00006" cy="79" r="3" fill="#D9D9D9" />
                <circle cx="79.0001" cy="79" r="3" fill="#D9D9D9" />
                <circle cx="155" cy="79" r="3" fill="#D9D9D9" />
                <circle cx="231" cy="79" r="3" fill="#D9D9D9" />
                <circle cx="307" cy="79" r="3" fill="#D9D9D9" />
                <circle cx="3.00006" cy="155" r="3" fill="#D9D9D9" />
                <circle cx="79.0001" cy="155" r="3" fill="#D9D9D9" />
                <circle cx="155" cy="155" r="3" fill="#D9D9D9" />
                <circle cx="231" cy="155" r="3" fill="#D9D9D9" />
                <circle cx="307" cy="155" r="3" fill="#D9D9D9" />
                <circle cx="3.00006" cy="231" r="3" fill="#D9D9D9" />
                <circle cx="79.0001" cy="231" r="3" fill="#D9D9D9" />
                <circle cx="155" cy="231" r="3" fill="#D9D9D9" />
                <circle cx="231" cy="231" r="3" fill="#D9D9D9" />
                <circle cx="307" cy="231" r="3" fill="#D9D9D9" />
                <circle cx="3.00006" cy="307" r="3" fill="#D9D9D9" />
                <circle cx="79.0001" cy="307" r="3" fill="#D9D9D9" />
                <circle cx="155" cy="307" r="3" fill="#D9D9D9" />
                <circle cx="231" cy="307" r="3" fill="#D9D9D9" />
                <circle cx="307" cy="307" r="3" fill="#D9D9D9" />
              </svg>
            </div>
            <div class="competences__logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div class="competences__gauche">
            <div class="competences__info">
              <div className="design__container">
                <div className="design__num-content">
                  <div className="design__num">
                    <h1 className="design__num-titre">02</h1>
                  </div>
                  <div className="design__border design__border-top-left"></div>
                  <div className="design__border design__border-top-right"></div>
                  <div className="design__border design__border-bottom-left"></div>
                  <div className="design__border design__border-bottom-right"></div>
                </div>
              </div>

              <Table />
            </div>
            {/* <div className="bonjour"> */}
            {/* <div class="competences__text"> */}
            {/* <div className="competences__text-container">
                <div class="competences__inner2">
                  <h1 className="competences__titre">Compétences</h1>
                  <h1 className="competences__titre2">Compétences</h1>
                  <h1 className="competences__titre">Compétences</h1>
                  <h1 className="competences__titre2">Compétences</h1>
                </div>
                <div class="competences__inner2" aria-hidden="true">
                  <h1 className="competences__titre">Compétences</h1>
                  <h1 className="competences__titre2">Compétences</h1>
                  <h1 className="competences__titre">Compétences</h1>
                  <h1 className="competences__titre2">Compétences</h1>
                </div>
              </div> */}
            {/* <h1 className="competences__titre">Compétences</h1> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="projet">
        <div className="competences__titre-container">
          <div class="competences__inner">
            <h1 className="competences__titre">Projet</h1>
            <h1 className="competences__titre2">Projet</h1>
            <h1 className="competences__titre">Projet</h1>
            <h1 className="competences__titre2">Projet</h1>
          </div>
          <div class="competences__inner" aria-hidden="true">
            <h1 className="competences__titre">Projet</h1>
            <h1 className="competences__titre2">Projet</h1>
            <h1 className="competences__titre">Projet</h1>
            <h1 className="competences__titre2">Projet</h1>
          </div>
        </div>
        <div className="projet__container">
          <div className="projet__header">
            <div className="projet__container">
              <div className="projet__num-content">
                <div className="projet__num">
                  <h1 className="projet__num-titre">03</h1>
                </div>
                <div className="projet__border projet__border-top-left"></div>
                <div className="projet__border projet__border-top-right"></div>
                <div className="projet__border projet__border-bottom-left"></div>
                <div className="projet__border projet__border-bottom-right"></div>
              </div>
            </div>
            <div className="projet-texte__container">
              <div className="projet-texte__num-content">
                <div className="projet-texte__num">
                  <h1 className="projet-texte__num-titre">Marius YVART</h1>
                  <h1 className="projet-texte__num-titre">Portfolio 2024©</h1>
                </div>
                <div className="projet-texte__border projet-texte__border-top-left"></div>
                <div className="projet-texte__border projet-texte__border-top-right"></div>
                <div className="projet-texte__border projet-texte__border-bottom-left"></div>
                <div className="projet-texte__border projet-texte__border-bottom-right"></div>
              </div>
            </div>
          </div>
        </div>

        <Testslide />
        {/* <Number /> */}
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
