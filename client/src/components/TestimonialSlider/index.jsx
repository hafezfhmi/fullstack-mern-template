import React, { useState, useEffect } from "react";
import styles from "./testimonialSlider.module.css";
import userPhoto from "../../assets/person-1.jpg";

const testimonialList = [
  {
    username: "Sarah K.",
    testimonial:
      '"I absolutely adore the cat photos on this website! The quality is outstanding and the subjects are so cute and full of personality."',
  },
  {
    username: "John D.",
    testimonial:
      '"As a cat lover, I was thrilled to discover this website. The variety of cat breeds and poses is impressive and the images are stunning."',
  },
  {
    username: "Emily S.",
    testimonial:
      '"I stumbled upon this website while searching for cat-themed gifts for a friend and I\'m so glad I did. Highly recommend!"',
  },
  {
    username: "Jane M.",
    testimonial:
      '"The photographers do such a great job capturing the beauty and personality of each feline."',
  },
  {
    username: "Maria G.",
    testimonial:
      '"I am in love with the cat photos on this website! The quality is excellent and the subjects are so adorable."',
  },
  {
    username: "Elizabeth W.",
    testimonial:
      '"I recently discovered this cat gallery and I am hooked! Thank you for such a wonderful experience."',
  },
];

const TestimonialSlider = () => {
  const [positionXMultiplier, setPositionXMultiplier] = useState(0);
  const [positionXValue, setPositionXValue] = useState(35);

  const moveRange = 0 - Math.ceil(testimonialList.length / 2);

  const positionXUpdater = () => {
    if (window.innerWidth > 900 && positionXValue !== 35) {
      setPositionXValue(35);
      if (positionXMultiplier <= moveRange) setPositionXMultiplier(moveRange);
    } else if (window.innerWidth <= 900 && positionXValue !== 105) {
      setPositionXValue(105);
    }
  };

  positionXUpdater();

  // Updating value based on viewport size
  // https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size
  useEffect(() => {
    window.addEventListener("resize", positionXUpdater);

    return () => {
      window.removeEventListener("resize", positionXUpdater);
    };
  });

  const handleMoveRight = () => {
    setPositionXMultiplier((prevPositionXMultiplier) => {
      if (positionXValue === 35) {
        let moveRange = 0 - Math.ceil(testimonialList.length / 2);
        if (positionXMultiplier <= moveRange) return moveRange;
      } else if (positionXValue === 105) {
        let moveRange = 0 - testimonialList.length + 1;
        if (positionXMultiplier <= moveRange) return moveRange;
      }
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
    <div className={styles.testimonialContainer + " section"}>
      <button onClick={handleMoveLeft}>testLeft</button>
      <button onClick={handleMoveRight}>testRight</button>
      <div
        className={styles.testimonialSlider}
        style={{ left: `${positionXValue * positionXMultiplier}%` }}
      >
        {testimonialList.map((testimonial, index) => (
          <div className={styles.testimonialCard} key={index}>
            <p>{testimonial.testimonial}</p>
            <div className={styles.testomonialUser}>
              <img src={userPhoto} alt="" />
              <p>{testimonial.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
