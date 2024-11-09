// CompanyNumbers.jsx

import React, { useEffect } from "react";
import styles from "./CompanyNumbers.module.css";
import ScrollCounter from "./ScrollCounter";
import companynumberimg from "../../assets/companynumberimg.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CompanyNumbers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.comapanyNoContainer}>
      <div className={styles.comapanyNoSelector}>
        <div className={styles.comapanyNotextAndCount}>
          <div className={styles.comapanyNotext}>
            <p>Here’s a sneak peek at the</p>
            <p><span>powerhouse stats</span>   that </p>
            <p>keep us moving</p>
          </div>
          <div className={styles.comapanyNoCount}>
            <div className={styles.counter}>
              <h>Influencer Reach Potential</h>
              <div className={styles.countflex}>
                <ScrollCounter start={0} end={12} duration={2000} />
                <div> <h2>M+</h2></div>
              </div>
            </div>
            <div className={styles.counter}>
              <p>Total Influencers</p>
              <div className={styles.countflex}>
                <ScrollCounter start={0} end={4} duration={2000} />
                <div> <h2>K+</h2></div>
              </div>
            </div>
            <div className={styles.counter}>
              <p>Experienced Team </p>
              <div className={styles.countflex}>
                <ScrollCounter start={0} end={570} duration={2000} />
                <div> <h2>Y+</h2></div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-right" className={styles.comapanyNImg}>
          <img
            className={styles.imageShadow}
            src={companynumberimg}
            alt="companynumberimg"
          />
        </div>
      </div>
    </div>
  );
}
