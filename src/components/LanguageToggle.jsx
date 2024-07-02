// import React, { useContext } from "react";
// import { LanguageContext } from "./LanguageContext";

// function LanguageToggle() {
//   const { language, setLanguage } = useContext(LanguageContext);

//   const toggleLanguage = () => {
//     setLanguage(language === "fr" ? "en" : "fr");
//   };

//   return (
//     <button onClick={toggleLanguage} className="language-toggle">
//       {language === "fr" ? "EN" : "FR"}
//     </button>
//   );
// }

// export default LanguageToggle;

import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import "./../scss/style.scss"; // Assurez-vous que les styles sont correctement importés

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [activeButton, setActiveButton] = useState(language);

  useEffect(() => {
    setActiveButton(language);
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="btn">
      <div
        className={`btn__lg ${activeButton === "fr" ? "active" : ""}`}
        onClick={() => toggleLanguage("fr")}
      >
        FR
      </div>
      <div
        className={`btn__lg ${activeButton === "en" ? "active" : ""}`}
        onClick={() => toggleLanguage("en")}
      >
        EN
      </div>
    </div>
  );
}

export default LanguageToggle;
