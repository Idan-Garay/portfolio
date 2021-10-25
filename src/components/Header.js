import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <h1>
        Hi, <br />
        I'm Idan <br />
        web developer.
      </h1>
    </header>
  );
};

export default Header;
