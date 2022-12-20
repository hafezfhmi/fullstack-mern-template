import React from "react";
import Button from "../Button";
import styles from "./lastCTA.module.css";

const LastCTA = () => {
  return (
    <div className={styles.lastCTA + " section"}>
      <h2>Be a part of the cat gallery now!</h2>

      <Button
        to="signup"
        label="Sign up"
        style={{ display: "block", margin: "0 auto" }}
      />
    </div>
  );
};

export default LastCTA;
