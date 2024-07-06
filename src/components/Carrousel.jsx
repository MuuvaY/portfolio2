// import React, { useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faJs,
//   faSass,
//   faWordpress,
//   faPhp,
//   faHtml5,
//   faCss3Alt,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// import beeautop from "./../assets/img/beeautop.webp";
// import beez2be from "./../assets/img/beez2be.webp";
// import foodtruck from "./../assets/img/foodtruck.webp";
// import angouloriente from "./../assets/img/angouloriente.webp";
// import Tailwindcss from "./Tailwindcss";

// function Carrousel() {
//   const { language } = useContext(LanguageContext);

//   const slides = [
//     {
//       id: 1,
//       titre: "01",
//       nom: "Angoul'Oriente",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. ",
//       // "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte. Une fois le QR scanné, une lettre vous sera donnée. Récupérez les 8 lettres pour former un mot. À noter que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fait toutes les balises (plus d'infos sur le chiffrement de César : https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu à cet effet pour terminer la course et arrêter le chrono !",

//       img: angouloriente,
//       technologies: ["React", "Sass"],
//       url: "https://angouloriente.netlify.app/",
//       annee: "2024",
//     },
//     {
//       id: 2,
//       titre: "02",
//       nom: "Beez2Be",
//       content:
//         "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande. Cette section du site offre la possibilité de réserver un repas pour une date et une heure spécifiques. Pour plus d'informations, vous pouvez consulter le code sur mon GitHub.",
//       img: beez2be,
//       technologies: ["React", "MongoDb", "Tailwindcss"],
//       url: "https://example.com/angouloriente",
//       annee: "2024",
//     },
//     {
//       id: 3,
//       titre: "03",
//       nom: "Foodtruck",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
//       img: foodtruck,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://rtiphonet.fr/foodtruck/accueil.php",
//       annee: "2024",
//     },
//     {
//       id: 4,
//       titre: "04",
//       nom: "BeeAuTop",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
//       img: beeautop,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://kbelin.alwaysdata.net/beeautop/",
//       annee: "S2 2023",
//     },
//   ];

//   const technologies = [
//     { name: "React", icon: faReact, color: "#61DAFB" },
//     { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
//     { name: "Sass", icon: faSass, color: "#CC6699" },
//     { name: "WordPress", icon: faWordpress, color: "#21759B" },
//     { name: "MongoDb", icon: faDatabase, color: "#47A248" },
//     { name: "PHP", icon: faPhp, color: "#777BB4" },
//     { name: "Html", icon: faHtml5, color: "#E34F26" },
//     { name: "Css", icon: faCss3Alt, color: "#1572B6" },
//   ];

//   const getTechnologyIcon = (techName) => {
//     const tech = technologies.find((t) => t.name === techName);
//     return tech ? (
//       <FontAwesomeIcon
//         key={techName}
//         icon={tech.icon}
//         style={{ color: tech.color }}
//         className="carrousel__stats-icon"
//       />
//     ) : null;
//   };

//   return (
//     <section className="carrousel">
//       <div className="carrousel__header">
//         <p className="carrousel__number">
//           02 <span className="carrousel__separator">/</span>
//         </p>
//         <h1 className="carrousel__header-title">
//           {translations[language].projets}
//         </h1>
//       </div>
//       <div className="carrousel__stats">
//         {slides.map((slide) => (
//           <div key={slide.id} className="carrousel__stats-item">
//             <h1 className="carrousel__title">
//               {" "}
//               <a href={slide.url} target="_blank">
//                 {slide.nom}{" "}
//               </a>
//               <svg
//                 width="72"
//                 height="66"
//                 viewBox="0 0 72 66"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="carrousel__title-svg"
//               >
//                 <path
//                   d="M48.9458 16.8511L-2.10356e-06 56.1702L8.867 66L57.1034 27.0319L54.266 62.4894L67.3892 62.4894L72 6.31915L15.9606 5.97721e-07L15.9606 12.9894L48.9458 16.8511Z"
//                   fill="#D0E2FF"
//                 />
//               </svg>
//             </h1>
//             <div className="carrousel__list">
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Projets</p>
//                 <a className="carrousel__link" href="">
//                   {slide.nom}{" "}
//                 </a>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Technologies</p>
//                 <div className="carrousel__wrapper">
//                   {slide.technologies.map((tech, index) => (
//                     <div key={index} className="carrousel__technologies">
//                       {tech === "Tailwindcss" ? (
//                         <Tailwindcss className="carrousel__icon" />
//                       ) : (
//                         <FontAwesomeIcon
//                           icon={technologies.find((t) => t.name === tech).icon}
//                           className="carrousel__icon"
//                           style={{
//                             color: technologies.find((t) => t.name === tech)
//                               .color,
//                           }}
//                         />
//                       )}
//                       <p className="projet__text">{tech}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Date</p>
//                 <p className="carrousel__date">{slide.annee}</p>
//               </div>
//             </div>
//             <p className="carrousel__description">{slide.content}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Carrousel;
// import React, { useContext, useRef, useState } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faJs,
//   faSass,
//   faWordpress,
//   faPhp,
//   faHtml5,
//   faCss3Alt,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// import beeautop from "./../assets/img/beeautop.webp";
// import beez2be from "./../assets/img/beez2be.webp";
// import foodtruck from "./../assets/img/foodtruck.webp";
// import angouloriente from "./../assets/img/angouloriente.webp";
// import Tailwindcss from "./Tailwindcss";

// function Carrousel() {
//   const { language } = useContext(LanguageContext);
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       titre: "01",
//       nom: "Angoul'Oriente",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive...",
//       img: angouloriente,
//       technologies: ["React", "Sass"],
//       url: "https://angouloriente.netlify.app/",
//       annee: "2024",
//     },
//     {
//       id: 2,
//       titre: "02",
//       nom: "Beez2Be",
//       content:
//         "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web...",
//       img: beez2be,
//       technologies: ["React", "MongoDb", "Tailwindcss"],
//       url: "https://example.com/angouloriente",
//       annee: "2024",
//     },
//     {
//       id: 3,
//       titre: "03",
//       nom: "Foodtruck",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive...",
//       img: foodtruck,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://rtiphonet.fr/foodtruck/accueil.php",
//       annee: "2024",
//     },
//     {
//       id: 4,
//       titre: "04",
//       nom: "BeeAuTop",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive...",
//       img: beeautop,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://kbelin.alwaysdata.net/beeautop/",
//       annee: "S2 2023",
//     },
//   ];

//   const technologies = [
//     { name: "React", icon: faReact, color: "#61DAFB" },
//     { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
//     { name: "Sass", icon: faSass, color: "#CC6699" },
//     { name: "WordPress", icon: faWordpress, color: "#21759B" },
//     { name: "MongoDb", icon: faDatabase, color: "#47A248" },
//     { name: "PHP", icon: faPhp, color: "#777BB4" },
//     { name: "Html", icon: faHtml5, color: "#E34F26" },
//     { name: "Css", icon: faCss3Alt, color: "#1572B6" },
//   ];

//   const getTechnologyIcon = (techName) => {
//     const tech = technologies.find((t) => t.name === techName);
//     return tech ? (
//       <FontAwesomeIcon
//         key={techName}
//         icon={tech.icon}
//         style={{ color: tech.color }}
//         className="carrousel__stats-icon"
//       />
//     ) : null;
//   };

//   const handleSwipe = (direction) => {
//     const container = containerRef.current;
//     const slideWidth = container.offsetWidth / 3; // Ajustez selon le nombre de slides visibles
//     const maxIndex = slides.length - 3; // Ajustez selon le nombre de slides visibles

//     if (direction === "left" && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       container.scrollBy({ left: -slideWidth, behavior: "smooth" });
//     } else if (direction === "right" && currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//       container.scrollBy({ left: slideWidth, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="carrousel">
//       <div className="carrousel__header">
//         <p className="carrousel__number">
//           02 <span className="carrousel__separator">/</span>
//         </p>
//         <h1 className="carrousel__header-title">
//           {translations[language].projets}
//         </h1>
//       </div>
//       <div className="carrousel__container" ref={containerRef}>
//         {slides.map((slide) => (
//           <div key={slide.id} className="carrousel__stats-item">
//             <h1 className="carrousel__title">
//               {" "}
//               <a href={slide.url} target="_blank" rel="noopener noreferrer">
//                 {slide.nom}{" "}
//               </a>
//               <svg
//                 width="72"
//                 height="66"
//                 viewBox="0 0 72 66"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="carrousel__title-svg"
//               >
//                 <path
//                   d="M48.9458 16.8511L-2.10356e-06 56.1702L8.867 66L57.1034 27.0319L54.266 62.4894L67.3892 62.4894L72 6.31915L15.9606 5.97721e-07L15.9606 12.9894L48.9458 16.8511Z"
//                   fill="#D0E2FF"
//                 />
//               </svg>
//             </h1>
//             <div className="carrousel__list">
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Projets</p>
//                 <a className="carrousel__link" href={slide.url} target="_blank">
//                   {slide.nom}
//                 </a>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Technologies</p>
//                 <div className="carrousel__wrapper">
//                   {slide.technologies.map((tech, index) => (
//                     <div key={index} className="carrousel__technologies">
//                       {tech === "Tailwindcss" ? (
//                         <Tailwindcss className="carrousel__icon" />
//                       ) : (
//                         <FontAwesomeIcon
//                           icon={technologies.find((t) => t.name === tech).icon}
//                           className="carrousel__icon"
//                           style={{
//                             color: technologies.find((t) => t.name === tech)
//                               .color,
//                           }}
//                         />
//                       )}
//                       <p className="projet__text">{tech}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Date</p>
//                 <p className="carrousel__date">{slide.annee}</p>
//               </div>
//             </div>
//             <p className="carrousel__description">{slide.content}</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => handleSwipe("left")} className="carrousel__button">
//         &#8592;
//       </button>
//       <button
//         onClick={() => handleSwipe("right")}
//         className="carrousel__button"
//       >
//         &#8594;
//       </button>
//     </section>
//   );
// }

// export default Carrousel;

// import React, { useState, useContext, useRef } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faJs,
//   faSass,
//   faWordpress,
//   faPhp,
//   faHtml5,
//   faCss3Alt,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// import beeautop from "./../assets/img/beeautop.webp";
// import beez2be from "./../assets/img/beez2be.webp";
// import foodtruck from "./../assets/img/foodtruck.webp";
// import angouloriente from "./../assets/img/angouloriente.webp";
// import Tailwindcss from "./Tailwindcss";

// function Carrousel() {
//   const { language } = useContext(LanguageContext);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [startX, setStartX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef(null);

//   const slides = [
//     {
//       id: 1,
//       titre: "01",
//       nom: "Angoul'Oriente",
//       content:
//         "Cette application vous propose une course d'orientation interactive à Angoulême. Passez par 8 points dans l'ordre, scannez les QR codes pour obtenir des lettres, et utilisez un chiffre final pour un chiffrement de César. Formez le mot secret pour terminer la course et arrêter le chrono !",
//       img: angouloriente,
//       technologies: ["React", "Sass"],
//       url: "https://angouloriente.netlify.app/",
//       annee: "Juin 2024",
//     },
//     {
//       id: 2,
//       titre: "02",
//       nom: "Beez2Be",
//       content:
// "Dans le cadre de mon stage, j'ai réalisé une application permettant la mise en relation de professionnels avec des utilisateurs. Elle inclut des fonctionnalités essentielles telles que la modification des fiches, la gestion des avis, ainsi que l'affichage des informations de l'entreprise.",
//       img: beez2be,
//       technologies: ["React", "MongoDb", "Tailwindcss"],
//       url: "https://example.com/angouloriente",
//       annee: "Février 2024",
//     },
//     {
//       id: 3,
//       titre: "03",
//       nom: "Foodtruck",
//       content:
// "Le site Fouées du Terroir permet de commander des fouées. Les fonctionnalités du site incluent la possibilité de passer des commandes, de se connecter ou de s'inscrire, et de contacter les propriétaires. Le site présente également des informations sur les fouées et l'histoire du couple charentais qui les prépare avec des ingrédients locaux selon des traditions familiales. ",
//       img: foodtruck,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://rtiphonet.fr/foodtruck/accueil.php",
//       annee: "Janvier 2024",
//     },
//     {
//       id: 4,
//       titre: "04",
//       nom: "BeeAuTop",
//       content:
// "Beeautop est une application mobile dédiée à la collaboration entre apiculteurs. Elle permet aux utilisateurs de se connecter et de partager des informations pour améliorer la gestion de leurs ruches.",
//       img: beeautop,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://kbelin.alwaysdata.net/beeautop/",
//       annee: "Juin 2023",
//     },
//   ];

//   const technologies = [
//     { name: "React", icon: faReact, color: "#61DAFB" },
//     { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
//     { name: "Sass", icon: faSass, color: "#CC6699" },
//     { name: "WordPress", icon: faWordpress, color: "#21759B" },
//     { name: "MongoDb", icon: faDatabase, color: "#47A248" },
//     { name: "PHP", icon: faPhp, color: "#777BB4" },
//     { name: "Html", icon: faHtml5, color: "#E34F26" },
//     { name: "Css", icon: faCss3Alt, color: "#1572B6" },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//     setIsDragging(true);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.touches[0].clientX;
//     const diffX = startX - currentX;
//     if (diffX > 50) {
//       nextSlide();
//       setIsDragging(false);
//     } else if (diffX < -50) {
//       prevSlide();
//       setIsDragging(false);
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   const handleMouseDown = (e) => {
//     setStartX(e.clientX);
//     setIsDragging(true);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.clientX;
//     const diffX = startX - currentX;
//     if (diffX > 50) {
//       nextSlide();
//       setIsDragging(false);
//     } else if (diffX < -50) {
//       prevSlide();
//       setIsDragging(false);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <section className="carrousel">
//       <div className="carrousel__header">
//         <p className="carrousel__number">
//           02 <span className="carrousel__separator">/</span>
//         </p>
//         <h1 className="carrousel__header-title">
//           {translations[language].projets}
//         </h1>
//       </div>
//       <div
//         className="carrousel__container"
//         ref={containerRef}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         <div className="carrousel__stats">
//           <button onClick={prevSlide} className="carrousel__button">
//             <svg
//               width="45"
//               height="81"
//               viewBox="0 0 45 81"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="carrousel__arrow"
//             >
//               <line
//                 x1="43.0607"
//                 y1="1.06066"
//                 x2="4.06066"
//                 y2="40.0607"
//                 stroke="white"
//                 strokeWidth="3"
//               />
//               <line
//                 x1="40.9364"
//                 y1="79.0577"
//                 x2="1.93947"
//                 y2="40.0608"
//                 stroke="white"
//                 strokeWidth="3"
//               />
//             </svg>
//           </button>
//           <div key={slides[currentSlide].id} className="carrousel__stats-item">
//             <h1 className="carrousel__title">
//               {" "}
//               <a href={slides[currentSlide].url} target="_blank">
//                 {slides[currentSlide].nom}{" "}
//               </a>
//               <svg
//                 width="72"
//                 height="66"
//                 viewBox="0 0 72 66"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="carrousel__title-svg"
//               >
//                 <path
//                   d="M48.9458 16.8511L-2.10356e-06 56.1702L8.867 66L57.1034 27.0319L54.266 62.4894L67.3892 62.4894L72 6.31915L15.9606 5.97721e-07L15.9606 12.9894L48.9458 16.8511Z"
//                   fill="#D0E2FF"
//                 />
//               </svg>
//             </h1>
//             <div className="carrousel__list">
//               <div className="carrousel__item">
//                 <p className="carrousel__label">
//                   {" "}
//                   {translations[language].projets}
//                 </p>
//                 <a
//                   className="carrousel__link"
//                   href={slides[currentSlide].url}
//                   target="_blank"
//                 >
//                   {slides[currentSlide].nom}{" "}
//                 </a>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">
//                   {" "}
//                   {translations[language].technologies}
//                 </p>
//                 <div className="carrousel__wrapper">
//                   {slides[currentSlide].technologies.map((tech, index) => (
//                     <div key={index} className="carrousel__technologies">
//                       {tech === "Tailwindcss" ? (
//                         <Tailwindcss className="carrousel__icon" />
//                       ) : (
//                         <FontAwesomeIcon
//                           icon={technologies.find((t) => t.name === tech).icon}
//                           className="carrousel__icon"
//                           style={{
//                             color: technologies.find((t) => t.name === tech)
//                               .color,
//                           }}
//                         />
//                       )}
//                       <p className="projet__text">{tech}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Date</p>
//                 <p className="carrousel__date">{slides[currentSlide].annee}</p>
//               </div>
//             </div>
//             <p className="carrousel__description">
//               {translations[language][slides[currentSlide].contentKey]}
//             </p>
//           </div>
//           <div className="carrousel__img-container">
//             <img
//               src={slides[currentSlide].img}
//               alt={slides[currentSlide].nom}
//               className="carrousel__img"
//             />
//           </div>
//           <button onClick={nextSlide} className="carrousel__button">
//             <svg
//               width="45"
//               height="81"
//               viewBox="0 0 45 81"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="carrousel__arrow"
//             >
//               <line
//                 x1="1.93934"
//                 y1="79.9364"
//                 x2="40.9393"
//                 y2="40.9364"
//                 stroke="white"
//                 strokeWidth="3"
//               />
//               <line
//                 x1="4.06359"
//                 y1="1.93934"
//                 x2="43.0605"
//                 y2="40.9363"
//                 stroke="white"
//                 strokeWidth="3"
//               />
//             </svg>
//           </button>
//         </div>
//         <p className="carrousel__meter">
//           0{currentSlide + 1} <span className="carrousel__separator">/</span> 0
//           {slides.length}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Carrousel;

import React, { useState, useContext, useRef } from "react";
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
  const containerRef = useRef(null);

  const slides = [
    {
      id: 1,
      titre: "01",
      nom: "Angoul'Oriente",
      contentKey: "angoulorienteDescription",
      img: angouloriente,
      technologies: ["React", "Sass"],
      url: "https://angouloriente.netlify.app/",
      annee: "Juin 2024",
    },
    {
      id: 2,
      titre: "02",
      nom: "Beez2Be",
      contentKey: "beez2beDescription",
      img: beez2be,
      technologies: ["React", "MongoDb", "Tailwindcss"],
      url: "https://example.com/angouloriente",
      annee: "Février 2024",
    },
    {
      id: 3,
      titre: "03",
      nom: "Foodtruck",
      contentKey: "foodtruckDescription",
      img: foodtruck,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://rtiphonet.fr/foodtruck/accueil.php",
      annee: "Janvier 2024",
    },
    {
      id: 4,
      titre: "04",
      nom: "BeeAuTop",
      contentKey: "beeautopDescription",
      img: beeautop,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://kbelin.alwaysdata.net/beeautop/",
      annee: "Juin 2023",
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
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
              <div className="carrousel__item">
                <p className="carrousel__label">Date</p>
                <p className="carrousel__date">{slides[currentSlide].annee}</p>
              </div>
            </div>
            <p className="carrousel__description">
              {translations[language][slides[currentSlide].contentKey]}
            </p>
          </div>
          <div className="carrousel__img-container">
            <img
              src={slides[currentSlide].img}
              alt={slides[currentSlide].nom}
              className="carrousel__img"
            />
          </div>
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

// import React, { useState, useContext, useRef } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faJs,
//   faSass,
//   faWordpress,
//   faPhp,
//   faHtml5,
//   faCss3Alt,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// import beeautop from "./../assets/img/beeautop.webp";
// import beez2be from "./../assets/img/beez2be.webp";
// import foodtruck from "./../assets/img/foodtruck.webp";
// import angouloriente from "./../assets/img/angouloriente.webp";
// import Tailwindcss from "./Tailwindcss";

// function Carrousel() {
//   const { language } = useContext(LanguageContext);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       titre: "01",
//       nom: "Angoul'Oriente",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel.",
//       img: angouloriente,
//       technologies: ["React", "Sass"],
//       url: "https://angouloriente.netlify.app/",
//       annee: "2024",
//     },
//     {
//       id: 2,
//       titre: "02",
//       nom: "Beez2Be",
//       content:
//         "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande.",
//       img: beez2be,
//       technologies: ["React", "MongoDb", "Tailwindcss"],
//       url: "https://example.com/angouloriente",
//       annee: "2024",
//     },
//     {
//       id: 3,
//       titre: "03",
//       nom: "Foodtruck",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel.",
//       img: foodtruck,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://rtiphonet.fr/foodtruck/accueil.php",
//       annee: "2024",
//     },
//     {
//       id: 4,
//       titre: "04",
//       nom: "BeeAuTop",
//       content:
//         "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel.",
//       img: beeautop,
//       technologies: ["PHP", "Html", "Css", "JavaScript"],
//       url: "https://kbelin.alwaysdata.net/beeautop/",
//       annee: "S2 2023",
//     },
//   ];

//   const technologies = [
//     { name: "React", icon: faReact, color: "#61DAFB" },
//     { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
//     { name: "Sass", icon: faSass, color: "#CC6699" },
//     { name: "WordPress", icon: faWordpress, color: "#21759B" },
//     { name: "MongoDb", icon: faDatabase, color: "#47A248" },
//     { name: "PHP", icon: faPhp, color: "#777BB4" },
//     { name: "Html", icon: faHtml5, color: "#E34F26" },
//     { name: "Css", icon: faCss3Alt, color: "#1572B6" },
//   ];

//   // const getTechnologyIcon = (techName) => {
//   //   const tech = technologies.find((t) => t.name === techName);
//   //   return tech ? (
//   //     <FontAwesomeIcon
//   //       key={techName}
//   //       icon={tech.icon}
//   //       style={{ color: tech.color }}
//   //       className="carrousel__stats-icon"
//   //     />
//   //   ) : null;
//   // };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="carrousel">
//       <div className="carrousel__header">
// <p className="carrousel__number">
//   02 <span className="carrousel__separator">/</span>
// </p>
//         <h1 className="carrousel__header-title">
//           {translations[language].projets}
//         </h1>
//       </div>
//       <div className="carrousel__container">
//         <div className="carrousel__stats">
// <button onClick={prevSlide} className="carrousel__button">
//   <svg
//     width="45"
//     height="81"
//     viewBox="0 0 45 81"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="carrousel__arrow"
//   >
//     <line
//       x1="43.0607"
//       y1="1.06066"
//       x2="4.06066"
//       y2="40.0607"
//       stroke="white"
//       strokeWidth="3"
//     />
//     <line
//       x1="40.9364"
//       y1="79.0577"
//       x2="1.93947"
//       y2="40.0608"
//       stroke="white"
//       strokeWidth="3"
//     />
//   </svg>
// </button>
//           <div key={slides[currentSlide].id} className="carrousel__stats-item">
//             <h1 className="carrousel__title">
//               {" "}
//               <a href={slides[currentSlide].url} target="_blank">
//                 {slides[currentSlide].nom}{" "}
//               </a>
//               <svg
//                 width="72"
//                 height="66"
//                 viewBox="0 0 72 66"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="carrousel__title-svg"
//               >
//                 <path
//                   d="M48.9458 16.8511L-2.10356e-06 56.1702L8.867 66L57.1034 27.0319L54.266 62.4894L67.3892 62.4894L72 6.31915L15.9606 5.97721e-07L15.9606 12.9894L48.9458 16.8511Z"
//                   fill="#D0E2FF"
//                 />
//               </svg>
//             </h1>
//             <div className="carrousel__list">
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Projets</p>
//                 <a
//                   className="carrousel__link"
//                   href={slides[currentSlide].url}
//                   target="_blank"
//                 >
//                   {slides[currentSlide].nom}{" "}
//                 </a>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Technologies</p>
//                 <div className="carrousel__wrapper">
//                   {slides[currentSlide].technologies.map((tech, index) => (
//                     <div key={index} className="carrousel__technologies">
//                       {tech === "Tailwindcss" ? (
//                         <Tailwindcss className="carrousel__icon" />
//                       ) : (
//                         <FontAwesomeIcon
//                           icon={technologies.find((t) => t.name === tech).icon}
//                           className="carrousel__icon"
//                           style={{
//                             color: technologies.find((t) => t.name === tech)
//                               .color,
//                           }}
//                         />
//                       )}
//                       <p className="projet__text">{tech}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="carrousel__item">
//                 <p className="carrousel__label">Date</p>
//                 <p className="carrousel__date">{slides[currentSlide].annee}</p>
//               </div>
//             </div>
//             <p className="carrousel__description">
//               {slides[currentSlide].content}
//             </p>
//           </div>
//           {/* <div className="carrousel__img-container">
//             <img
//               src={slides[currentSlide].img}
//               alt={slides[currentSlide].nom}
//               className="carrousel__img"
//             />
//           </div> */}
// <button onClick={nextSlide} className="carrousel__button">
//   <svg
//     width="45"
//     height="81"
//     viewBox="0 0 45 81"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="carrousel__arrow"
//   >
//     <line
//       x1="1.93934"
//       y1="79.9364"
//       x2="40.9393"
//       y2="40.9364"
//       stroke="white"
//       strokeWidth="3"
//     />
//     <line
//       x1="4.06359"
//       y1="1.93934"
//       x2="43.0605"
//       y2="40.9363"
//       stroke="white"
//       strokeWidth="3"
//     />
//   </svg>
// </button>
//         </div>
//         <p className="carrousel__meter">
//           0{currentSlide + 1} <span className="carrousel__separator">/</span> 0
//           {slides.length}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Carrousel;
