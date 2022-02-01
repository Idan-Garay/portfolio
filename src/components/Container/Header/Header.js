import React from "react";
import Links from "../../Links";
import "./Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1 className="intro-name">Idan Joshua</h1>
      <h4 className="work-position">Front-end Developer</h4>
      <Links color={"white"} size={"2rem"} />
    </div>
  );
};

export default Header;
