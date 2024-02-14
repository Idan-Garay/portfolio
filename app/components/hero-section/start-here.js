"use client";
import styles from "./index.module.css";
import { forwardRef } from "react";
import { motion, useCycle } from "framer-motion";

export const StartHere = forwardRef((props, ref) => {
  const { heroSectionScope, heroSectionAnimate } = props.inputprops;
  const [isOpened, toggleIsOpened] = useCycle(true, false);
  const zoomBackgroundVariants = {
    open: {
      transform: "scale(20,20)",
      backgroundColor: "white",
    },
    close: {
      transform: "scale(1,1)",
    },
  };

  const handleClick = (e) => {
    toggleIsOpened();
    heroSectionAnimate(heroSectionScope.current);
  };
  return (
    <div className={styles.startHerePosition}>
      <div style={{ position: "relative", overflow: "visible" }}>
        <motion.div
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 50,
          }}
          className={styles.startHereZoomBackground}
          animate={isOpened ? "open" : "close"}
          variants={zoomBackgroundVariants}
        ></motion.div>
        <div {...props} className={styles.startHere} onClick={handleClick}>
          <h2>
            ENTER<div ref={ref} className={styles.bounds}></div>
          </h2>
        </div>
      </div>
    </div>
  );
});

StartHere.displayName = "Start Here";
