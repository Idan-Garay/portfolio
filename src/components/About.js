import React from "react";

const About = () => {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Mongodb",
    "Figma",
    "Data Structures",
    "Algorithms",
  ];
  return (
    <div className="">
      <div className="about-flex">
        <h1>
          Hi, <br /> I'm Idan
        </h1>
        <p>
          I'm a 3rd year BS Computer Science in University of San Carlos. I like
          to read tech articles once in a while and I plan to make blogs about
          it.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-body">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
