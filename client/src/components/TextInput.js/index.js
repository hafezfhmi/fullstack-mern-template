import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ field, label }) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor={field.attributes.id}>{label}: </label>
        {field.error && <p>{field.error}</p>}
      </div>
      <input {...field.attributes} />
    </div>
  );
};

export default TextInput;
