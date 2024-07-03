// // import React, { useContext } from "react";
// // import { LanguageContext } from "./LanguageContext";
// // import { translations } from "./../translations";

// // import reactLogo from "./../assets/img/react-icon.webp";
// // import jslogo from "./../assets/img/js.webp";
// // import mongodblogo from "./../assets/img/mongodb.webp";
// // import phplogo from "./../assets/img/php.webp";
// // import scsslogo from "./../assets/img/scss.webp";
// // import sqllogo from "./../assets/img/mysql.webp";
// // import wordpresslogo from "./../assets/img/wordpress.webp";
// // import gitlogo from "./../assets/img/git.webp";

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faReact,
// //   faJs,
// //   faSass,
// //   faWordpress,
// // } from "@fortawesome/free-brands-svg-icons";
// // import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// // function Technologies() {
// //   const { language } = useContext(LanguageContext);

// //   const technologies = [
// //     {
// //       title: "React",
// //       description: translations[language].reactdescription,
// //       icon: faReact,
// //       image: [reactLogo],
// //     },
// //     {
// //       title: "Javascript",
// //       description: translations[language].jsdescription,
// //       icon: faJs,
// //       image: [jslogo],
// //     },
// //     {
// //       title: "SCSS",
// //       description: translations[language].scssdescription,
// //       icon: faSass,
// //       image: [scsslogo],
// //     },
// //     // {
// //     //   title: "Backend",
// //     //   description: translations[language].backenddescription,
// //     //   icon: faDatabase,
// //     //   image: [mongodblogo, phplogo, sqllogo, gitlogo],
// //     // },

// //     {
// //       title: "WordPress",
// //       description: translations[language].wordpressdescription,
// //       icon: faWordpress,
// //       image: [wordpresslogo],
// //     },
// //   ];

// //   return (
// //     <section className="technologies">
// //       {technologies.map((tech, index) => (
// //         <div key={index} className="technologies__item">
// //           <div className="technologies__separator">
// //             <div className="technologies__wrapper">
// //               <h1 className="technologies__title">{tech.title}</h1>
// //               <FontAwesomeIcon
// //                 icon={tech.icon}
// //                 className="technologies__icon"
// //               />
// //               <p className="technologies__description">{tech.description}</p>
// //             </div>
// //           </div>
// //           <div className="technologies__images">
// //             {tech.image.map((img, idx) => (
// //               <img
// //                 key={idx}
// //                 src={img}
// //                 alt={`${tech.title} Logo`}
// //                 className="technologies__image"
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }

// // export default Technologies;

import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";

import reactLogo from "./../assets/img/react-icon.webp";
import jslogo from "./../assets/img/js.webp";
import mongodblogo from "./../assets/img/mongodb.webp";
import phplogo from "./../assets/img/php.webp";
import scsslogo from "./../assets/img/scss.webp";
import sqllogo from "./../assets/img/mysql.webp";
import wordpresslogo from "./../assets/img/wordpress.webp";
import gitlogo from "./../assets/img/git.webp";
import expresslogo from "./../assets/img/express.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faSass,
  faWordpress,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Technologies() {
  const { language } = useContext(LanguageContext);

  return (
    <section class="technologies">
      <div className="technologies__header">
        <p className="technologies__number">
          01 <span className="technologies__separator">/</span>
        </p>
        <h1 className="technologies__header-title">
          {" "}
          {translations[language].competences}
        </h1>
      </div>
      <div class="technologies__container">
        <div class="technologies__container-react">
          <div class="technologies__wrapper">
            <img
              class="technologies__image"
              src={reactLogo}
              alt="logo technologie"
              id="technologies__image"
            />
          </div>
          <div class="technologies__content">
            <FontAwesomeIcon class="technologies__icon" icon={faReact} />
            <h1 class="technologies__title">React</h1>
            <p class="technologies__description">
              {translations[language].reactdescription}
            </p>
          </div>
        </div>
        <div class="technologies__container-js">
          <div class="technologies__wrapper">
            <img
              class="technologies__image"
              src={jslogo}
              alt="logo technologie"
            />
          </div>
          <div class="technologies__content">
            <FontAwesomeIcon class="technologies__icon" icon={faJs} />
            <h1 class="technologies__title">Javascript</h1>
            <p class="technologies__description">
              {translations[language].jsdescription}
            </p>
          </div>
        </div>
        <div class="technologies__container-php">
          <div class="technologies__wrapper">
            <img
              class="technologies__image"
              src={phplogo}
              alt="logo technologie"
            />
          </div>
          <div class="technologies__content">
            <FontAwesomeIcon class="technologies__icon" icon={faPhp} />
            <h1 class="technologies__title">Php</h1>
            <p class="technologies__description">
              {translations[language].phpdescription}
            </p>
          </div>
        </div>
        <div class="technologies__container-backend">
          <div class="technologies__wrapper">
            <div className="technologies__image-wrapper">
              <img
                class="technologies__image"
                src={sqllogo}
                alt="logo technologie"
              />
              <img
                class="technologies__image"
                src={mongodblogo}
                alt="logo technologie"
              />
              <img
                class="technologies__image"
                src={gitlogo}
                alt="logo technologie"
              />
              <img
                class="technologies__image-express"
                src={expresslogo}
                alt="logo technologie"
              />
            </div>
          </div>
          <div class="technologies__content">
            <FontAwesomeIcon className="technologies__icon" icon={faDatabase} />{" "}
            <h1 class="technologies__title">Backend</h1>
            <p class="technologies__description">
              {translations[language].backenddescription}
            </p>
          </div>
        </div>
        <div class="technologies__container-scss">
          <div class="technologies__wrapper">
            <img
              class="technologies__image"
              src={scsslogo}
              alt="logo technologie"
            />
          </div>
          <div class="technologies__content">
            <FontAwesomeIcon class="technologies__icon" icon={faSass} />
            <h1 class="technologies__title">Scss</h1>
            <p class="technologies__description">
              {translations[language].scssdescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

// import React, { useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// import reactLogo from "./../assets/img/react-icon.webp";
// import jslogo from "./../assets/img/js.webp";
// import mongodblogo from "./../assets/img/mongodb.webp";
// import phplogo from "./../assets/img/php.webp";
// import scsslogo from "./../assets/img/scss.webp";
// import sqllogo from "./../assets/img/mysql.webp";
// import wordpresslogo from "./../assets/img/wordpress.webp";
// import gitlogo from "./../assets/img/git.webp";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faJs,
//   faSass,
//   faWordpress,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// function Technologies() {
//   const { language } = useContext(LanguageContext);

//   const technologies = [
//     {
//       title: "React",
//       description: translations[language].reactdescription,
//       icon: faReact,
//       image: [reactLogo],
//       side: "left",
//     },
//     {
//       title: "Javascript",
//       description: translations[language].jsdescription,
//       icon: faJs,
//       image: [jslogo],
//       side: "right",
//     },
//     {
//       title: "SCSS",
//       description: translations[language].scssdescription,
//       icon: faSass,
//       image: [scsslogo],
//       side: "left",
//     },
//     {
//       title: "WordPress",
//       description: translations[language].wordpressdescription,
//       icon: faWordpress,
//       image: [wordpresslogo],
//       side: "right",
//     },
//   ];

//   const leftTechnologies = technologies.filter((tech) => tech.side === "left");
//   const rightTechnologies = technologies.filter(
//     (tech) => tech.side === "right"
//   );

//   return (
//     <section className="technologies">
//       <div className="technologies__column">
//         {leftTechnologies.map((tech, index) => (
//           <div key={index} className="technologies__item">
//             <div className="technologies__separator">
//               <div className="technologies__wrapper">
//                 <h1 className="technologies__title">{tech.title}</h1>
//                 <FontAwesomeIcon
//                   icon={tech.icon}
//                   className="technologies__icon"
//                 />
//                 <p className="technologies__description">{tech.description}</p>
//               </div>
//             </div>
//             <div className="technologies__images">
//               <img src={tech.image} alt={tech.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="technologies__column">
//         {rightTechnologies.map((tech, index) => (
//           <div key={index} className="technologies2__item">
//             <div className="technologies__images">
//               <img src={tech.image} alt={tech.title} />
//             </div>
//             <div className="technologies2__separator">
//               <div className="technologies2__wrapper">
//                 <h1 className="technologies__title">{tech.title}</h1>
//                 <FontAwesomeIcon
//                   icon={tech.icon}
//                   className="technologies__icon"
//                 />
//                 <p className="technologies__description">{tech.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Technologies;
