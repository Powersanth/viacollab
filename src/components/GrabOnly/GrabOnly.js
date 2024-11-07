import React, { useEffect, useRef } from "react";
import styles from "./GrabOnly.module.css";
import influ1 from "../../assets/influ1.png";
import influ2 from "../../assets/influ2.png";
import influ3 from "../../assets/influ3.png";
import influ4 from "../../assets/influ4.png";
import influ5 from "../../assets/influ5.png";
import arrow from "../../assets/arrow.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GrabOnly() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const imageContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;

    // Start drag
    const startDrag = (e) => {
      isDragging.current = true;
      startX.current = e.pageX || e.touches[0].pageX;
      scrollLeft.current = imageContainer.scrollLeft;
    };

    // Stop drag
    const stopDrag = () => {
      isDragging.current = false;
    };

    // Move drag
    const moveDrag = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const distance = (x - startX.current) * 1.5; // Adjust the drag speed
      imageContainer.scrollLeft = scrollLeft.current - distance;
    };

    // Mouse events
    imageContainer.addEventListener("mousedown", startDrag);
    imageContainer.addEventListener("mousemove", moveDrag);
    imageContainer.addEventListener("mouseup", stopDrag);
    imageContainer.addEventListener("mouseleave", stopDrag);

    // Touch events for mobile
    imageContainer.addEventListener("touchstart", startDrag);
    imageContainer.addEventListener("touchmove", moveDrag);
    imageContainer.addEventListener("touchend", stopDrag);

    // Clean up listeners on unmount
    return () => {
      imageContainer.removeEventListener("mousedown", startDrag);
      imageContainer.removeEventListener("mousemove", moveDrag);
      imageContainer.removeEventListener("mouseup", stopDrag);
      imageContainer.removeEventListener("mouseleave", stopDrag);
      imageContainer.removeEventListener("touchstart", startDrag);
      imageContainer.removeEventListener("touchmove", moveDrag);
      imageContainer.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div className={styles.grabOnlyContainer}>
      <div className={styles.grabOnlySelector}>
        <div className={styles.grabOnlyText}>
          <p>Grab</p>
          <p>only the</p>
          <p>best of</p>
          <p>every</p>
          <p>thing</p>
        </div>
        <div className={styles.grabOnlyImg} ref={imageContainerRef}>
          <img src={influ1} alt="influ1" />
          <img src={influ2} alt="influ2" />
          <img src={influ3} alt="influ3" />
          <img src={influ4} alt="influ4" />
          <img src={influ5} alt="influ5" />
        </div>
        <button
          onClick={() => (imageContainerRef.current.scrollLeft += 200)}
          className={styles.navButton}
        >
          <img src={arrow} alt="icon" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}
