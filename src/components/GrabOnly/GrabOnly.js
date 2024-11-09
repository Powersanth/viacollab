import React, { useEffect, useRef, useState } from "react";
import styles from "./GrabOnly.module.css";
import grab1 from "../../assets/grab1.png";
import grab2 from "../../assets/grab2.png";
import grab3 from "../../assets/grab3.png";
import grab4 from "../../assets/grab4.png";
import grab5 from "../../assets/garb5.png";
import grab6 from "../../assets/grab6.png";
import grab7 from "../../assets/grab7.png";
import grab8 from "../../assets/grab8.png";
import grab9 from "../../assets/grab9.png";
import grab10 from "../../assets/grab10.png";

import arrow from "../../assets/arrow.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GrabOnly() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const imageContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - imageContainerRef.current.offsetLeft);
    setScrollLeft(imageContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed by changing the multiplier
    imageContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
  e.preventDefault(); // Prevent default scrolling behavior
  setIsDragging(true);
  setStartX(e.touches[0].pageX - imageContainerRef.current.offsetLeft);
  setScrollLeft(imageContainerRef.current.scrollLeft);
  console.log("Touch Start"); // Check if this is being triggered
};

const handleTouchMove = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent default scrolling behavior

  const x = e.touches[0].pageX - imageContainerRef.current.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scrolling speed if needed
  imageContainerRef.current.scrollLeft = scrollLeft - walk;
  console.log("Touch Move"); // Check if this is being triggered
};

const handleTouchEnd = () => {
  setIsDragging(false);
  console.log("Touch End"); // Check if this is being triggered
};
const sss =()=>{
  console.log("Touchsss"); // Check if this is being triggered

}

  return (
    <div className={styles.grabOnlyContainer}>
      <div className={styles.grabOnlySelector}>
        <div className={styles.grabOnlyText}>
          <p>All the</p>
          <p>RIZZ</p>
          <p>zero fluff</p>
          <p>pure gram</p>
          <p>MAGIC</p>
        </div>
        <div
          className={styles.grabOnlyImg}
          ref={imageContainerRef}
          onClick={sss}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <img src={grab1} alt="influ1" />
          <img src={grab2} alt="influ2" />
          <img src={grab3} alt="influ3" />
          <img src={grab4} alt="influ4" />
          <img src={grab5} alt="influ5" />
          <img src={grab6} alt="influ6" />
          <img src={grab7} alt="influ7" />
          <img src={grab8} alt="influ8" />
          <img src={grab9} alt="influ9" />
          <img src={grab10} alt="influ10" />
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
