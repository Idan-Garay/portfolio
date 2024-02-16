import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export const SectionNavigation = ({ title = "" }) => {
  return (
    <nav className={styles.nav}>
      <div
        className={styles.logo}
      >
        <Image
          src="/white-logo.svg"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100px, 130px"
        />
      </div>

      <h4 className={styles.title}>{title}</h4>

      <Link href="#contact" className={styles.contact}>
        <div className="">Contact</div>
      </Link>
    </nav>
  );
};
