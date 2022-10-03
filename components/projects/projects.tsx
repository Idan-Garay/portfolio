import styles from "./projects.module.css";
import { MdPreview } from "react-icons/Md";
import { FaGithubAlt } from "react-icons/Fa";

export default function () {
  return (
    <div className={styles.hero}>
      <h1>My Projects</h1>
      <br />
      <p>Check out my engineered and developed projects</p>

      <div className={styles.projectImg}>
        <img src="#" />
      </div>

      <div>
        <h4>App Name</h4>
        <ul className={styles.ul}>
          <li>Tool 1</li>
          <li>Tool 2</li>
          <li>+ 2</li>
        </ul>
        <p>
          Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
          ipsum dolor
        </p>
        <div className={styles.buttons}>
          <button>
            <MdPreview /> <p>Preview</p>
          </button>
          <button>
            <FaGithubAlt />
            <p>Source Code</p>
          </button>
        </div>
      </div>
    </div>
  );
}
