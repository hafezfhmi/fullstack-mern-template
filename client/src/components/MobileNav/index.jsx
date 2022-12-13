import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Button";
import styles from "./mobileNav.module.css";

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav((prevVal) => !prevVal);
  };

  const handleClickNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <ul
        className={
          styles.mobileNav + " " + (showMobileNav ? styles.active : "")
        }
      >
        <li>
          <Link to={"/"} onClick={handleClickNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} onClick={handleClickNav}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to={"login"} onClick={handleClickNav}>
            Log in
          </Link>
        </li>
        <Button to={"signup"} label="Sign up" onClick={handleClickNav} />
      </ul>

      <AiOutlineMenu
        className={styles.burgerButton}
        onClick={handleShowMobileNav}
      />
    </>
  );
};

export default MobileNav;
