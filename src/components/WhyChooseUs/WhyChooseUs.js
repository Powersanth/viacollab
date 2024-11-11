import React, { useEffect } from "react";
import styles from "./WhyChooseUs.module.css";
import rectangle from "../../assets/Rectangle.png";
import curvemobi from "../../assets/curvemobi.png";

import star from "../../assets/star.png";
import pen from "../../assets/pen.png";
import msg from "../../assets/msg.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const features = [
    {
      image: star,
      title: "Tech-Savvy Influencer Magic",
      description:
        "With Via Collab, you don’t just work with influencers, you team up with trendsetters who bring vibes and flair to your brand.",
      colorClass: styles.purple,
    },
    {
      image: pen,
      title: "Real-Time Insights",
      description:
        "Forget guesswork. We give you real-time analytics to see how your campaigns are performing—no more waiting, just growing.",
      colorClass: styles.green,
    },
    {
      image: msg,
      title: "Authenticity Meets Impact",
      description:
        "We connect you with influencers who actually resonate with your audience. It’s not about followers, it’s about meaningful influence and creating major lewks. Our influencers are ready to make wave and turn that buzz into a full-on trend!",
      colorClass: styles.orange,
    },
  ];

  return (
    <div className={styles.whyChooseUsContainer}>
      <div className={styles.whyChooseUs}>
        <div className={styles.titleContainer2}>
          <div data-aos="fade-right" className={styles.whyChooseImage}>
            <img src={rectangle} alt="Background" />
          </div>
          <div className={styles.titleContainer}>
            <h1>WHY</h1>
            <h1>CHOOSE</h1>
            <h1>US?</h1>
          </div>
        </div>
        <div className={styles.titleContainer222}>
          <div className={styles.titleContainer}>
            <div data-aos="fade-right" className={styles.whyChooseImage1}>
              <img src={curvemobi} alt="Background" />
              <div className={styles.titleContainerrr}>
                <h1>WHY CHOOSE</h1>
                <h1>US?</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div className={styles.feature} key={index}>
              <div className={feature.colorClass}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className={`${styles.text}`}
              >
                <h3>
                  {feature.title} <span>{feature.description}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
