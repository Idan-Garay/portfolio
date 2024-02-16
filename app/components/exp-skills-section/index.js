import styles from "./index.module.css";
import { SectionNavigation } from "../section-navigation";
import Link from "next/link";

const Skill = ({ name = "JavaScript" }) => {
  return (
    <div
      style={{
        textAlign: "right",
        display: "flex",
        flexWrap: "nowrap",
        gap: "1rem",
        alignItems: "center",
        minWidth: "9rem",
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
  return (
    <section id="expskillssection" className={styles.expSkillsSection}>
      <SectionNavigation title="Skills & Experience" />
      <div className={styles.sectionContent}>
        <p className={styles.p}>
          My area of concentration revolves around JavaScript. At present, I use
          NextJS Framework as a Full-stack framework to integrate 3rd Party
          Services and Shadcn-ui to quickly build front-end components.
        </p>

        <span>
          Visit my{" "}
          <Link
            href="https://www.linkedin.com/in/idan-joshua-garay"
            className={styles.linkedin}
          >
            Linkedin
          </Link>{" "}
          for more
        </span>

        <div className={styles.skills}>
          {skills.map((val, _) => (
            <Skill key={_} name={val} />
          ))}
        </div>
      </div>
      <div className={styles.footer}>Idan Joshua T. Garay</div>
    </section>
  );
};
