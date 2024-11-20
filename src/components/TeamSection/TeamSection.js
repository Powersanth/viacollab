import React, { useEffect } from "react";
import styles from "./TeamSection.module.css";
import abt1 from "../../assets/theme01.png";
import abt2 from "../../assets/theme02.png";
import abt3 from "../../assets/theme03.png";
import abt4 from "../../assets/theme04.png";
import abt5 from "../../assets/theme05.png";
import abt6 from "../../assets/theme06.png";
import vc2 from "../../assets/vc1.png"; // Import top wave
import vc1 from "../../assets/vc2.png"; // Import bottom wave
import Aos from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const teamMembers = [
    {
      id: 1,
      imgSrc: abt1,
      alt: "Alice, CEO",
      name: "Alice",
      designation: "CEO",
    },
    {
      id: 2,
      imgSrc: abt2,
      alt: "Bob, CTO",
      name: "Bob",
      designation: "CTO",
    },
    {
      id: 3,
      imgSrc: abt3,
      alt: "Charlie, COO",
      name: "Charlie",
      designation: "COO",
    },
    {
      id: 4,
      imgSrc: abt4,
      alt: "David, CFO",
      name: "David",
      designation: "CFO",
    },
    {
      id: 5,
      imgSrc: abt5,
      alt: "Eva, CMO",
      name: "Eva",
      designation: "CMO",
    },
    {
      id: 6,
      imgSrc: abt6,
      alt: "Frank, CTO",
      name: "Frank",
      designation: "CTO",
    },
  ];

  return (
    <div className={styles.teamSection}>
      <div className={styles.circleContainer}>
        <img src={vc1} alt="Top wave" className={styles.topWave} />
        <img src={vc2} alt="Bottom wave" className={styles.bottomWave} />

        <div className={styles.textContainer}>
          <h2 className={styles.headingSecondary}>Meet Our Team</h2>
          <h3 className={styles.headingPrimary}>Together We Make it Happen</h3>
        </div>

        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`${styles.teamMember} ${styles[`position${member.id}`]}`}
          >
            <img data-aos="flip-right"
              src={member.imgSrc} alt={member.alt} />
            <div className={styles.nameContainerHover}>
              <div className={styles.nameContainer1Hover}>{member.name}</div>
              <div className={styles.nameContainer2Hover}>{member.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
