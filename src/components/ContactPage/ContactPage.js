import React from "react";
import styles from "./ContactPage.module.css";
import icons1 from "../../assets/phone.png";
import icons2 from "../../assets/email.png";

export default function ContactPage() {
  return (
    <div className={styles.contactcontainer} id="ContactUs">
      <div className={styles.contactcontainer1}>
        <div className={styles.contactcontainerh1}>
          <div className={styles.contactcontainerh11}>
            <h1>Got questions?</h1>
          </div>
          <div className={styles.contactcontainerh12}>
            <p>Contact us</p>
          </div>
        </div>
        <div className={styles.contactcontainer2}>
          <div>
            <button>
              <img src={icons1} alt="phone" />
              <p>+91 9876543210</p>
            </button>
          </div>
          <div>
            <button>
              <img src={icons2} alt="email" />
              <p>hello@viacollab.com</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
