import React from "react";
import { MdOutlineSubject } from "react-icons/md";
import "./Hamburger.css";

const Hamburger = () => {
  return (
    <div className="hamburger-cont">
      <MdOutlineSubject size={"100%"} style={{ transform: "scaleX(-1)" }} />
    </div>
  );
};

export default Hamburger;
