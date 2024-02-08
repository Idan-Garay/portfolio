"use client";
import styles from "./hero-section/index.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyCursor({ children, stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 150 : 30;
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
    const { width, height, left, top } =
      stickyElement.current.getBoundingClientRect();

    if (isHovered) {
      const center = { x: left + width / 2, y: top + height / 2 };
      position.x.set(center.x - cursorSize / 2);
      position.y.set(center.y - cursorSize / 2);
    } else {
      position.x.set(clientX - cursorSize / 2);
      position.y.set(clientY - cursorSize / 2);
    }
  };

  const mouseHover = (e) => {
    setIsHovered(true);
  };

  const mouseLeave = (e) => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    stickyElement.current.addEventListener("mouseover", mouseHover);
    stickyElement.current.addEventListener("mouseleave", mouseLeave);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      stickyElement.current.removeEventListener("mouseover", mouseHover);
      stickyElement.current.removeEventListener("mouseleave", mouseLeave);
    };
  });

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className={styles.cursorCircle}
      style={{ ...smoothPosition }}
      animate={{ width: cursorSize, height: cursorSize }}
    >
      {children}
    </motion.div>
  );
}
