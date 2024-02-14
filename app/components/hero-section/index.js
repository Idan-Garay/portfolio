"use client";
import styles from "./index.module.css";
import StickyCursor from "../sticky-cursor";
import { useRef } from "react";
import { StartHere } from "./start-here";
import { useAnimate } from "framer-motion";

export const HeroSection = () => {
  const stickyElement = useRef(null);
  const [heroSectionScope, heroSectionAnimate] = useAnimate()
  return (
    <div className={styles.heroSection} ref={heroSectionScope}>
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
      <StartHere ref={stickyElement} inputprops={{heroSectionScope,heroSectionAnimate}} />
    </div>
  );
};
