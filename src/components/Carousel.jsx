// Installation des dépendances
// npm install gsap

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numbers = ["01", "02", "03", "04", "05"];
  const numberRef = useRef(null);

  useEffect(() => {
    gsap.set(numberRef.current, { x: "100%" });
    gsap.to(numberRef.current, { x: "0%", duration: 0.5 });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + numbers.length) % numbers.length
    );
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.numberContainer}>
        <span style={styles.fixedZero}>0</span>
        <span style={styles.movingNumber} ref={numberRef}>
          {numbers[currentIndex].substring(1)}
        </span>
      </div>
      <button onClick={handlePrev} style={styles.button}>
        Left
      </button>
      <button onClick={handleNext} style={styles.button}>
        Right
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
  },
  numberContainer: {
    position: "relative",
    width: "50px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  fixedZero: {
    position: "absolute",
    left: "0",
    fontSize: "2rem",
    color: "white",
  },
  movingNumber: {
    position: "absolute",
    left: "10px",
    fontSize: "2rem",
    color: "white",
  },
  button: {
    margin: "0 10px",
  },
};

export default Carousel;
