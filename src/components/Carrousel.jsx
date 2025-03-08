import React, { useState, useContext, useRef, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faSass,
  faWordpress,
  faPhp,
  faHtml5,
  faCss3Alt,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import beeautop from "./../assets/img/beeautop.webp";
import beez2be from "./../assets/img/beez2be.webp";
import foodtruck from "./../assets/img/foodtruck.webp";
import angouloriente from "./../assets/img/angouloriente.webp";
import Tailwindcss from "./Tailwindcss";

function Carrousel() {
  const { language } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const slides = [
    {
      id: 1,
      titre: "01",
      nom: "AxTrack",
      contentKey: "axtrackDescription",
      img: angouloriente,
      technologies: ["React Native", "Node.js"],
      url: "https://mariusyvt.alwaysdata.net/s5/frontal/",
      contentDate: "janvier",
      contentYear: "2025",
      github: "https://github.com/MuuvaY/AxTrackApp",
    },
    {
      id: 2,
      titre: "02",
      nom: "ArenaFighters",
      contentKey: "arenafightersDescription",
      img: angouloriente,
      technologies: ["JavaScript", "PHP", "Css"],
      url: "https://mariusyvt.alwaysdata.net/s5/frontal/",
      contentDate: "novembre",
      contentYear: "2024",
      github: "https://github.com/MuuvaY/ArenaFighters",
    },
    {
      id: 3,
      titre: "03",
      nom: "Angoul'Oriente",
      contentKey: "angoulorienteDescription",
      img: angouloriente,
      technologies: ["React", "Sass"],
      url: "https://angouloriente.netlify.app/",
      contentDate: "juin",
      contentYear: "2024",
      github: "https://github.com/MuuvaY/AngoulOriente",
    },
    {
      id: 4,
      titre: "04",
      nom: "Beez2Be",
      contentKey: "beez2beDescription",
      img: beez2be,
      technologies: ["React", "MongoDb", "Tailwindcss"],
      url: "",
      // annee: "Février 2024",
      contentDate: "fevrier",
      contentYear: "2024",
      github: "https://github.com/MuuvaY/beez2be",
    },
    {
      id: 5,
      titre: "05",
      nom: "Foodtruck",
      contentKey: "foodtruckDescription",
      img: foodtruck,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://rtiphonet.fr/foodtruck/accueil.php",
      // annee: "Janvier 2024",
      contentDate: "janvier",
      contentYear: "2024",
      github: "https://github.com/MuuvaY/foodtruck",
    },
    {
      id: 6,
      titre: "06",
      nom: "BeeAuTop",
      contentKey: "beeautopDescription",
      img: beeautop,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://mariusyvt.alwaysdata.net/BeeAuTop/",
      // annee: "Juin 2023",
      contentDate: "juin",
      contentYear: "2023",
      github: "https://github.com/MuuvaY/BeeAuTop",
    },
  ];

  const technologies = [
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Sass", icon: faSass, color: "#CC6699" },
    { name: "WordPress", icon: faWordpress, color: "#21759B" },
    { name: "MongoDb", icon: faDatabase, color: "#47A248" },
    { name: "PHP", icon: faPhp, color: "#777BB4" },
    { name: "Html", icon: faHtml5, color: "#E34F26" },
    { name: "Css", icon: faCss3Alt, color: "#1572B6" },
    { name: "React Native", icon: faReact, color: "#61DAFB" },
    { name: "Node.js", icon: faNode, color: "#3E3F34" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    if (diffX > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diffX < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    if (diffX > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diffX < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const MAX_DESCRIPTION_LENGTH = 100; // Nombre maximum de caractères à afficher avant de tronquer

  // const handleToggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };
  // const renderDescription = () => {
  //   const description = translations[language][slides[currentSlide].contentKey];
  //   if (description.length <= MAX_DESCRIPTION_LENGTH || showFullDescription) {
  //     return description;
  //   }
  //   return description.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
  // };
  const MAX_DESCRIPTION_LENGTH = 100;

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const description = translations[language][slides[currentSlide].contentKey];
    if (
      !isMobile ||
      description.length <= MAX_DESCRIPTION_LENGTH ||
      showFullDescription
    ) {
      return description;
    }
    return description.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
  };

  return (
    <section className="carrousel">
      <div className="carrousel__header">
        <p className="carrousel__number">
          02 <span className="carrousel__separator">/</span>
        </p>
        <h1 className="carrousel__header-title">
          {translations[language].projets}
        </h1>
      </div>
      <div
        className="carrousel__container"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="carrousel__stats">
          <button onClick={prevSlide} className="carrousel__button">
            <svg
              width="45"
              height="81"
              viewBox="0 0 45 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="carrousel__arrow"
            >
              <line
                x1="43.0607"
                y1="1.06066"
                x2="4.06066"
                y2="40.0607"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="40.9364"
                y1="79.0577"
                x2="1.93947"
                y2="40.0608"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </button>
          <div key={slides[currentSlide].id} className="carrousel__stats-item">
            <h1 className="carrousel__title">
              {" "}
              <a href={slides[currentSlide].url} target="_blank">
                {slides[currentSlide].nom}{" "}
              </a>
              <svg
                width="72"
                height="66"
                viewBox="0 0 72 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="carrousel__title-svg"
              >
                <path
                  d="M48.9458 16.8511L-2.10356e-06 56.1702L8.867 66L57.1034 27.0319L54.266 62.4894L67.3892 62.4894L72 6.31915L15.9606 5.97721e-07L15.9606 12.9894L48.9458 16.8511Z"
                  fill="#D0E2FF"
                />
              </svg>
            </h1>
            <div className="carrousel__list">
              <div className="carrousel__item">
                <p className="carrousel__label">
                  {" "}
                  {translations[language].projets}
                </p>
                <a
                  className="carrousel__link"
                  href={slides[currentSlide].url}
                  target="_blank"
                >
                  {slides[currentSlide].nom}{" "}
                </a>
              </div>
              <div className="carrousel__item">
                <p className="carrousel__label">Date</p>
                <p className="carrousel__date">
                  {translations[language][slides[currentSlide].contentDate]}{" "}
                  {slides[currentSlide].contentYear}
                </p>
              </div>
              <div className="carrousel__item">
                <p className="carrousel__label">
                  {" "}
                  {translations[language].technologies}
                </p>
                <div className="carrousel__wrapper">
                  {slides[currentSlide].technologies.map((tech, index) => (
                    <div key={index} className="carrousel__technologies">
                      {tech === "Tailwindcss" ? (
                        <Tailwindcss className="carrousel__icon" />
                      ) : (
                        <FontAwesomeIcon
                          icon={technologies.find((t) => t.name === tech).icon}
                          className="carrousel__icon"
                          style={{
                            color: technologies.find((t) => t.name === tech)
                              .color,
                          }}
                        />
                      )}
                      <p className="projet__text">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="carrousel__item">
              <p className="carrousel__label">Github</p>
              <a
                className="carrousel__link"
                href={slides[currentSlide].github}
                target="_blank"
              >
                {translations[language].githubDescription}{" "}
              </a>
            </div>
            <div className="carrousel__item-description">
              <p className="carrousel__label-description">Description</p>

              <p className="carrousel__description">{renderDescription()}</p>
              {isMobile &&
                renderDescription().length > MAX_DESCRIPTION_LENGTH && (
                  <a
                    onClick={handleToggleDescription}
                    className="carrousel__see-more"
                  >
                    {showFullDescription
                      ? translations[language].voirMoins
                      : translations[language].voirPlus}

                    {/* {showFullDescription
                      ? translations[language].showLess
                      : translations[language].showMore} */}
                  </a>
                )}
            </div>
          </div>
          {/* <div className="carrousel__img-wrapper">
            <div className="carrousel__img-container">
              <img
                src={slides[currentSlide].img}
                alt={slides[currentSlide].nom}
                className="carrousel__img"
              />
            </div>
          </div> */}
          <button onClick={nextSlide} className="carrousel__button">
            <svg
              width="45"
              height="81"
              viewBox="0 0 45 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="carrousel__arrow"
            >
              <line
                x1="1.93934"
                y1="79.9364"
                x2="40.9393"
                y2="40.9364"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="4.06359"
                y1="1.93934"
                x2="43.0605"
                y2="40.9363"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </button>
        </div>
        <p className="carrousel__meter">
          0{currentSlide + 1} <span className="carrousel__separator">/</span> 0
          {slides.length}
        </p>
      </div>
    </section>
  );
}

export default Carrousel;
