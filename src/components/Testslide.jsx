// import { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import "animate.css";

// import logo from "./../assets/img/logo.webp";
// import beeautop from "./../assets/img/beeautop.webp";
// import beez2be from "./../assets/img/beez2be.webp";
// import foodtruck from "./../assets/img/foodtruck.webp";
// import angouloriente from "./../assets/img/angouloriente.webp";
// // import Tailwindcss from "./../assets/img/tailwindcss.svg";
// // import { ReactComponent as Tailwindcss } from "./../assets/img/tailwindcss.svg";
// import Tailwindcss from "./Tailwindcss";
// // import { default as Tailwindcss } from "./../assets/img/tailwindcss.svg";

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

// function Testslide() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const titreRef = useRef(null);
//   const contentRef = useRef(null);
//   const nomRef = useRef(null);

// const slides = [
//   {
//     id: 1,
//     titre: "01",
//     nom: "Angoul'Oriente",
//     content:
//       "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte. Une fois le QR scanné, une lettre vous sera donnée. Récupérez les 8 lettres pour former un mot. À noter que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fait toutes les balises (plus d'infos sur le chiffrement de César : https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu à cet effet pour terminer la course et arrêter le chrono !",
//     img: angouloriente,
//     technologies: ["React", "Sass"],
//     url: "https://angouloriente.netlify.app/",
//     annee: "2024",
//   },
//   {
//     id: 2,
//     titre: "02",
//     nom: "Beez2Be",
//     content:
//       "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande. Cette section du site offre la possibilité de réserver un repas pour une date et une heure spécifiques. Pour plus d'informations, vous pouvez consulter le code sur mon GitHub.",
//     img: beez2be,
//     technologies: ["React", "MongoDb", "Tailwindcss"],
//     url: "https://example.com/angouloriente",
//     annee: "2024",
//   },
//   {
//     id: 3,
//     titre: "03",
//     nom: "Foodtruck",
//     content:
//       "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
//     img: foodtruck,
//     technologies: ["PHP", "Html", "Css", "JavaScript"],
//     url: "https://rtiphonet.fr/foodtruck/accueil.php",
//     annee: "2024",
//   },
//   {
//     id: 4,
//     titre: "04",
//     nom: "BeeAuTop",
//     content:
//       "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
//     img: beeautop,
//     technologies: ["PHP", "Html", "Css", "JavaScript"],
//     url: "https://kbelin.alwaysdata.net/beeautop/",
//     annee: "2023",
//   },
// ];

//   // const technologies = [
//   //   { name: "React", icon: faReact },
//   //   { name: "JavaScript", icon: faJs },
//   //   { name: "Sass", icon: faSass },
//   //   { name: "WordPress", icon: faWordpress },
//   //   { name: "MongoDb", icon: faDatabase },
//   //   { name: "PHP", icon: faPhp },
//   //   { name: "Html", icon: faHtml5 },
//   //   { name: "Css", icon: faCss3Alt },
//   //   { name: "Tailwindcss", icon: Tailwindcss },
//   // ];
// const technologies = [
//   { name: "React", icon: faReact, color: "#61DAFB" },
//   { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
//   { name: "Sass", icon: faSass, color: "#CC6699" },
//   { name: "WordPress", icon: faWordpress, color: "#21759B" },
//   { name: "MongoDb", icon: faDatabase, color: "#47A248" },
//   { name: "PHP", icon: faPhp, color: "#777BB4" },
//   { name: "Html", icon: faHtml5, color: "#E34F26" },
//   { name: "Css", icon: faCss3Alt, color: "#1572B6" },
// ];

//   const handleNext = () => {
//     const nextSlide = (currentSlide + 1) % slides.length;
//     animateSlide(nextSlide, "next");
//   };

//   const handlePrev = () => {
//     const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
//     animateSlide(nextSlide, "prev");
//   };

//   const animateSlide = (nextSlide, direction) => {
//     const tl = gsap.timeline();
//     tl.to(titreRef.current.children[1], {
//       x: direction === "next" ? "-100%" : "100%",
//       opacity: 1,
//       duration: 0.3,
//       onComplete: () => {
//         setCurrentSlide(nextSlide);
//         tl.set(titreRef.current.children[1], {
//           opacity: 1,
//           x: direction === "next" ? "100%" : "-100%",
//         }); // Réinitialiser pour la prochaine animation
//         tl.to(titreRef.current.children[1], {
//           x: "0%",
//           duration: 0.3,
//         });
//       },
//     });
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       contentRef.current,
//       { opacity: 0, y: -20 },
//       { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       nomRef.current,
//       { opacity: 0, y: -20 },
//       { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
//     );
//   }, [currentSlide]);

//   const textRef = useRef(null);
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const textWidth = textRef.current.offsetWidth;
//     const wrapperWidth = wrapperRef.current.offsetWidth;

//     gsap.to(textRef.current, {
//       x: `-=${textWidth}`,
//       duration: 10,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % textWidth),
//       },
//     });
//   }, []);

//   return (
//     <div className="projet__content">
//       <div className="carrousel__container">
//         <div className="carrousel__num-content">
//           <div className="carrousel__num">
//             <div className="carroussel__slider">
//               <div className="carrousel__titre">
//                 <h1 className="carrousel__num-titre1" ref={titreRef}>
//                   {slides[currentSlide].titre.split("").map((char, idx) => (
//                     <span
//                       key={idx}
//                       className={idx === 1 ? "slide-animation" : "slide-fixed"}
//                     >
//                       {char}
//                     </span>
//                   ))}
//                 </h1>
//                 <div className="projet__année">
//                   <p>2023</p>
//                 </div>
//                 <div>
//                   <h1 className="carrousel__num-nom" ref={nomRef}>
//                     <a
//                       href={slides[currentSlide].url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="projet__lien"
//                     >
//                       {slides[currentSlide].nom}

//                       <svg
//                         width="48"
//                         height="44"
//                         viewBox="0 0 48 44"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="projet__arrow"
//                       >
//                         <path
//                           d="M32.6305 11.234L-1.40237e-06 37.4468L5.91133 44L38.069 18.0213L36.1773 41.6596L44.9261 41.6596L48 4.21277L10.6404 3.9848e-07L10.6404 8.65957L32.6305 11.234Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     </a>
//                   </h1>

//                   {/* <div className="btn__container">
//                     {slides[currentSlide].technologies.map((tech, index) => (
//                       <div key={index} className="projet__btn">
//                         <FontAwesomeIcon
//                           icon={technologies.find((t) => t.name === tech).icon}
//                           className="projet__icon"
//                         />
//                         <p className="projet__text">{tech}</p>
//                       </div>
//                     ))}
//                   </div> */}
//                   <div className="btn__container">
//                     {slides[currentSlide].technologies.map((tech, index) => (
//                       <div key={index} className="projet__btn ">
//                         {tech === "Tailwindcss" ? (
//                           <Tailwindcss className="projet__icon" />
//                         ) : (
//                           <FontAwesomeIcon
//                             icon={
//                               technologies.find((t) => t.name === tech).icon
//                             }
//                             className="projet__icon"
//                             style={{
//                               color: technologies.find((t) => t.name === tech)
//                                 .color,
//                             }}
//                           />
//                         )}
//                         <p className="projet__text">{tech}</p>
//                       </div>
//                     ))}
//                     <p className="projet__btn projet__text">S2 2023</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="carrousel__content">
//                 <p className="carrousel__content-p" ref={contentRef}>
//                   {slides[currentSlide].content}
//                 </p>
//                 <div className="projet__containerimg">
//                   <a
//                     href={slides[currentSlide].url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       className="projet__img"
//                       src={slides[currentSlide].img}
//                       alt=""
//                     />
//                   </a>
//                 </div>
//               </div>
//               <div className="carrousel__arrow">
//                 <svg
//                   width="137"
//                   height="151"
//                   viewBox="0 0 137 151"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={handlePrev}
//                 >
//                   <path
//                     d="M131.292 75.4685H12.1302M71.7081 141.16L12.1302 75.5L71.7081 9.83386"
//                     stroke="white"
//                     strokeWidth="5"
//                   />
//                 </svg>
//                 <p>{`0${currentSlide + 1}/0${slides.length}`}</p>
//                 <svg
//                   width="137"
//                   height="151"
//                   viewBox="0 0 137 151"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={handleNext}
//                 >
//                   <path
//                     d="M5.70832 75.5315L124.87 75.5315M65.2919 9.84019L124.87 75.5L65.2919 141.166"
//                     stroke="white"
//                     strokeWidth="4"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div className="carrousel__border carrousel__border-top-left"></div>
//           <div className="carrousel__border carrousel__border-top-right"></div>
//           <div className="carrousel__border carrousel__border-bottom-left"></div>
//           <div className="carrousel__border carrousel__border-bottom-right"></div>
//         </div>
//       </div>
//       <div className="scroll-container" ref={wrapperRef}>
//         <div className="scroll-text" ref={textRef}>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//           <span>Projet </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testslide;

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "animate.css";

import logo from "./../assets/img/logo.webp";
import beeautop from "./../assets/img/beeautop.webp";
import beez2be from "./../assets/img/beez2be.webp";
import foodtruck from "./../assets/img/foodtruck.webp";
import angouloriente from "./../assets/img/angouloriente.webp";
// import Tailwindcss from "./../assets/img/tailwindcss.svg";
// import { ReactComponent as Tailwindcss } from "./../assets/img/tailwindcss.svg";
import Tailwindcss from "./Tailwindcss";
// import { default as Tailwindcss } from "./../assets/img/tailwindcss.svg";

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

function Testslide() {
  // Votre état et les références existants
  const [currentSlide, setCurrentSlide] = useState(0);
  const titreRef = useRef(null);
  const contentRef = useRef(null);
  const nomRef = useRef(null);

  const slides = [
    {
      id: 1,
      titre: "01",
      nom: "Angoul'Oriente",
      content:
        "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. ",
      // "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte. Une fois le QR scanné, une lettre vous sera donnée. Récupérez les 8 lettres pour former un mot. À noter que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fait toutes les balises (plus d'infos sur le chiffrement de César : https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu à cet effet pour terminer la course et arrêter le chrono !",

      img: angouloriente,
      technologies: ["React", "Sass"],
      url: "https://angouloriente.netlify.app/",
      annee: "2024",
    },
    {
      id: 2,
      titre: "02",
      nom: "Beez2Be",
      content:
        "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande. Cette section du site offre la possibilité de réserver un repas pour une date et une heure spécifiques. Pour plus d'informations, vous pouvez consulter le code sur mon GitHub.",
      img: beez2be,
      technologies: ["React", "MongoDb", "Tailwindcss"],
      url: "https://example.com/angouloriente",
      annee: "2024",
    },
    {
      id: 3,
      titre: "03",
      nom: "Foodtruck",
      content:
        "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
      img: foodtruck,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://rtiphonet.fr/foodtruck/accueil.php",
      annee: "2024",
    },
    {
      id: 4,
      titre: "04",
      nom: "BeeAuTop",
      content:
        "Cette application vous fait vivre une course d'orientation interactive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visibles sur la carte ainsi que votre position en temps réel. Attention ! Il est important de respecter l'ordre des points en commençant par le point n°1 et en finissant par le point n°8. À chaque point, vous trouverez un QR code que vous pourrez scanner en cliquant sur le ping correspondant au point sur la carte.",
      img: beeautop,
      technologies: ["PHP", "Html", "Css", "JavaScript"],
      url: "https://kbelin.alwaysdata.net/beeautop/",
      annee: "2023",
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

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    animateSlide(nextSlide, "next");
  };

  const handlePrev = () => {
    const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    animateSlide(nextSlide, "prev");
  };

  const animateSlide = (nextSlide, direction) => {
    const tl = gsap.timeline();
    tl.to(titreRef.current.children[1], {
      x: direction === "next" ? "-100%" : "100%",
      opacity: 1,
      duration: 0.3,
      onComplete: () => {
        setCurrentSlide(nextSlide);
        tl.set(titreRef.current.children[1], {
          opacity: 1,
          x: direction === "next" ? "100%" : "-100%",
        });
        tl.to(titreRef.current.children[1], {
          x: "0%",
          duration: 0.3,
        });
      },
    });
  };

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      nomRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [currentSlide]);

  return (
    <div className="projet__content">
      <div className="carrousel__container">
        <div className="carrousel__num-content">
          <div className="carrousel__num">
            <div className="carroussel__slider">
              <div className="carrousel__titre">
                <h1 className="carrousel__num-titre1" ref={titreRef}>
                  {slides[currentSlide].titre.split("").map((char, idx) => (
                    <span
                      key={idx}
                      className={idx === 1 ? "slide-animation" : "slide-fixed"}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
                {/* <div className="projet__année">
                  <p>2023</p>
                </div> */}
                <div>
                  <h1 className="carrousel__num-nom" ref={nomRef}>
                    <a
                      href={slides[currentSlide].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projet__lien"
                      onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                      onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                    >
                      {slides[currentSlide].nom}

                      <svg
                        width="48"
                        height="44"
                        viewBox="0 0 48 44"
                        xmlns="http://www.w3.org/2000/svg"
                        className="projet__arrow"
                      >
                        <path
                          d="M32.6305 11.234L-1.40237e-06 37.4468L5.91133 44L38.069 18.0213L36.1773 41.6596L44.9261 41.6596L48 4.21277L10.6404 3.9848e-07L10.6404 8.65957L32.6305 11.234Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </h1>
                  <div className="btn__container">
                    {slides[currentSlide].technologies.map((tech, index) => (
                      <div key={index} className="projet__btn ">
                        {tech === "Tailwindcss" ? (
                          <Tailwindcss className="projet__icon" />
                        ) : (
                          <FontAwesomeIcon
                            icon={
                              technologies.find((t) => t.name === tech).icon
                            }
                            className="projet__icon"
                            style={{
                              color: technologies.find((t) => t.name === tech)
                                .color,
                            }}
                          />
                        )}
                        <p className="projet__text">{tech}</p>
                      </div>
                    ))}
                    <p className="projet__btn projet__text">S2 2023</p>
                  </div>
                </div>
              </div>
              <div className="carrousel__content">
                <p className="carrousel__content-p" ref={contentRef}>
                  {slides[currentSlide].content}
                </p>
                <div className="projet__containerimg">
                  <a
                    href={slides[currentSlide].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="projet__img"
                      src={slides[currentSlide].img}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="carrousel__arrow">
                <svg
                  width="137"
                  height="151"
                  viewBox="0 0 137 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handlePrev}
                >
                  <path
                    d="M131.292 75.4685H12.1302M71.7081 141.16L12.1302 75.5L71.7081 9.83386"
                    stroke="white"
                    strokeWidth="5"
                  />
                </svg>
                <p>{`0${currentSlide + 1}/0${slides.length}`}</p>
                <svg
                  width="137"
                  height="151"
                  viewBox="0 0 137 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleNext}
                >
                  <path
                    d="M5.70832 75.5315L124.87 75.5315M65.2919 9.84019L124.87 75.5L65.2919 141.166"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="carrousel__border carrousel__border-top-left"></div>
          <div className="carrousel__border carrousel__border-top-right"></div>
          <div className="carrousel__border carrousel__border-bottom-left"></div>
          <div className="carrousel__border carrousel__border-bottom-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Testslide;
