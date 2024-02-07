import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
    </main>
  );
}
