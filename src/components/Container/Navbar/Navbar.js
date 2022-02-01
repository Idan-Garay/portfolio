import React, { useState } from "react";
import Hamburger from "../../Hamburger";
import "./Navbar.css";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
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
              <TiTimes className="platform" onClick={() => setToggle(false)} />
            </div>
            <nav>
              <ol>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ol>
            </nav>
          </aside>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
