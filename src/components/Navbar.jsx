// import React, { useState, useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";
// import LanguageToggle from "./LanguageToggle";

// function Navbar() {
//   const { language } = useContext(LanguageContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <a href="#top" className="navbar__brand">
//         <span className="navbar__brand-name">Marius YVART</span>
//         <span className="navbar__brand-copyright">
//           {translations[language].portfolioCopyright}
//         </span>
//       </a>
//       <button
//         className={`navbar__hamburger hamburger hamburger--spring ${
//           isMenuOpen ? "hamburger--is-active" : ""
//         }`}
//         type="button"
//         onClick={toggleMenu}
//         aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
//       >
//         <span className="hamburger__box">
//           <span className="hamburger__inner"></span>
//         </span>
//       </button>
//       <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
//         <li className="navbar__menu-item">
//           <a
//             href="#competences"
//             className="navbar__menu-link"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {translations[language].competences}
//           </a>
//         </li>
//         <li className="navbar__menu-item">
//           <a
//             href="#projets"
//             className="navbar__menu-link"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {translations[language].projets}
//           </a>
//         </li>
//         <li className="navbar__menu-item">
//           <a
//             href="#contact"
//             className="navbar__menu-link"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {translations[language].contact}
//           </a>
//         </li>
//         <li className="navbar__menu-item navbar__menu-item--language-toggle">
//           <LanguageToggle onLanguageChange={() => setIsMenuOpen(false)} />
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useState, useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { translations } from "./../translations";
// import LanguageToggle from "./LanguageToggle";
// import { motion, AnimatePresence } from "framer-motion";

// function Navbar() {
//   const { language } = useContext(LanguageContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       y: "-100%",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       opacity: 1,
//       y: "0%",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <nav className="navbar">
//       <a href="#top" className="navbar__brand">
//         <span className="navbar__brand-name">Marius YVART</span>
//         <span className="navbar__brand-copyright">
//           {translations[language].portfolioCopyright}
//         </span>
//       </a>
//       <button
//         className={`navbar__hamburger hamburger hamburger--spring ${
//           isMenuOpen ? "hamburger--is-active" : ""
//         }`}
//         type="button"
//         onClick={toggleMenu}
//         aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
//       >
//         <span className="hamburger__box">
//           <span className="hamburger__inner"></span>
//         </span>
//       </button>
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.ul
//             className="navbar__menu navbar__menu--open"
//             variants={menuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//           >
//             <motion.li
//               className="navbar__menu-item"
//               variants={{
//                 open: { opacity: 1, y: 0 },
//                 closed: { opacity: 0, y: -20 },
//               }}
//             >
//               <a
//                 href="#competences"
//                 className="navbar__menu-link"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {translations[language].competences}
//               </a>
//             </motion.li>
//             <motion.li
//               className="navbar__menu-item"
//               variants={{
//                 open: { opacity: 1, y: 0 },
//                 closed: { opacity: 0, y: -20 },
//               }}
//             >
//               <a
//                 href="#projets"
//                 className="navbar__menu-link"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {translations[language].projets}
//               </a>
//             </motion.li>
//             <motion.li
//               className="navbar__menu-item"
//               variants={{
//                 open: { opacity: 1, y: 0 },
//                 closed: { opacity: 0, y: -20 },
//               }}
//             >
//               <a
//                 href="#contact"
//                 className="navbar__menu-link"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {translations[language].contact}
//               </a>
//             </motion.li>
//             <motion.li
//               className="navbar__menu-item navbar__menu-item--language-toggle"
//               variants={{
//                 open: { opacity: 1, y: 0 },
//                 closed: { opacity: 0, y: -20 },
//               }}
//             >
//               <LanguageToggle onLanguageChange={() => setIsMenuOpen(false)} />
//             </motion.li>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./../translations";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Ajustez cette valeur selon vos besoins
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const NavItems = () => (
    <>
      <li className="navbar__menu-item">
        <a
          href="#competences"
          className="navbar__menu-link"
          onClick={() => setIsMenuOpen(false)}
        >
          {translations[language].competences}
        </a>
      </li>
      <li className="navbar__menu-item">
        <a
          href="#projets"
          className="navbar__menu-link"
          onClick={() => setIsMenuOpen(false)}
        >
          {translations[language].projets}
        </a>
      </li>
      <li className="navbar__menu-item">
        <a
          href="#contact"
          className="navbar__menu-link"
          onClick={() => setIsMenuOpen(false)}
        >
          {translations[language].contact}
        </a>
      </li>
      <li className="navbar__menu-item navbar__menu-item--language-toggle">
        <LanguageToggle onLanguageChange={() => setIsMenuOpen(false)} />
      </li>
    </>
  );

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__brand">
        <span className="navbar__brand-name">Marius YVART</span>
        <span className="navbar__brand-copyright">
          {translations[language].portfolioCopyright}
        </span>
      </a>
      {isMobile && (
        <button
          className={`navbar__hamburger hamburger hamburger--spring ${
            isMenuOpen ? "hamburger--is-active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
      )}
      {isMobile ? (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="navbar__menu navbar__menu--open"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <NavItems />
            </motion.ul>
          )}
        </AnimatePresence>
      ) : (
        <ul className="navbar__menu">
          <NavItems />
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
