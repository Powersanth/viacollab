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
  // Reference for the image container
  const imageContainerRef = useRef(null);

  // Function to scroll the images
  const scrollImages = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

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
        <button onClick={scrollImages} className={styles.navButton}>
          <img src={arrow} alt="icon" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}
