import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithubInverted } from "react-icons/vsc";

const Links = ({ color, size }) => {
  return (
    <div className="links">
      <a href="https://www.linkedin.com/in/josh-idan-1a4657176/">
        <IoLogoLinkedin size={size} />
      </a>
      <a href="https://github.com/Idan-Garay">
        <VscGithubInverted size={size} />
      </a>
    </div>
  );
};

export default Links;
