// BrandFlow.js
import React from "react";
import styles from "./BrandFlow.module.css";
import starrrrrr from "../../assets/starrrrrr.png";
const brandNames = [
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
  "VIBE WITH VIA",
];

const BrandFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        {brandNames.map((brand, index) => (
          <span key={index} className={styles.brand}>
            {brand}
            <img style={{ width: "30px" }} src={starrrrrr} />
          </span>
        ))}
        {/* Repeat the brands to create an infinite effect */}
        {brandNames.map((brand, index) => (
          <span key={`${index}-duplicate`} className={styles.brand}>
            <img style={{ width: "30px" }} src={starrrrrr} />

            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandFlow;
