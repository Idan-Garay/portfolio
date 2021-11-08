import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="slide-nav" id="about">
      <ul>
        <a href="#work">
          <li className="view-work">View Work</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
