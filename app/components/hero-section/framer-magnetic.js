"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";

export default function FramerMagnetic({ children }) {
  const ref = useRef(null);
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
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    position.x.set(clientX - (left + width / 2));
    position.y.set(clientY - (top + height / 2));
  };

  const mouseLeave = (e) => {
    position.x.set(0)
    position.y.set(0)
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{...smoothPosition}}
    >
      {children}
    </motion.div>
  );
}
