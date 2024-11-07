import React, { useEffect } from "react";
import styles from "./WhyChooseUs.module.css";
import rectangle from "../../assets/Rectangle.png";
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
      title: "Lorem Ipsum",
      description:
        "Dolor sit amet consectetur. Habitant nisi libero turpis tortor bibendum orci quisque orci nam.",
      colorClass: styles.purple,
    },
    {
      image: pen,
      title: "Lorem Ipsum",
      description:
        "Aenean facilisis in sit id sit. Fringilla imperdiet ut pretium lacus. Adipiscing consequat in nullam non nisl.",
      colorClass: styles.green,
    },
    {
      image: msg,
      title: "Lorem Ipsum",
      description:
        "Dolor sit amet consectetur. Habitant nisi libero turpis tortor bibendum orci quisque orci nam.",
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
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
