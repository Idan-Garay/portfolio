import React from "react";
import { MdOutlineSubject } from "react-icons/md";
import "./Hamburger.css";

const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger-cont">
      <MdOutlineSubject
        onClick={onClick}
        size={"100%"}
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
};

export default Hamburger;
