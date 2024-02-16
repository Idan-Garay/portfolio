"use client";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExpSkillsSection } from "./components/exp-skills-section";
import { ContactSection } from "./components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpSkillsSection />
      <ContactSection />
    </>
  );
}
