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
      "Viacollab",
      "Viacollab",
      "Viacollab",
      "Viacollab",
      "Viacollab",
      "Viacollab",
      "Viacollab",
      "Viacollab",
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(".tagcloud", texts, options);
  }, []);

  return (
    <div className={styles.heroContent}>
      <div className={styles.textContent}>
        <div className={styles.textContent2}>
          <h1>Unite. Create. Influence – All Via Collab</h1>
          <p>
            Ready to make influencer marketing as easy as a double tap? Find
            your perfect influencer match and create collaborations that go
            beyond likes. With tools to manage every detail, from Reels to
            feeds, we bring you real-time insights for impactful campaigns.
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













@media (max-width: 700px) {
  .textContent2 {
    padding: 0px 0px 0px 10px;
  }
  .textContent p {
    font-size: 12px;
  }

  .textContent h1 {
    font-size: 1rem;
  }
  .waveSvg {
    position: absolute;
    top: 0;
    left: -47%;
    width: 148%;
    height: 109%;
    z-index: -1;
  }

  .heroContent {
  }
  .textContent {
    /* position: absolute;
    width: 100%;
    z-index: 99;
    top: 20%; */
  }
  .heroContent {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 5px;
  }
  .heroImage {
    width: 100%;
  }
  .contactButton {
    color: #fff;
    border: none;
    padding: 4px;
    border-radius: 30px;
    margin-top: 1.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 114px;
    font-size: 12px;
  }
  .contactButtonspan {
    width: 20px;
    height: 20px;
  }
  .contactButtonspan img {
    width: 10px;
  }
  .textContent2 {
    gap: 5px;
  }
  .imageIcons11 img {
    width: 40%;
  }
  .imageIcons12 img {
    width: 35%;
  }
  .imageIcons21 img {
    width: 35%;
  }
  .imageIcons22 img {
    width: 35%;
  }
  .imageIcons42 img {
    margin-left: 10px;
  }
  .imageIcons3 {
    margin-top: 10px;
  }
  .imageIcons4 {
    margin-top: 0px;
  }
  .imageIcons43 img {
    width: 55%;
  }
  .imageIcons42 img {
    width: 55%;
  }
  .imageIcons {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    top: 20%;
    gap: 35px;
    width: 100%;
  }
}

@media (max-width: 390px) {
  .textContent {
    top: 5%;
    position: relative;
  }
  .contactButton {
    margin-top: 0px;
  }
  .textContent p {
    margin: 0;
  }
}
