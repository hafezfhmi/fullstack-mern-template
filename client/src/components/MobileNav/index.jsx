import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
        <li>Sign up</li>
      </ul>

      <AiOutlineMenu
        className={styles.burgerButton}
        onClick={handleShowMobileNav}
      />
    </>
  );
};

export default MobileNav;
