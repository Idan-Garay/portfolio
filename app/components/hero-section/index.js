"use client";
import styles from "./index.module.css";
import FramerMagnetic from "./framer-magnetic";
import StickyCursor from "../sticky-cursor";

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <StickyCursor />
      <div className={styles.stars}></div>
      {/* <div className={styles.heroGlowBlur}> </div> */}
      <div className={styles.heroHeaderContent}>
        <h1 className={styles.heroHeader}>
          {"<I"}
          <span className={styles.heroHeaderSpan}>dan</span>
          {"/>"}
        </h1>
        <h3 className={styles.heroH3}>A Growing Software Engineer</h3>
        <h5 className={styles.heroH5}>Frontend Developer</h5>
      </div>

      <FramerMagnetic></FramerMagnetic>
    </div>
  );
};
