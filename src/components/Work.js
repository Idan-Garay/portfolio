import React from "react";
import Project from "./Project";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      image: "./fakestore.png",
      projectName: "Fake Store",
      github: "https://github.com/Idan-Garay/fake-store",
      live: "https://fakestore.idanjoshua.net",
      description:
        "A basic e-commerce using the fake-store api showing fetched items and a shopping cart using session.",
    },
    {
      image: "./covid.png",
      projectName: "Covid Reports",
      github: "https://github.com/Idan-Garay/covid",
      live: "https://covid.idanjoshua.net",
      description:
        "It shows the number of covid cases being reported in different countries using https://covid19.mathdro.id/api.",
    },
  ];

  return (
    <div className="slide" id="work">
      <h2>Works</h2>
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  );
};

export default Work;
