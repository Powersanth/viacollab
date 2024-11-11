import React from "react";
import partnerships1 from "../../assets/partnerships1.png";
import partnerships2 from "../../assets/partnership2.png";
import partnerships3 from "../../assets/partnerships3.png";
import partnerships4 from "../../assets/partnership4.png";
import styles from "./Partnership.module.css";
import arrow from "../../assets/arroeno.png";

export default function Partnership() {
  return (
    <div className={styles.partnershipsCon}>
      <div className={styles.partnershipsConfiv}>
        <div className={styles.partnershipsCon1}>
          <div className={styles.partnershipsConimg11}>
            <img alt="s" src={partnerships1} />
            <div className={styles.partnershipsConimg21}>
              <div className={styles.partnershipsConimg241}>
                <h1>
                  Viacollab made influencer partnerships effortless. We saw real
                  results within weeks!
                </h1>
                <p1>Sarah Deschene</p1>
                <p> Marketing Director at Luxe Beauty</p>
              </div>
            </div>
          </div>
          <div className={styles.partnershipsConimg12}>
            <img alt="s" src={partnerships2} />
            <div className={styles.partnershipsConimg22}>
              <div className={styles.partnershipsConimg242}>
                <h1>
                  The platform is so easy to use & the influencers we worked with
                  truly understood our brand. Highly recommend!
                </h1>
                <p1>Sarah Deschene</p1>
                <p> Marketing Director at Luxe Beauty</p>
              </div>
            </div>
          </div>
          <div className={styles.partnershipsConimg13}>
            <img alt="s" src={partnerships3} />
            <div className={styles.partnershipsConimg23}>
              <div className={styles.partnershipsConimg243}>
                <h1>
                  Our campaign exceeded expectations thanks to Viacollab's
                  high-quality influencers. We'll definitely be back!
                </h1>
                <p1>Sarah Deschene</p1>
                <p> Marketing Director at Luxe Beauty</p>
              </div>
            </div>
          </div>
          <div className={styles.partnershipsConimg14}>
            <img alt="s" src={partnerships4} />
            <div className={styles.partnershipsConimg24}>
              <div className={styles.partnershipsConimg244}>
                <h1>
                  Viacollab made influencer partnerships effortless. We saw real
                  results within weeks!
                </h1>
                <p1>Sarah Deschene</p1>
                <p> Marketing Director at Luxe Beauty</p>
              </div>
            </div>
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
  );
}
