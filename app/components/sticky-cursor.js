import styles from "./hero-section/index.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLayoutEffect } from "react";

export default function StickyCursor({ children }) {
  const CURSOR_SIZE = 100;
  const position = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothConfiguration = {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  };

  const smoothPosition = {
    x: useSpring(position.x, smoothConfiguration),
    y: useSpring(position.y, smoothConfiguration),
  };
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    // const { width, height, left, top } = ref.current.getBoundingClientRect();
    position.x.set(clientX - (CURSOR_SIZE / 2));
    position.y.set(clientY - (CURSOR_SIZE / 2));
  };

  const mouseLeave = (e) => {
    position.x.set(0);
    position.y.set(0);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className={styles.cursorCircle}
      style={{ ...smoothPosition }}
    >
      {children}
    </motion.div>
  );
}
