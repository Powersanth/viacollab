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
        "We're all about Meta vibes! Via Collab is built for Instagram and Facebook, so you can reach audiences on the platforms that matter most.",
    },
    {
      image: influencer,
      question: "How does Via Collab track influencer performance?",
      answer:
        "We’re data-obsessed! Via Collab gives you all the juicy details—engagement, impressions, reach—so you know what’s working and what needs a remix.",
    },
    {
      image: prize1,
      question: "Can I run multiple campaigns at once?",
      answer:
        "Oh, absolutely! Manage as many influencers and campaigns as you need—all from one easy-peasy dashboard.",
    },
    {
      image: dollarsymbol,
      question: "Is Via Collab good for small brands?",
      answer:
        "100%! We’re here for brands big and small, helping you find influencers that match your vibe, budget, and goals.",
    },
    {
      image: globeearth,
      question: "Can I pick influencers based on niche?",
      answer:
        "You got it! Search by niche, follower count, engagement rate, and more to find your perfect influencer match.",
    },

    {
      image: prize1,
      question: "How do I know if the influencer’s audience is right for me?",
      answer:
        "We provide in-depth audience insights, so you’re not just guessing. Know exactly who’s tuning in!",
    },
    {
      image: globeearth,
      question: "Can Via Collab help me plan my campaigns?",
      answer:
        "For sure! You can plan, schedule, and tweak campaigns using our simple dashboard, so everything runs smoothly.",
    },
    {
      image: dollarsymbol,
      question: "How do I pay influencers?",
      answer:
        "We make payments hassle-free—just set up your budget, and Via Collab helps handle the rest.",
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
