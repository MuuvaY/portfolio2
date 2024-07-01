import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <button onClick={toggleLanguage} className="language-toggle">
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
}

export default LanguageToggle;
