import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <Link to={"/"} className={styles.logoWrapper}>
          <img src={catLogo} alt="cat logo" />
          <div>
            <span>Meow</span> Gallery
          </div>
        </Link>

        <ul className={styles.nav}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Gallery</Link>
          </li>
          <li>
            <Link to={"login"}>Log in</Link>
          </li>
          <li className={styles.button}>
            <Link to={"signup"}>Sign up</Link>
          </li>
        </ul>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
