"use client";
import styles from "./index.module.css"
import { forwardRef } from "react";

export const StartHere = forwardRef((props, ref) => {
  return (
    <div {...props} className={styles.startHere}>
      <h2>
        ENTER<div ref={ref} className={styles.bounds}></div>
      </h2>
    </div>
  );
});

StartHere.displayName = "Start Here";
