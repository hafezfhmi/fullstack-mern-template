import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Button";
import styles from "./mobileNav.module.css";

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav((prevVal) => !prevVal);
  };

  return (
    <>
      <ul
        className={
          styles.mobileNav + " " + (showMobileNav ? styles.active : "")
        }
      >
        <li>Home</li>
        <li>Gallery</li>
        <li>Log in</li>
        <Button to={"signup"} label="Sign up" />
      </ul>

      <AiOutlineMenu
        className={styles.burgerButton}
        onClick={handleShowMobileNav}
      />
    </>
  );
};

export default MobileNav;
