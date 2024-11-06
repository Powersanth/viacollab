import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import landingImage from "../../assets/landingImage.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import vector from "../../assets/vector.png";
import shape from "../../assets/shape.png";
import chat from "../../assets/chat.png";
import arrow from "../../assets/arrowsml.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.heroContent}>
      <div className={styles.textContent}>
        <div>
          <h1>Lorem ipsum dolor sit amet ld diam cursus ot</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. facilisi id euismod felis
            platea posuere. erat cras rhoncus risus elementum nunc nunc
          </p>
          <button className={styles.contactButton}>
            Contact us{" "}
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div data-aos="fade-up-right">
          <img
            src={landingImage}
            alt="Excited woman jumping"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcons1}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={instagram} alt="Instagram" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={twitter} alt="Facebook" />
            </div>
          </div>
          <div className={styles.socialIcons2}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={facebook} alt="LinkedIn" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={vector} alt="YouTube" />
            </div>
          </div>
          <div className={styles.socialIcons3}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={shape} alt="YouTube" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={chat} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
