import React from "react";
import styles from "./BeliveIN.module.css";

export default function BeliveIN() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <div className={styles.headingw}>
            <p className={styles.smallText}>We</p> Belive
            <p className={styles.smallText}>in</p>
          </div>
          <p>Authentic</p>
          <p>Partnerships</p>
        </div>
        <div className={styles.description}>
          <p>
            Whether you're a brand looking to amplify your message or an
            influencer seeking meaningful collaborations, we bring both sides
            together to create impactful, results-driven campaigns.
          </p>
        </div>
      </div>
    </div>
  );
}
