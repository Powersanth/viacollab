import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import landingImage from "../../assets/landingImage.png";
import arrow from "../../assets/arrowsml.png";
import bag from "../../assets/bag.png";
import chips from "../../assets/chips.png";
import headphs from "../../assets/headphs.png";
import tube from "../../assets/tube.png";
import brownbox from "../../assets/brownbox.png";
import jars from "../../assets/jars.png";
import vector from "../../assets/vector.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import shape from "../../assets/shape.png";
import chat from "../../assets/chat.png";
import TagCloud from "TagCloud";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const container = document.querySelector(".tagcloud");

    // Clear any previous instances of the TagCloud
    if (container) {
      container.innerHTML = "";
    }

    const texts = [
      "Instagram",
      "Youtube",
      "Facebook",
      "JavaScript",
      "React",
      "Vue",
      "NextJS",
      "MongoDB",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];

    const options = {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    };

    TagCloud(".tagcloud", texts, options);
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
            Contact us
            <div className={styles.contactButtonspan}>
              <img src={arrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.imageContent}>
        {/* Floating image cloud */}
        <span className="tagcloud"></span>

        <div className="floatingImageCloud">
          <img src={bag} alt="HTML" className="floatingImage" />
          <img src={chat} alt="HTML" className="floatingImage" />
          <img src={shape} alt="HTML" className="floatingImage" />
          <img src={instagram} alt="HTML" className="floatingImage" />
          <img src={twitter} alt="HTML" className="floatingImage" />
          <img src={facebook} alt="HTML" className="floatingImage" />
          <img src={vector} alt="HTML" className="floatingImage" />
          <img src={jars} alt="HTML" className="floatingImage" />
          <img src={brownbox} alt="HTML" className="floatingImage" />
          <img src={tube} alt="HTML" className="floatingImage" />
          <img src={headphs} alt="HTML" className="floatingImage" />
          <img src={chips} alt="HTML" className="floatingImage" />

          {/* Add more images as needed */}
        </div>
        <div data-aos="fade-up-right" className={styles.landimages}>
          <img
            src={landingImage}
            alt="Excited woman jumping"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
}
