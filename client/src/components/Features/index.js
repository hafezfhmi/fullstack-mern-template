import React from "react";
import styles from "./features.module.css";
import catFeature1 from "../../assets/cat-hero.png";
import cat1 from "../../assets/cat1.jpg";
import cat2 from "../../assets/cat2.jpg";
import cat3 from "../../assets/cat3.jpg";
import cat4 from "../../assets/cat4.jpg";
import cat5 from "../../assets/cat5.jpg";
import cat6 from "../../assets/cat6.jpg";
import cat7 from "../../assets/cat7.jpg";
import cat8 from "../../assets/cat8.jpg";
import cat9 from "../../assets/cat9.jpg";
import cat10 from "../../assets/cat10.jpg";
import cat11 from "../../assets/cat11.jpg";
import cat12 from "../../assets/cat12.jpg";
import cat13 from "../../assets/cat13.jpg";
import cat14 from "../../assets/cat14.jpg";
import cat15 from "../../assets/cat15.jpg";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <div className={styles.catGrid}>
          <div className={styles.catColumnWrapper}>
            <div className={styles.catColumn}>
              <img src={cat1} alt="" />
              <img src={cat2} alt="" />
              <img src={cat3} alt="" />
              <img src={cat4} alt="" />
              <img src={cat5} alt="" />
            </div>
          </div>
          <div className={styles.catColumnWrapper}>
            <div className={styles.catColumn + " " + styles.animationReverse}>
              <img src={cat6} alt="" />
              <img src={cat7} alt="" />
              <img src={cat8} alt="" />
              <img src={cat9} alt="" />
              <img src={cat10} alt="" />
            </div>
          </div>
          <div className={styles.catColumnWrapper}>
            <div className={styles.catColumn}>
              <img src={cat11} alt="" />
              <img src={cat12} alt="" />
              <img src={cat13} alt="" />
              <img src={cat14} alt="" />
              <img src={cat15} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.featureTextContainer}>
          <h3>Explore</h3>
          <h2>Varieties of cats</h2>
          <p>New cat photos from our users around the globe everyday</p>
        </div>
      </div>

      <div className={styles.feature}>
        <img src={catFeature1} alt="" />
        <div className={styles.featureTextContainer}>
          <h3>Upload</h3>
          <h2>Share the moment of your cats</h2>
          <p>Upload your cat photos to be seen by other users</p>
        </div>
      </div>

      <div className={styles.feature}>
        <img src={catFeature1} alt="" />
        <div className={styles.featureTextContainer}>
          <h3>Connect</h3>
          <h2>Make friends with other cat lovers</h2>
          <p>
            Love their cat photos? Connect with the owner, comment and upvote
            their cat photos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;