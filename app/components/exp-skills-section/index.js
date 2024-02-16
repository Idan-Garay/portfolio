import styles from "./index.module.css";
import { SectionNavigation } from "../section-navigation";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skill = ({ name = "JavaScript", index, style }) => {
  return (
    <div
      style={{
        textAlign: "right",
        display: "flex",
        flexWrap: "nowrap",
        gap: "1rem",
        alignItems: "center",
        minWidth: "9rem",
        ...style,
        transitionDelay: `${50 * index}ms`,
      }}
    >
      <div
        style={{
          borderRadius: "100%",
          border: "1px solid hsl(var(--ring))",
          height: "1.563rem",
          width: "1.563rem",
        }}
      ></div>
      <span>{name}</span>
    </div>
  );
};

const skills = [
  "JavaScript",
  "NextJS",
  "React",
  "Git",
  "TypeScript",
  "Tailwindcss",
  "Shadcn UI",
  "Mongodb",
];

export const ExpSkillsSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const skillStyle = {
    transition: "all 0.8s",
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : "translateX(150px)",
  };

  return (
    <section id="expskillssection" className={styles.expSkillsSection}>
      <SectionNavigation title="Skills & Experience" />
      <div className={styles.sectionContent}>
        <p className={styles.p} style={skillStyle}>
          My area of concentration revolves around JavaScript. At present, I use
          NextJS Framework as a Full-stack framework to integrate 3rd Party
          Services and Shadcn-ui to quickly build front-end components.
        </p>

        <span style={skillStyle}>
          Visit my{" "}
          <Link
            href="https://www.linkedin.com/in/idan-joshua-garay"
            className={styles.linkedin}
          >
            Linkedin
          </Link>{" "}
          for more
        </span>

        <div className={styles.skills} ref={ref}>
          {skills.map((val, _) => (
            <Skill key={_} index={_} name={val} style={skillStyle} />
          ))}
        </div>
      </div>
      <div className={styles.footer}>Idan Joshua T. Garay</div>
    </section>
  );
};
