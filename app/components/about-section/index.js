import { roboto } from "@/app/fonts";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <nav
        style={{
          // padding: "0 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
          paddingRight: "7%",
        }}
      >
        <div
          className=""
          style={{
            minWidth: "6.5rem",
            height: "2.5rem",
            objectFit: "contain",
            position: "relative",
          }}
        >
          <Image
            src="/white-logo.svg"
            alt="logo"
            fill
            sizes="(max-width: 768px) 100px, 130px"
          />
        </div>

        <Link href="#contact">
          <div className="">Contact</div>
        </Link>
      </nav>

      <div className={styles.sectionContent}>
        <div className={styles.left}>
          <h1 style={roboto.style} className={styles.csGraduate}>
            CS Graduate
          </h1>
          <div className={styles.usc}>
            <div className={styles.uscLine}> </div>
            <h5 className={styles.uscText}>University of San Carlos</h5>
          </div>
          <p className={styles.p}>
            Almost 2 years of work experience as a front-end, and full-stack
            developer
          </p>

          <div className={styles.leftPersonaImgLabel}>
            <p
              style={{ paddingTop: "0", fontSize: "var(--font-size-base)" }}
              className={styles.p}
            >
              I find it time-saving to meticulously plan the <br />
              implementation before diving into coding
            </p>
            <div className={styles.personaImgLabelLine}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.sanctions}>
            <Image
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
                  style={{ fontSize: "var(--font-size-base)" }}
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
