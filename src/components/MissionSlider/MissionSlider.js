import React, { useEffect, useState } from "react";
import styles from "./MissionSlider.module.css";
import abt1 from "../../assets/abt11.png";
import abt2 from "../../assets/abt22.png";
import abt3 from "../../assets/abt33.png";

import icon1 from "../../assets/missionr.png";
import icon2 from "../../assets/missionr2.png";
import icon3 from "../../assets/rout2.png";
import arrow from "../../assets/arrow.png";

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
    description: "Via Collab began with a desire to transform influencer marketing from transaction-based to connection-focused. We saw the potential for brands and influencers to create more meaningful partnerships. Via Collab bridges this gap with a platform rooted in genuine impact.",
    backgroundColor: "#F16643",
  },
  {
    number: "02",
    backgroundText: "PURPOSE",
    image: abt2,
    icon: icon2,
    subtitle: "OUR DREAM",
    description: "Our dream is a world where influencer marketing is driven by trust, creativity, and authenticity. We envision partnerships that spark real conversations and inspire communities. By elevating influence beyond the superficial, we aim to redefine marketing success.",
    backgroundColor: "#F6AD2D",
  },
  {
    number: "03",
    backgroundText: "STORY",
    image: abt3,
    icon: icon3,
    subtitle: "OUR PURPOSE",
    description: "Via Collab exists to empower brands and influencers to form impactful, authentic partnerships. We focus on creating connections that go beyond numbers, leading to real engagement. Our purpose is to make influencer marketing a space for genuine influence and measurable value.",
    backgroundColor: "#4cffb5",
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
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  const currentSlideData = slideData[currentSlide];
  const prevSlideData = slideData[(currentSlide - 1 + slideData.length) % slideData.length];

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
            <h3 className={styles.subtitle}>{currentSlideData.subtitle}</h3>
            <p className={styles.description}>{currentSlideData.description}</p>
          </div>
        </div>

        <div className={styles.backgroundTextWrapper}>
          <span
            className={`${styles.backgroundText} ${
              transitioning ? styles["backgroundText--exit"] : ""
            }`}
            style={{
              color: prevSlideData.backgroundColor,
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
