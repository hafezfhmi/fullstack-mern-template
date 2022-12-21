import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testominial from "../../components/Testimonial";
import LastCTA from "../../components/LastCTA";
import FAQ from "../../components/FAQ";

// import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testominial />
      <FAQ />
      <LastCTA />
    </>
  );
};

export default Home;
