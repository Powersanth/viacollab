import React, { useEffect, useState } from "react";
import styles from "./MissionSlider.module.css";
import abt1 from "../../assets/abt11.png";
import abt2 from "../../assets/abt22.png";
import abt3 from "../../assets/abt33.png";
import abt4 from "../../assets/abt11.png";

import icon1 from "../../assets/missionr.png";
import icon2 from "../../assets/missionr2.png";
import icon3 from "../../assets/rout2.png";
import icon4 from "../../assets/missionr.png";
import arrow from "../../assets/abtarrow.png";

import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../NavBar/NavBar";

const slideData = [
  {
    number: "01",
    backgroundText: "DREAM",
    image: abt1,
    icon: icon1,
    subtitle: "OUR STORY",
    description:
      "Via Collab aims to transform influencer marketing from transactional to meaningful connections. We bridge the gap between brands and influencers, focusing on authentic impact.",
    backgroundColor: "#998AE2",
    color: "#D09227",
  },
  {
    number: "02",
    backgroundText: "PURPOSE",
    image: abt2,
    icon: icon2,
    subtitle: "OUR VISION",
    description:
      "We envision a world where influencer marketing thrives on trust, creativity, and authenticity. Our goal is to inspire real conversations and redefine success in marketing.",
    backgroundColor: "#F6AD2D",
    color: "#C04B2E",
  },
  {
    number: "03",
    backgroundText: "STORY",
    image: abt3,
    icon: icon3,
    subtitle: "OUR MISSION",
    description:
      "We empower brands and influencers to build authentic partnerships that lead to real engagement. Our focus is on creating measurable value through genuine influence.",
    backgroundColor: "#F16643",
    color: "#7767C1",
  },
];

export default function MissionSlider() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  const currentSlideData = slideData[currentSlide];
  const prevSlideData =
    slideData[(currentSlide - 1 + slideData.length) % slideData.length];

  return (
    <div className={styles.sliderContainer2}>
      <div className={styles.navBar}>
        <NavBar linkColor="#fff" gradientBackground={false} />
      </div>
      <div
        className={styles.sliderContainer}
        style={{ backgroundColor: currentSlideData.backgroundColor }}
      >
        <div className={styles.staticContent}>
          <h1 data-aos="fade-left" className={styles.number}>
            {currentSlideData.number}
          </h1>
          <div data-aos="fade-up">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.subtitle}
              className={styles.image}
            />
          </div>
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            src={currentSlideData.icon}
            alt="icon"
            className={styles.number2}
          />
          <div className={styles.textContainer}>
            <div className={styles.textContainer}>
              <div className={styles.textContainerh33}>
                <div className={styles.line}></div>
                <h3 className={styles.subtitle}>{currentSlideData.subtitle}</h3>
              </div>
              <p className={styles.description}>
                {currentSlideData.description}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.backgroundTextWrapper}>
          <span
            className={`${styles.backgroundText} ${
              transitioning ? styles["backgroundText--exit"] : ""
            }`}
            style={{
              color: prevSlideData.color,
            }}
          >
            {prevSlideData.backgroundText}
          </span>

          <span
            className={`${styles.backgroundText} ${
              transitioning
                ? styles["backgroundText--enter-active"]
                : styles["backgroundText--enter"]
            }`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              color: currentSlideData.backgroundColor,
            }}
          >
            {currentSlideData.backgroundText}
          </span>
        </div>

        <button onClick={prevSlide} className={styles.navButton}>
          <img src={arrow} alt="icon" className={styles.arrow2} />
        </button>
        <button onClick={nextSlide} className={styles.navButton}>
          <img src={arrow} alt="icon" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}
