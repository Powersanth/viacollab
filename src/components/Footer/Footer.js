import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    if (!email) {
      setErrorMessage("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Clear error message and proceed with mailto
    setErrorMessage("");
    const mailtoLink = `mailto:hello@viacollab.com?subject=Subscription Request&body=Please subscribe me to your updates. My email is ${email}`;
    window.location.href = mailtoLink;

    setEmail(""); // Clear the input field
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
          {errorMessage && (
            <p className={styles.errorText}>{errorMessage}</p>
          )}
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
          <p>&copy; viacollab, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
