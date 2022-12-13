import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ to, onClick, label, style }) => {
  if (to) {
    return (
      <Link to={to}>
        <button className={styles.button} onClick={onClick} style={style}>
          {label}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={styles.button} onClick={onClick} style={style}>
        {label}
      </button>
    );
  }
};

export default Button;
