// CompanyNumbers.jsx

import React, { useEffect } from "react";
import styles from "./CompanyNumbers.module.css";
import ScrollCounter from "./ScrollCounter";
import companynumberimg from "../../assets/radiusgrap.png";
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
            <p>
              <span className={styles.comapanyNotextwpqn}>
                powerhouse stats
              </span>
              &nbsp;that
            </p>
            <p>keep us moving</p>
          </div>
          <div className={styles.comapanyNoCount}>
            <div className={styles.counter}>
              <p>Influencer Reach Potential</p>
              <div className={styles.counter2}>
                <ScrollCounter start={0} end={12} duration={2000} />
                <div>
                  <h1>M+</h1>
                </div>
              </div>
            </div>
            <div className={styles.counter}>
              <p>Total Influencers</p>
              <div className={styles.counter2}>
                <ScrollCounter start={0} end={4} duration={2000} />
                <div>
                  <h1>K+</h1>
                </div>
              </div>
            </div>
            <div className={styles.counter}>
              <p>Experienced Team </p>
              <div className={styles.counter2}>
                <ScrollCounter start={0} end={10} duration={2000} />
                <div>
                  <h1>Y+</h1>
                </div>
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
          <div className={styles.imageShadowdiv}>
            <p>
              With Via Collab, I’m connecting with brands that truly get me—no
              more awkward fits, just pure synergy and real impact{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
