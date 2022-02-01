import React from "react";
import Work from "../../Work";
import "./Projects.css";

const works = [
  {
    id: "sk-1",
    title: "Calculator",
    desc: "A simple calculator used for practical application while learning Typescript.",
    skillSet: ["React", "Typescript"],
    links: [
      "https://github.com/Idan-Garay/Calculator",
      "https://calculator.idanjoshua.net/",
    ],
  },
  {
    id: "sk-2",
    title: "Covid Reports",
    desc: "A simple covid reports featuring covid cases on different countries globally.",
    skillSet: ["React", "Tailwind CSS"],
    links: [
      "https://github.com/Idan-Garay/covid",
      "https://covid.idanjoshua.net/",
    ],
  },
  {
    id: "sk-3",
    title: "Fake Store",
    desc: "A basic e-commerce using the fake-store api showing fetched items and a shopping cart using session.",
    skillSet: ["React", "Tailwind CSS"],
    links: [
      "https://github.com/Idan-Garay/fake-store",
      "https://fakestore.idanjoshua.net/",
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="section-title">Personal Projects</h3>
      {works.map((values) => (
        <Work key={values.id} {...values} />
      ))}
    </div>
  );
};

export default Projects;
