import React, { useEffect, useRef, useState } from "react";
import styles from "./GrabOnly.module.css";
import influ1 from "../../assets/influ1.png";
import influ2 from "../../assets/influ2.png";
import influ3 from "../../assets/influ3.png";
import influ4 from "../../assets/influ4.png";
import influ5 from "../../assets/influ5.png";
import arrow from "../../assets/scroll1dash.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GrabOnly() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollMoved, setScrollMoved] = useState(false);
  const imageContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToImage = (index) => {
    const imageContainer = imageContainerRef.current;
    const containerWidth = imageContainer.offsetWidth;
    const scrollPositions = [0, 0.1, 0.2, 1]; // Set scroll percentages or use other steps

    imageContainer.scrollTo({
      left: containerWidth * scrollPositions[index],
      behavior: "smooth",
    });

    setActiveIndex(index);
    setScrollMoved(true);
  };

  useEffect(() => {
    if (!scrollMoved) {
      setActiveIndex(0);
    }
  }, [scrollMoved]);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;

    const startDrag = (e) => {
      isDragging.current = true;
      startX.current = e.pageX || e.touches[0].pageX;
      scrollLeft.current = imageContainer.scrollLeft;
    };

    const stopDrag = () => {
      isDragging.current = false;
    };

    const moveDrag = (e) => {
      if (!isDragging.current) return;

      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const distance =
        (x - startX.current) * (window.innerWidth < 600 ? 1 : 1.5); // Adjust drag sensitivity based on screen size
      imageContainer.scrollLeft = scrollLeft.current - distance;
    };

    imageContainer.addEventListener("mousedown", startDrag);
    imageContainer.addEventListener("mousemove", moveDrag);
    imageContainer.addEventListener("mouseup", stopDrag);
    imageContainer.addEventListener("mouseleave", stopDrag);
    imageContainer.addEventListener("touchstart", startDrag);
    imageContainer.addEventListener("touchmove", moveDrag);
    imageContainer.addEventListener("touchend", stopDrag);
    imageContainer.addEventListener("touchcancel", stopDrag);

    return () => {
      imageContainer.removeEventListener("mousedown", startDrag);
      imageContainer.removeEventListener("mousemove", moveDrag);
      imageContainer.removeEventListener("mouseup", stopDrag);
      imageContainer.removeEventListener("mouseleave", stopDrag);
      imageContainer.removeEventListener("touchstart", startDrag);
      imageContainer.removeEventListener("touchmove", moveDrag);
      imageContainer.removeEventListener("touchend", stopDrag);
      imageContainer.removeEventListener("touchcancel", stopDrag);
    };
  }, []);

  return (
    <div className={styles.grabOnlyContainer}>
      <div className={styles.grabOnlySelector}>
        <div className={styles.grabOnlySelector22}>
          <div className={styles.grabOnlyText}>
            <div className={styles.grabOnlyTextppp}>
              <p>All the RIZZ</p>
              <p>zero fluff pure gram</p>
              <p>MAGIC</p>
            </div>
            <div className={styles.grabOnlyTextp}>
              <p>All the</p>
              <p>RIZZ</p>
              <p>zero fluff</p>
              <p>pure gram</p>
              <p>MAGIC</p>
            </div>
          </div>
          <div className={styles.grabOnlyImg} ref={imageContainerRef}>
            <img src={influ1} alt="influ1" />
            <img src={influ2} alt="influ2" />
            <img src={influ3} alt="influ3" />
            <img src={influ4} alt="influ4" />
            <img src={influ5} alt="influ5" />
          </div>
        </div>
        <div className={styles.grabOnlyTextlinepscrollines}>
          <div className={styles.grabOnlyTextline}>
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                onClick={() => scrollToImage(index)}
                className={`${
                  activeIndex === index
                    ? styles.activeLine
                    : styles.inactiveLine
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="5"
              >
                <line
                  x1="0"
                  y1="2.5"
                  x2="50"
                  y2="2.5"
                  stroke="#fff7ea"
                  strokeDasharray="50, 0"
                />
              </svg>
            ))}
          </div>
          <div className={styles.grabOnlyTextlinepscrol}>
            <p>Scroll</p>
            <button
              onClick={() => (imageContainerRef.current.scrollLeft += 200)}
              className={styles.navButton}
            >
              <img src={arrow} alt="icon" className={styles.arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
