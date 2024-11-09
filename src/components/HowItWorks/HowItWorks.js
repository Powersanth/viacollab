import React, { useState } from "react";
import styles from "./HowItWorks.module.css";
import hoverimage from "../../assets/hovergroup.png";

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const work = [
    {
      count: 1,
      name: "Sign Up",
      content:
        "Join the Via Collab community today!",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 2,
      name: "CREATE YOUR CAMPAIGN",
      content:
        "Got a killer idea? Let's make it happen!.",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 3,
      name: "Browse & Connect",
      content:
        "Find your perfect influencer match!",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 4,
      name: "Browse & Connect",
      content:
        "Effortless planning, powerful results.",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 5,
      name: "Track & Measure",
      content:
        "See the magic in action!",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 6,
      name: "Optimize & Grow",
      content:
        "Refine your strategy and watch your brand soar!",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
  ];

  return (
    <div className={styles.howWork}>
      <div className={styles.howWork2}>
        <div className={styles.howWorkh2}>
          <h2>How does it work?</h2>
        </div>
        <div className={styles.howWorkContent2}>
          {work.map((res, index) => (
            <div
              className={styles.howWorkContenttop}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.howWorkContent}>
                <div className={styles.howWorkcount}>{res.count}</div>
                <div className={styles.howWorkName}>{res.name}</div>
                <div className={styles.howWorkConten3t}>{res.content}</div>
                <div className={styles.imagehover}>
                  <img src={res.image} alt="hoverimage" />
                </div>
                <div className={styles.howWorksymbal}>
                  {hoveredIndex === index ? res.symbal2 : res.symbal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
