import React from "react";
import styles from "./faq.module.css";
import FAQItem from "../FAQItem";

const faqList = [
  {
    question: "What kind of cats do you feature in your gallery?",
    answer:
      "Our gallery features a variety of cats, including domestic breeds such as Siamese, Persian, and Maine Coon, as well as rescue cats of all shapes and sizes.",
  },
  {
    question: "Can I submit my own cat photos to the gallery?",
    answer:
      'Yes, we welcome submissions from cat lovers around the world. Please visit our "submit a photo" page to learn more about how to share your feline friends with the community.',
  },
  {
    question: "Can I use the photos from your gallery for my own personal use?",
    answer:
      "Yes, you are welcome to download and use the photos from our gallery for your own personal use. However, please be sure to credit the photographer and the gallery when sharing the photos.",
  },
];

const FAQ = () => {
  return (
    <div className={styles.faq + " section"}>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqList.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
