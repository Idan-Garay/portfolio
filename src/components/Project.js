import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div id="project-section" className="slide y">
      <h1>Projects</h1>
      <div id="projects">
        <div className="project">
          <img src="#" alt="project-picture" />
          <h3>Title</h3>
          <p>Project Date</p>
          <button>Dive In</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
