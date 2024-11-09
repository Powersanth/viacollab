import React, { useEffect } from "react";
import styles from "./FrequentlyQandA.module.css";
import puzzle from "../../assets/puzzle.png";
import influencer from "../../assets/influencer.png";
import prize1 from "../../assets/prize1.png";
import dollarsymbol from "../../assets/dollar-symbol.png";
import globeearth from "../../assets/globe-earth.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function FrequentlyQandA() {
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
        "Lorem ipsum dolor sit amet consectetur. Amet hendrerit feugiat rutrum suspendisse. Curabitur molestie ut volutpat sit non massa eget quam.",
    },

    {
      image: prize1,
      question: "How do I know if the influencer’s audience is right for me?",
      answer:
        "You got it! Search by niche, follower count, engagement rate, and more to find your perfect influencer match.",
    },
    {
      image: dollarsymbol,
      question: "Can Via Collab help me plan my campaigns?",
      answer:
        "For sure! You can plan, schedule, and tweak campaigns using our simple dashboard, so everything runs smoothly.",
    },
    {
      image: globeearth,
      question: "What if I need help creating a campaign?",
      answer:
        "Need ideas? We’ve got your back! Create on your own or let us help you build something epic.",
    },
  ];
  return (
    <div className={styles.FrequentlyQandAContainer}>
      <div className={styles.FrequentlyQandAContainer2}>
        <div className={styles.FrequentlyQandAContainerText}>
          <p>Frequently Asked Questions</p>
        </div>
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
      </div>
    </div>
  );
}
