import React, { useEffect, useRef } from "react";
import styles from "./FrequentlyQandA.module.css";
import puzzle from "../../assets/puzzle.png";
import influencer from "../../assets/influencer.png";
import prize1 from "../../assets/prize1.png";
import dollarsymbol from "../../assets/dollar-symbol.png";
import globeearth from "../../assets/globe-earth.png";
import Aos from "aos";
import arrow from "../../assets/arroeno.png";

import "aos/dist/aos.css";

export default function FrequentlyQandA() {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const QAndA = [
    {
      image: puzzle,
      question: "What platforms does Via Collab support?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: influencer,
      question: "How does Viacollab match brands with influencers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: prize1,
      question: "What types of influencers are available on Viacollab?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: dollarsymbol,
      question: "How much does it cost to work with an influencer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: globeearth,
      question: "How much does it cost to work with an influencer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },

    {
      image: prize1,
      question: "What types of influencers are available on Viacollab?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: dollarsymbol,
      question: "How much does it cost to work with an influencer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
    {
      image: globeearth,
      question: "How much does it cost to work with an influencer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },
  ];
  return (
    <div className={styles.FrequentlyQandAContainer}>
      <div className={styles.FrequentlyQandAContainer2}>
        <div className={styles.FrequentlyQandAContainerText}>
          <p>Frequently Asked Questions</p>
        </div>
        <div className={styles.FrequentlyQandAContainerText11}>
          <div data-aos="fade-right" className={styles.FreqContainerContain}>
            <div className={styles.FreqContainerContain21}>
              {QAndA?.slice(0, 4).map((res, index) => (
                <div key={index} className={styles.FreqQandA}>
                  <img
                    src={res.image}
                    alt="imag"
                    className={styles.questionImage}
                  />
                  <h2 className={styles.questionText}>{res.question}</h2>
                  <p className={styles.answerText}>{res.answer}</p>
                </div>
              ))}
            </div>
            <div data-aos="fade-left" className={styles.FreqContainerContain2}>
              <div className={styles.FreqContainerContain21}>
                {QAndA?.slice(4, 8).map((res, index) => (
                  <div key={index} className={styles.FreqQandA}>
                    <img
                      src={res.image}
                      alt="imag"
                      className={styles.questionImage}
                    />
                    <h2 className={styles.questionText}>{res.question}</h2>
                    <p className={styles.answerText}>{res.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.grabOnlyTextlinepscrol}>
            <p>Scroll</p>
            <div>
              <img src={arrow} alt="icon" className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
