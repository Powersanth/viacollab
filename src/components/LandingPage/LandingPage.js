import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import landingImage from "../../assets/landingImage.png";
import arrow from "../../assets/arrow11.png";

import instan from "../../assets/gif5.gif";
import Miken from "../../assets/Miken.png";
import bagn from "../../assets/bagn.png";
import liptiskn from "../../assets/liptiskn.png";
import starn from "../../assets/gif6.gif";
import starttn from "../../assets/starttn.png";
import youtuben from "../../assets/gif4.gif";
import sape from "../../assets/sape.png";

import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../NavBar/NavBar";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleContactClick = () => {
    const phoneNumber = "9876543210"; // Your WhatsApp number
    const message = "Hello! I’d like to know more about your services."; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank"); // Opens WhatsApp link in a new tab
  };

  return (
    <div>
      <NavBar />
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.textContent2}>
            <div data-aos="fade-right" className={styles.textContent3}>
              <div className={styles.textContentgradient}></div>
              <h1>Unite. Create.</h1>
              <h1>Influence – All</h1>
              <h1>Via Collab</h1>
            </div>
            <p>
              Ready to make influencer marketing as easy as a double tap? Find
              your perfect influencer match and create collaborations that go
              beyond likes.
            </p>
            <button
              className={styles.contactButton}
              onClick={handleContactClick} // Add onClick handler
            >
              Contact us
              <div className={styles.contactButtonspan}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.landimages}>
            <img
              src={landingImage}
              alt="Excited woman jumping"
              className={styles.heroImage}
            />
            <svg
              className={styles.waveSvg}
              viewBox="0 0 848 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                className="wave-path"
                opacity="0.5"
                d="M43.9004 1024C43.901 903.513 102.927 661.61 594.693 550.662C1065.16 444.52 640.592 -330.034 319.297 -272.659"
                stroke="url(#paint0_linear_939_733)"
                strokeWidth="87"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_939_733"
                  x1="28.9353"
                  y1="-275.691"
                  x2="910.075"
                  y2="-229.141"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6436BC" />
                  <stop offset="0.25" stopColor="#9160EF" />
                  <stop offset="0.564" stopColor="#F16643" />
                  <stop offset="0.802023" stopColor="#F48D14" />
                  <stop offset="1" stopColor="#F7B92D" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.imageIcons}>
              <div className={styles.imageIcons1}>
                <div className={styles.imageIcons11}>
                  <img src={instan} alt="iconn" />
                </div>
                <div className={styles.imageIcons12}>
                  <img src={Miken} alt="iconn" />
                </div>
              </div>
              <div className={styles.imageIcons2}>
                <div className={styles.imageIcons21}>
                  <img src={bagn} alt="iconn" />
                </div>
                <div className={styles.imageIcons22}>
                  <img src={liptiskn} alt="iconn" />
                </div>
              </div>
              <div className={styles.imageIcons3}>
                <div className={styles.imageIcons31}>
                  <img src={starn} alt="iconn" />
                </div>
              </div>
              <div className={styles.imageIcons4}>
                <div className={styles.imageIcons41}>
                  <img src={starttn} alt="iconn" />
                </div>
                <div className={styles.imageIcons42}>
                  <img src={youtuben} alt="iconn" />
                </div>
                <div className={styles.imageIcons43}>
                  <img src={sape} alt="iconn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroContentsecound}>
        <div data-aos="fade-right" className={styles.textContent3}>
          <div className={styles.textContentgradient}></div>
          <h1>Unite. Create.</h1>
          <h1>Influence – All</h1>
          <h1>Via Collab</h1>
        </div>
        <div className={styles.textContent}>
          <div className={styles.textContent2}>
            <div className={styles.imageIcons1}>
              <div className={styles.imageIcons31}>
                <img src={starn} alt="iconn" />
              </div>
              <div className={styles.imageIcons11}>
                <img src={instan} alt="iconn" />
              </div>
            </div>
            <div className={styles.imageIcons2}>
              <div className={styles.imageIcons41}>
                <img src={starttn} alt="iconn" />
              </div>
              <div className={styles.imageIcons21}>
                <img src={bagn} alt="iconn" />
              </div>
            </div>
            <p>
              Ready to make influencer marketing as easy as a double tap? Find
              your perfect influencer match and create collaborations that go
              beyond likes.
            </p>
            <button
              className={styles.contactButton}
              onClick={handleContactClick} // Add onClick handler
            >
              Contact us
              <div className={styles.contactButtonspan}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
            <div className={styles.imageIcons3}>
              <div className={styles.imageIcons12}>
                <img src={Miken} alt="iconn" />
              </div>
              <div className={styles.imageIcons42}>
                <img src={youtuben} alt="iconn" />
              </div>
              <div className={styles.imageIcons43}>
                <img src={sape} alt="iconn" />
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <img
              src={landingImage}
              alt="Excited woman jumping"
              className={styles.heroImage}
            />
            <svg className={styles.waveSvg2}
              width="561" height="354" viewBox="0 0 561 354" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M0.795593 335.164C50.9935 335.164 151.777 310.572 198.001 105.689C242.222 -90.3205 564.922 86.5665 541.018 220.427" stroke="url(#paint0_linear_2017_4293)" stroke-width="36.2465" />
              <defs>
                <linearGradient id="paint0_linear_2017_4293" x1="542.281" y1="341.399" x2="522.887" y2="-25.707" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6436BC" />
                  <stop offset="0.25" stop-color="#9160EF" />
                  <stop offset="0.564" stop-color="#F16643" />
                  <stop offset="0.802023" stop-color="#F48D14" />
                  <stop offset="1" stop-color="#F7B92D" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>
    </div>
  );
}
