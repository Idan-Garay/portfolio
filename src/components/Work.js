import React from "react";
import "./Work.css";
import { VscGithubInverted, VscLiveShare } from "react-icons/vsc";

const Work = ({ title, desc, skillSet, links }) => {
  return (
    <div className="work">
      <h3 className="work-title">{title}</h3>
      <p className="work-paragraph">{desc}</p>
      <div className="bottom-display">
        <div className="bottom-display-container">
          {skillSet.map((val, idx) => (
            <div key={idx} className="skill">
              {val}
            </div>
          ))}
        </div>
        <div className="bottom-display-container">
          <a href={links[0]} target={"_blank"}>
            <VscGithubInverted size={30} className="platform" />
          </a>
          <a href={links[1]} target={"_blank"}>
            <VscLiveShare size={30} className="platform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
