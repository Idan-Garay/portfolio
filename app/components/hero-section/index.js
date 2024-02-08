"use client";
import styles from "./index.module.css";
import FramerMagnetic from "./framer-magnetic";
import StickyCursor from "../sticky-cursor";
import { useRef } from "react";
import { StartHere } from "./start-here";

export const HeroSection = () => {
  const stickyElement = useRef(null);
  return (
    <div className={styles.heroSection}>
      <StickyCursor stickyElement={stickyElement} />
      <div className={styles.stars}></div>
      <div className={styles.heroHeaderContent}>
        <h1 className={styles.heroHeader}>
          {"<I"}
          <span className={styles.heroHeaderSpan}>dan</span>
          {"/>"}
        </h1>
        <h3 className={styles.heroH3}>A Growing Software Engineer</h3>
        <h5 className={styles.heroH5}>Frontend Developer</h5>
      </div>

      <FramerMagnetic>
        <StartHere ref={stickyElement} />
      </FramerMagnetic>
    </div>
  );
};
