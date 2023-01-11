import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
