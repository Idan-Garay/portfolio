import React, { useEffect, useState } from "react";
import Hamburger from "../../Hamburger";
import "./Navbar.css";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    setVisible(window.scrollY - 200 <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={visible ? "navbar" : "navbar-hidden"}>
      <div className="mobile-navbar">
        <Hamburger onClick={() => setToggle(true)} />
        {toggle ? (
          <>
            <div className="blur">ey</div>
            <aside
              className={
                toggle ? "navbar-cont scale-up-hor-right" : "display-none"
              }
            >
              <div className="display-flex-end">
                <TiTimes
                  className="platform"
                  onClick={() => setToggle(false)}
                />
              </div>
              <nav>
                <ol>
                  <li>
                    <a href="#about-anchor">About</a>
                  </li>
                  <li>
                    <a href="#projects-anchor">Projects</a>
                  </li>
                  <li>
                    <a href="#contact-anchor">Contact</a>
                  </li>
                </ol>
              </nav>
            </aside>
          </>
        ) : null}
      </div>
      <div className="web-navbar">
        <nav>
          <ol>
            <li>
              <a href="#about-anchor">About</a>
            </li>
            <li>
              <a href="#projects-anchor">Projects</a>
            </li>
            <li>
              <a href="#contact-anchor">Contact</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
