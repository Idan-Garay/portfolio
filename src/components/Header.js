import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="slide y x-padding">
      <div>
        <h1>
          Hi, <br />
          I'm Idan <br />
          web developer.
        </h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
