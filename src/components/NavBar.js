import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav>
      <div className="left-align">
        <button onClick={handleToggle}>
          {menuToggle ? <MdClose /> : <FiMenu />}
        </button>
      </div>
      <ul className={menuToggle ? "toggled-menu" : "untoggled-menu"}>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
