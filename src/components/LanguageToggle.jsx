import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageToggle({ onLanguageChange }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const [activeButton, setActiveButton] = useState(language);

  useEffect(() => {
    setActiveButton(language);
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange();
    }
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
