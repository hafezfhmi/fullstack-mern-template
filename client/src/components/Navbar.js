import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import styles from "../styles/navbar.module.css";
import catLogo from "../assets/cat-logo.gif";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <nav className={styles.navbar + " " + (scrolled ? styles.scrolled : "")}>
      <div className={styles.wrapper}>
        <img src={catLogo} alt="cat logo" />
        <div>
          <span>Meow</span> Gallery
        </div>

        <ul className={styles.nav}>
          <li>Home</li>
          <li>Gallery</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
