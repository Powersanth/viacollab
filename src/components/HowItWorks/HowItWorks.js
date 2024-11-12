import React, { useState } from "react";
import styles from "./HowItWorks.module.css";
import hoverimage from "../../assets/newone.png";

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [show, setShow] = useState(null);

  const showfn = (index) => {
    // Check if the screen width is 720px or less before toggling
    if (window.innerWidth <= 720) {
      setShow(show === index ? null : index);
    }
  };
  const work = [
    {
      count: 1,
      name: "Sign Up",
      content: "Join the Via Collab community today!",
      image: hoverimage,
      contenth1: "Get Started with Via Collab",
      contentp1:
        "Jump in and get exclusive access to a network of authentic influencers who are ready to collaborate and create magic with your brand.",
      contentp2:
        "Say goodbye to complicated sign-ups—just a quick and easy process to get you started on your influencer marketing journey.",
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 2,
      name: "CREATE YOUR Campaign",
      content: "Got a killer idea? Let's make it happen!",
      image: hoverimage,
      contenth1: "Design Your Campaign, Your Way",
      contentp1:
        "You can create your own custom campaign or work with us to design something that will truly blow your audience away.",
      contentp2:
        "Whether it's a product launch, seasonal promotion, or any other idea, we’ll make sure your campaign is a standout success.",
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 3,
      name: "Browse & Connect",
      content: "Find your perfect influencer match!",
      image: hoverimage,
      contenth1: "Find Your Ideal Influencers",
      contentp1:
        "Search by niche, follower count, engagement rate, and more to discover influencers who align perfectly with your brand.",
      contentp2:
        "It's like swiping right, but better—because you’re connecting with influencers who’ll help elevate your message, not just add fluff.",
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 4,
      name: "Collaborate & Plan",
      content: "Effortless planning, powerful results.",
      image: hoverimage,
      contenth1: "Manage Campaigns with Ease",
      contentp1:
        "Our intuitive dashboard is designed to make campaign planning, scheduling, and execution a breeze.",
      contentp2:
        "Get everything you need to manage your influencer collaborations with ease. Plus, real-time insights mean you're always in control, just like a pro.",
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 5,
      name: "Track & Measure",
      content: "See the magic in action!",
      image: hoverimage,
      contenth1: "Get Started with Via Collab",
      contentp1:
        "Jump in and get exclusive access to a network of authentic influencers who are ready to collaborate and create magic with your brand.",
      contentp2:
        "Say goodbye to complicated sign-ups—just a quick and easy process to get you started on your influencer marketing journey.",
      symbal: "+",
      symbal2: "-",
    },
    {
      count: 6,
      name: "Optimize & Grow",
      content: "Refine your strategy and watch your brand soar!",
      image: hoverimage,
      contenth1: "Get Started with Via Collab",
      contentp1:
        "Jump in and get exclusive access to a network of authentic influencers who are ready to collaborate and create magic with your brand.",
      contentp2:
        "Say goodbye to complicated sign-ups—just a quick and easy process to get you started on your influencer marketing journey.",
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
              className={`${styles.howWorkContenttop} ${
                show === res.count ? styles.active : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => showfn(res.count)} // Toggle the state on click
            >
              <div
                className={`${styles.howWorkContent} ${
                  show === res.count ? styles.active : ""
                }`}
              >
                {show === res.count ? (
                  <div className={styles.imagehovershow}>
                    <div className={styles.imagehoverimg}>
                      <img src={res.image} alt="hoverimage" />
                      <div className={styles.imagehover2}>
                        <h1>{res.contenth1}</h1>
                        <p>{res.contentp1}</p>
                        <p>{res.contentp2}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.howWorkContent23flex}>
                    <div className={styles.howWorkContent23}>
                      <div className={styles.howWorkcount}>{res.count}</div>
                      <div className={styles.howWorkName}>{res.name}</div>
                    </div>
                    <div className={styles.howWorkConten3t}>{res.content}</div>
                    </div>
                    <div className={styles.imagehover}>
                      <div className={styles.imagehoverimg}>
                        <img src={res.image} alt="hoverimage" />
                        <div className={styles.imagehover2}>
                          <h1>{res.contenth1}</h1>
                          <p>{res.contentp1}</p>
                          <p>{res.contentp2}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className={styles.howWorksymbal}>
                  <p className={hoveredIndex === index ? styles.hovered : ""}>
                    {hoveredIndex === index ? res.symbal2 : res.symbal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
