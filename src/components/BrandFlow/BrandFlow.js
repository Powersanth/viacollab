// BrandFlow.js
import React from "react";
import styles from "./BrandFlow.module.css";

const brandNames = [
  "Amazon",
  "Google",
  "Apple",
  "Microsoft",
  "Tesla",
  "Meta",
  "Netflix",
  "Spotify",
  "Uber",
  "Airbnb",
];

const BrandFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        {brandNames.map((brand, index) => (
          <span key={index} className={styles.brand}>
            {brand}
          </span>
        ))}
        {/* Repeat the brands to create an infinite effect */}
        {brandNames.map((brand, index) => (
          <span key={`${index}-duplicate`} className={styles.brand}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandFlow;
