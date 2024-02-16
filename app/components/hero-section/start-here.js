"use client";
import styles from "./index.module.css";
import { forwardRef, useEffect } from "react";
import { motion, useCycle, useInView } from "framer-motion";

export const StartHere = forwardRef((props, ref) => {
  const [isOpened, toggleIsOpened] = useCycle(false, true);
  const isInView = useInView(ref);
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
    if (!isOpened) {
      setTimeout(() => {
        document.querySelector("body").scrollBy({
          top: 100,
          left: 100,
          behavior: "smooth",
        });
      }, 600);
    }
  };

  useEffect(() => {
    if (isOpened) {
      toggleIsOpened();
    }
  }, [isInView]);
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
