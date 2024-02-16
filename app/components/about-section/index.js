import { roboto } from "@/app/fonts";
import Image from "next/image";
import styles from "./index.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionNavigation } from "../section-navigation";

export const AboutSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const leftToRight = {
    transform: isInView ? "none" : "translateX(-150px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const rightToLeft = {
    transform: isInView ? "none" : "translateX(150px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <SectionNavigation />
      <div className={styles.sectionContent}>
        <div className={styles.left}>
          <h1
            ref={ref}
            style={{ ...roboto.style, ...leftToRight, zIndex: 50 }}
            className={styles.csGraduate}
          >
            CS Graduate
          </h1>
          <div className={styles.usc}>
            <div className={styles.uscLine}> </div>
            <h5 className={styles.uscText} style={rightToLeft}>
              University of San Carlos
            </h5>
          </div>
          <p className={styles.p} style={rightToLeft}>
            Almost 2 years of work experience as a front-end, and full-stack
            developer
          </p>

          <div className={styles.leftPersonaImgLabel}>
            <p
              style={{
                paddingTop: "0",
                fontSize: "var(--font-size-base)",
                ...leftToRight,
              }}
              className={styles.p}
            >
              I find it time-saving to meticulously plan the <br />
              implementation before diving into coding
            </p>
            <div className={styles.personaImgLabelLine}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div style={rightToLeft} className={styles.sanctions}>
            <Image
              style={rightToLeft}
              className={styles.greenWall}
              src="/green-wall.webp"
              alt="green-wall"
              fill
              quality={100}
            />
            <div className={styles.persona}>
              <Image
                className={styles.personaImg}
                src="/about-persona.webp"
                alt="persona"
                fill
                quality={100}
              />
              <div className={styles.personaImgLabel}>
                <div className={styles.personaImgLabelLine}></div>
                <p
                  className={styles.p}
                  style={{
                    fontSize: "var(--font-size-base)",
                    ...rightToLeft,
                    transitionDelay: "0.9s",
                  }}
                >
                  I find it time-saving to meticulously plan the <br />
                  implementation before diving into coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>Idan Joshua T. Garay</div>
    </section>
  );
};
