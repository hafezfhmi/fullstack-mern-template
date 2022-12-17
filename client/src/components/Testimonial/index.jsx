import React from "react";
import styles from "./testimonial.module.css";
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
  //   {
  //     username: "Jane M.",
  //     testimonial:
  //       '"The photographers do such a great job capturing the beauty and personality of each feline."',
  //   },
  //   {
  //     username: "Maria G.",
  //     testimonial:
  //       '"I am in love with the cat photos on this website! The quality is excellent and the subjects are so adorable."',
  //   },
  //   {
  //     username: "Elizabeth W.",
  //     testimonial:
  //       '"I recently discovered this cat gallery and I am hooked! Thank you for such a wonderful experience."',
  //   },
];

const Testominial = () => {
  return (
    <div className={styles.testimonial + " section"}>
      <h2>Pawsitive feedback from cat lovers everywhere</h2>
      <div className={styles.testimonialContainer}>
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

export default Testominial;
