// import React, { useContext, useEffect, useRef } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";

// function Compétences() {
//   const { language } = useContext(LanguageContext);

//   return (
//     <section className="competences2" id="competences">
//       <p className="competences2__number">
//         01 <span className="competences2__separator">/</span>
//       </p>
//       <div className="competences2__container">
//         <div className="competences2__wrapper">
//           <h1 className="competences2__title">
//             {translations[language].competences}
//           </h1>
//           <div className="competences2__content">
//             <h3 className="competences2__subtitle">
//               {translations[language].competences}
//             </h3>
//             <p className="competences2__description">
//               <span>{translations[language].competencesdescription}</span>
//             </p>
//             <a
//               className="competences2__link"
//               href="https://github.com/MuuvaY"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {translations[language].projetsliens}
//             </a>
//           </div>
//           <svg
//             width="123"
//             height="123"
//             viewBox="0 0 123 123"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             // ref={arrowRef}
//             className="competences2__fleche"
//           >
//             <g clipPath="url(#clip0_263_453)">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M66.625 111.694L98.5794 73.1133L102.5 76.4189L63.9549 122.544L25.625 76.4189L29.5405 73.1081L61.5 111.699L61.5 -0.456119L66.625 -0.456118L66.625 111.694Z"
//                 fill="#0339F9"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_263_453">
//                 <rect
//                   width="123"
//                   height="123"
//                   fill="white"
//                   transform="translate(123 123) rotate(-180)"
//                 />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Compétences;

import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Compétences() {
  const { language } = useContext(LanguageContext);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="competences2"
      id="competences"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.p className="competences2__number" variants={itemVariants}>
        01 <span className="competences2__separator">/</span>
      </motion.p>
      <motion.div className="competences2__container" variants={itemVariants}>
        <div className="competences2__wrapper">
          <motion.h1 className="competences2__title" variants={itemVariants}>
            {translations[language].competences}
          </motion.h1>
          <motion.div className="competences2__content" variants={itemVariants}>
            <motion.h3
              className="competences2__subtitle"
              variants={itemVariants}
            >
              {translations[language].competences}
            </motion.h3>
            <motion.p
              className="competences2__description"
              variants={itemVariants}
            >
              <span>{translations[language].competencesdescription}</span>
            </motion.p>
            <motion.a
              className="competences2__link"
              href="https://github.com/MuuvaY"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              {translations[language].projetsliens}
            </motion.a>
          </motion.div>
          <motion.svg
            width="123"
            height="123"
            viewBox="0 0 123 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="competences2__fleche"
            variants={svgVariants}
          >
            <motion.g clipPath="url(#clip0_263_453)" variants={pathVariants}>
              <motion.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.625 111.694L98.5794 73.1133L102.5 76.4189L63.9549 122.544L25.625 76.4189L29.5405 73.1081L61.5 111.699L61.5 -0.456119L66.625 -0.456118L66.625 111.694Z"
                fill="#0339F9"
              />
            </motion.g>
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
          </motion.svg>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Compétences;
