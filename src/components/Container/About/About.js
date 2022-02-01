import React from "react";
import "./About.css";

const skillSet = [
  "Javascript",
  "Typescript",
  "React",
  "Node",
  "Express",
  "MongoDB",
];

const About = () => {
  return (
    <div className="about container" id="about-anchor">
      <h3 className="section-title">About me</h3>
      <p>
        Hello! My name is Idan and I enjoy building things on the internet. My
        interest in web development started back in my 1st year of college when
        I decided to try creating my own web page, it turns out building web
        pages taught me a lot about HTML &amp; CSS!
      </p>

      <p>
        Currently, my main focus these days is polishing my ReactJS skills and
        learning more about back-end technologies especially mongoDB.
      </p>

      <p>These are the few technologies I’ve been working with recently:</p>
      <ul className="skillset">
        {skillSet.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
