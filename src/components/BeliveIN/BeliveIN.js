import React from "react";
import styles from "./BeliveIN.module.css";

export default function BeliveIN() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <div className={styles.headingw}>
            <p className={styles.smallText}>We&nbsp;</p> <span>BELIVE</span>
            <p className={styles.smallText}>&nbsp;in</p>
          </div>
          <p1>Authentic</p1>
          <br />
          <p1>Partnerships</p1>
        </div>
        <div className={styles.description}>
          <p>
            Let's shake things up and make waves together. Bold moves, real
            connections
          </p>
          <p>-let's create marketing that stands out!</p>
        </div>
      </div>
    </div>
  );
}
