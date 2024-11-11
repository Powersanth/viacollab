import React, { useEffect } from "react";
import styles from "./ConnectInFluencers.module.css";
import Vector2 from "../../assets/gif33.gif";
import Vector22 from "../../assets/Ellipse.png";

import Ellipse from "../../assets/gif1.gif";
import Group from "../../assets/gif2.gif";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ConnectInFluencers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.ConnectInFluencersdiv}>
      <div data-aos="fade-up" className={styles.ConnectInFluencerstext}>
        <p>
          Tech-p
          <p1>o</p1>
          <span className={styles.spanimngp}>
            <img src={Ellipse} alt="s" />
            <img src={Vector22} alt="s" />
          </span>
          wered
        </p>
        <p>
          influencer-driven,
          <span className={styles.spanimngp2}>
            <img src={Vector2} alt="s" />
          </span>{" "}
          turning data
        </p>
        <p>
          {" "}
          into campaigns that set feeds
          <span className={styles.spanimngp3}>
            <img src={Group} alt="s" />
          </span>{" "}
          on fire!
        </p>
      </div>
    </div>
  );
}
