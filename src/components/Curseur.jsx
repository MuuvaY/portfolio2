import React, { useState, useEffect } from "react";

const Curseur = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const circleStyle = {
    left: `${coords.x - 55}px`,
    top: `${coords.y - 55}px`,
  };

  return <div className="circle" style={circleStyle}></div>;
};

export default Curseur;
