import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { roboto } from "@/app/fonts";

export const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionContent}>
        <h1 style={roboto.style} className={styles.h1}>
          Let&apos;s Connect
        </h1>
        <p>
          Feel free to reach out if you’re looking for a developer, have a
          question, or just want to connect.
        </p>
        <div className={styles.label}>
          <div className={styles.labelLine}></div>
          <b className={styles.p}>garayidan@gmail.com</b>
        </div>
      </div>
      <footer className={styles.footer}>
        <div
          style={{
            minWidth: "6.5rem",
            height: "2.5rem",
            objectFit: "contain",
            position: "relative",
          }}
        >
          <Link href="#heroSection">
            <Image
              src="/white-logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 768px) 100px, 130px"
            />
          </Link>
        </div>
        <ul>
          <Link
            target="_blank"
            className={styles.link}
            href="https://www.linkedin.com/in/idan-joshua-garay"
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            className={styles.link}
            href="https://github.com/Idan-Garay"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            className={styles.link}
            href="https://twitter.com/GarayIdan"
          >
            Twitter
          </Link>
        </ul>
      </footer>
    </section>
  );
};
