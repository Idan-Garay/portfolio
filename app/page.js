"use client";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  return (
    <main className="page">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
