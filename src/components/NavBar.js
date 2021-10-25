import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>About Me</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

export default NavBar;
