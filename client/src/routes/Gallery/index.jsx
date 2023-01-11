import React from "react";
import styles from "./gallery.module.css";
import Gallery from "../../components/Gallery";

const index = () => {
  return (
    <div className={styles.gallery}>
      <Gallery />
    </div>
  );
};

export default index;
