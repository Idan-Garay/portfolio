import React from "react";
import Project from "./Project";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      projectName: "Fake Store",
      github: "https://github.com/Idan-Garay/fake-store",
      live: "#",
      description:
        "A basic e-commerce using the fake-store api showing fetched items and a shopping cart using session.",
    },
    {
      projectName: "Covid Reports",
      github: "https://github.com/Idan-Garay/covid",
      live: "#",
      description:
        "It shows the number of covid cases being reported in different countries using https://covid19.mathdro.id/api.",
    },
  ];

  return (
    <div className="slide" id="work">
      <h2>Works</h2>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};

export default Work;
