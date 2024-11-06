import React from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/instagramIcon.png";
import twittericon from "../../assets/twittericon.png";
import facebookicon from "../../assets/facebookicon.png";
import youtubeicon from "../../assets/youtubeicon.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainText}>
        <h1>Let’s collab.</h1>
      </div>
      <div className={styles.mainText2}>
        <div className={styles.mainTextin}>
          <p className={styles.subscribeText}>
            Subscribe to get early updates, tips and tactics to grow the way you
            want
          </p>
          <div className={styles.emailContainer}>
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.emailInput}
            />
            <button className={styles.submitButton}>→</button>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <div>
            <a href="/">Help</a>
            <a href="/">Blog</a>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Discover</a>
            <a href="/">Jobs</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; viacollab, Inc.</p>
        <div className={styles.socialIcons}>
          <a href="/">
            <img src={instagram} alt="Instagram" className={styles.icon} />
          </a>
          <a href="/">
            <img src={twittericon} alt="Twitter" className={styles.icon} />
          </a>
          <a href="/">
            <img src={facebookicon} alt="Facebook" className={styles.icon} />
          </a>
          <a href="/">
            <img src={youtubeicon} alt="YouTube" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
