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
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur a sed quis</p>
            <p>etiam semper fames eu</p>
          </div>
          <div className={styles.comapanyNoCount}>
            <div className={styles.counter}>
              <p>Years of Experience</p>
              <ScrollCounter start={0} end={12} duration={2000} />
            </div>
            <div className={styles.counter}>
              <p>Brands Served</p>
              <ScrollCounter start={0} end={4} duration={2000} />
            </div>
            <div className={styles.counter}>
              <p>Successful Campaigns</p>
              <ScrollCounter start={0} end={570} duration={2000} />
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
