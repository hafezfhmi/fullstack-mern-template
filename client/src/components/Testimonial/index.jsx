import React from "react";
import TestimonialSlider from "../../components/TestimonialSlider";
import styles from "./testimonial.module.css";

const Testominial = () => {
  return (
    <div className={styles.testimonial}>
      <h2>Pawsitive feedback from cat lovers everywhere</h2>
      <TestimonialSlider />
    </div>
  );
};

export default Testominial;
