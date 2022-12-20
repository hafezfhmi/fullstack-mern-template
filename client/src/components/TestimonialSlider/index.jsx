import React, { useState, useEffect } from "react";
import styles from "./testimonialSlider.module.css";

const TestimonialSlider = () => {
  const [positionXMultiplier, setPositionXMultiplier] = useState(0);
  const [positionXValue, setPositionXValue] = useState(35);

  useEffect(() => {
    const positionXUpdater = () => {
      if (window.innerWidth > 900 && positionXValue !== 35) {
        setPositionXValue(35);
      } else if (window.innerWidth <= 900 && positionXValue !== 100) {
        setPositionXValue(100);
      }
    };

    positionXUpdater();

    window.addEventListener("resize", positionXUpdater);

    return () => {
      window.removeEventListener("resize", positionXUpdater);
    };
  }, [positionXValue]);

  const handleMoveRight = () => {
    setPositionXMultiplier((prevPositionXMultiplier) => {
      if (positionXMultiplier === -2) return -2;
      return positionXMultiplier - 1;
    });
  };

  const handleMoveLeft = () => {
    setPositionXMultiplier((prevPositionXMultiplier) => {
      if (positionXMultiplier === 0) return 0;
      return positionXMultiplier + 1;
    });
  };

  return (
    <div className={styles.testimonialContainer}>
      <button onClick={handleMoveLeft}>testLeft</button>
      <button onClick={handleMoveRight}>testRight</button>
      <div
        className={styles.testimonialSlider}
        style={{ left: `${positionXValue * positionXMultiplier}%` }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "340px",
            height: "340px",
            flex: "0 0 30%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "green",
            height: "340px",
            flex: "0 0 30%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "blue",
            height: "340px",
            flex: "0 0 30%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "red",
            height: "340px",
            flex: "0 0 30%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "green",
            width: "340px",
            height: "340px",
            flex: "0 0 30%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
