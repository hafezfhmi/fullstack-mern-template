import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import catHead from "../../assets/cat-head.svg";

const Footer = () => {
  return (
    <div className={styles.footer + " section"}>
      <div className={styles.footerNav}>
        <div className={styles.footerLogo}>
          <Link to={"/"} className={styles.logoWrapper}>
            <img src={catHead} alt="cat logo" />
            <div>
              <span>Meow</span> Gallery
            </div>
          </Link>
          <p>MeowGallery, the best place to find cat photos.</p>
        </div>
        <div className={styles.footerListWrapper}>
          <div className={styles.footerList}>
            <p>Navigation</p>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© MeowGallery 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
