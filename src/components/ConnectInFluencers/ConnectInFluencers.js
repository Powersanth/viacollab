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
          C
          <span>
            <img src={Ellipse} alt="s" />
          </span>
          nnect with influencers
        </p>
        <p>
          Simplify{" "}
          <span>
            <img src={Vector2} alt="s" />
          </span>{" "}
          collaborations
        </p>
        <p>
          {" "}
          & boost your{" "}
          <span>
            <img src={Group} alt="s" />
          </span>{" "}
          brand
        </p>
      </div>
    </div>
  );
}
