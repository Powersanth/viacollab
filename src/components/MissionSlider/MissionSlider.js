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
import arrow from "../../assets/arrow.png";

import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../NavBar/NavBar";

const slideData = [
  {
    number: "01",
    backgroundText: "PURPOSE",
    image: abt1,
    icon: icon1,
    subtitle: "OUR MISSION",
    description: "Lorem ipsum dolor sit amet consectetur.",
    backgroundColor: "#F16643",
  },
  {
    number: "02",
    backgroundText: "VISION",
    image: abt2,
    icon: icon2,
    subtitle: "OUR VISION",
    description: "Quis ipsum suspendisse ultrices gravida.",
    backgroundColor: "#F6AD2D",
  },
  {
    number: "03",
    backgroundText: "VALUES",
    image: abt3,
    icon: icon3,
    subtitle: "OUR VALUES",
    description: "Quis ipsum suspendisse ultrices gravida.",
    backgroundColor: "#4cffb5",
  },
  {
    number: "04",
    backgroundText: "STRATEGY",
    image: abt4,
    icon: icon4,
    subtitle: "OUR STRATEGY",
    description: "Quis ipsum suspendisse ultrices gravida.",
    backgroundColor: "#F6AD2D",
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
        <NavBar linkColor="#fff" />
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
