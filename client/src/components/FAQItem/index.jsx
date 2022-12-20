import React, { useState } from "react";
import styles from "./faqItem.module.css";

const FAQItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className={styles.faqItem}>
      <h3 onClick={handleShow} className={show && styles.active}>
        {question}
      </h3>
      <div className={styles.answer + " " + (show && styles.active)}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
