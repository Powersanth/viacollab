import React, { useState } from "react";
import styles from "./HowItWorks.module.css";
import hoverimage from "../../assets/hovergroup.png";

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const work = [
    {
      count: 1,
      name: "Create Your Campaign",
      content:
        "Set your goals, budget, and timeline to find the perfect influencer match",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 2,
      name: "Find Influencers",
      content:
        "Browse our curated list of influencers or let us suggest the best fit based on your campaign needs.",
      image: hoverimage,
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 3,
      name: "Collaborate & Create",
      content:
        "Collaborate with influencers to develop authentic, engaging content that speaks to your audience.",
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
