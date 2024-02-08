"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const StartHere = forwardRef((props, ref) => {
  return <motion.div ref={ref} {...props}/>
});


StartHere.displayName = "Start Here"