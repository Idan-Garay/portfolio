import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithubInverted } from "react-icons/vsc";
import "./Links.css";

const Links = ({ size }) => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/josh-idan-1a4657176/"
        target={"_blank"}
      >
        <IoLogoLinkedin size={size} />
      </a>
      <a href="https://github.com/Idan-Garay" target={"_blank"}>
        <VscGithubInverted size={size} />
      </a>
    </div>
  );
};

export default Links;
