import React from "react";
import "./Project.css";
import { IoLogoGithub } from "react-icons/io";
import { VscLiveShare } from "react-icons/vsc";

const Project = ({ image, projectName, github, live, description }) => {
  console.log(image);
  return (
    <div id="project" className="slide y">
      <div className="left-section">
        <img src={image} alt="projImg" />
      </div>
      <div className="right-section">
        <h2>{projectName}</h2>
        <p>{description}</p>
        <div className="links flex-no-wrap">
          <a href={github}>
            <div className="link">
              <IoLogoGithub />
              <span>Github</span>
            </div>
          </a>
          <a href={live}>
            <div className="link">
              <VscLiveShare />
              <span>Live</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
