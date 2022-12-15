import React from "react";
import Button from "../Button";
import styles from "./hero.module.css";
import cameraImg from "../../assets/camera.gif";

const Hero = () => {
  return (
    <main className={styles.hero}>
      {/* Hero headline */}
      <div className={styles.heroHeadline}>
        <h1>
          Explore the world of cats with our gallery app{" "}
          <img src={cameraImg} alt="" />
        </h1>
        <p>
          Discover new breeds, share your photos, and connect with new paw lover
          friends all in one place
        </p>
        <Button to="gallery" label="Get started" />
        <div className={styles.heroStatsContainer}>
          <div>
            <p>
              <span>20K+</span> Cat photos uploaded
            </p>
          </div>
          <span className={styles.statsSeparator} />
          <div>
            <p>
              <span>2K+</span> People uploading their cat photos
            </p>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div></div>
    </main>
  );
};

export default Hero;
