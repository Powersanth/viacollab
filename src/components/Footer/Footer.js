import React, { useState } from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/instagramIcon.png";
import twittericon from "../../assets/twittericon.png";
import facebookicon from "../../assets/facebookicon.png";
import youtubeicon from "../../assets/youtubeicon.png";
import iconoo from "../../assets/iconoo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    if (email) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@viacollab.com&su=Subscription Request&body=Please subscribe me to your updates. My email is ${email}`;
      window.open(gmailUrl, "_blank"); // Opens Gmail in a new tab
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.mainText}>
        <h1>
          Let’s{" "}
          <span>
            collab<p1>.</p1>
          </span>
        </h1>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={styles.submitButton} onClick={handleEmailSubmit}>
              →
            </button>
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
        <div className={styles.bottom11}>
          <img src={iconoo} />
          <p>&copy; viacollab, Inc.</p>
        </div>
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
