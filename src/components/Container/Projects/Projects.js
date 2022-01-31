import React from "react";
import Work from "../../Work";
import "./Projects.css";

const works = [
  {
    id: "sk-1",
    title: "Calculator",
    desc: "A simple calculator used for practical application while learning Typescript.",
    skillSet: ["React", "Typescript"],
  },
  {
    id: "sk-2",
    title: "Covid Reports",
    desc: "A simple covid reports featuring covid cases on different countries globally.",
    skillSet: ["React", "Tailwind CSS"],
  },
  {
    id: "sk-3",
    title: "Fake Store",
    desc: "A basic e-commerce using the fake-store api showing fetched items and a shopping cart using session.",
    skillSet: ["React", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div>
      <h3 className="section-title">Personal Projects</h3>
      {works.map((values) => (
        <Work key={values.id} {...values} />
      ))}
    </div>
  );
};

export default Projects;
