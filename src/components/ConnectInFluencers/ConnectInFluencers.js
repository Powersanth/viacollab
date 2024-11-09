import React, { useEffect } from "react";
import styles from "./ConnectInFluencers.module.css";
import Vector2 from "../../assets/Vector2.png";
import Ellipse from "../../assets/Ellipse.png";
import Group from "../../assets/Group.png";
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
          <span>
            <img src={Ellipse} alt="s" />
          </span>
          wered, influencer-driven,
        </p>
        <p>
          turning data
          <span>
            <img src={Vector2} alt="s" />
          </span>
          into campaigns
        </p>
        <p>
          that set feeds
          <span>
            <img src={Group} alt="s" />
          </span>
          on fire!
        </p>
      </div>
      <div  className={styles.ConnectInFluencerstext2}><p>Tech-powered, influencer-driven, turning data into campaigns
        that set feeds on fire!</p></div>
    </div>
  );
}
