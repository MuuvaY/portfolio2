import "./../scss/style.scss";
import React, { useState } from "react";

function Button() {
  const [activeButton, setActiveButton] = useState("FR");

  const handleClick = (lang) => {
    setActiveButton(lang);
  };
  console.log(activeButton);

  return (
    <div className="btn">
      <div
        className={`btn__lg ${activeButton === "FR" ? "active" : ""}`}
        onClick={() => handleClick("FR")}
      >
        FR
      </div>
      <div
        className={`btn__lg ${activeButton === "EN" ? "active" : ""}`}
        onClick={() => handleClick("EN")}
      >
        EN
      </div>
    </div>
  );
}

export default Button;
