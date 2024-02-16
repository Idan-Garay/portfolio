import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export const SectionNavigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10%",
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

      <Link href="#contact" className={styles.contact}>
        <div className="">Contact</div>
      </Link>
    </nav>
  );
};
