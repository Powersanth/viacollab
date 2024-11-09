import React, { useEffect } from "react";
import styles from "./TeamSection.module.css";
import abt1 from "../../assets/team1.png";
import abt2 from "../../assets/team2.png";
import abt3 from "../../assets/team3.png";
import abt4 from "../../assets/team4.png";
import abt5 from "../../assets/team5.png";
import abt6 from "../../assets/team6.png";
import vc2 from "../../assets/vc1.png"; // Import top wave
import teamback1 from "../../assets/themeback.png"; // Import bottom wave
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
      <div className={styles.circleContainerimag}>
        <img src={teamback1} alt="Top wave" className={styles.topWave} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textContaine2}>
          <p className={styles.headingSecondary}>Building A Dream Team</p>
          <h3 className={styles.headingPrimary}>Join the crew, let’s collab & create magic!</h3>
        </div>
        <div className={styles.memberdiv}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${styles.teamMember} ${styles[`position${member.id}`]}`}
            >
              <div>
                <img data-aos="flip-left" src={member.imgSrc} alt={member.alt} />
              </div>
              <div className={styles.nameContainer}>
                <p className={styles.nameContainer1}>{member.name}</p>
                <p className={styles.nameContainer2}>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
