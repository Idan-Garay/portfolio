import React from "react";
import "./Work.css";
import { VscGithubInverted, VscLiveShare } from "react-icons/vsc";

const Work = ({ title, desc, skillSet }) => {
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
          <VscGithubInverted size={30} className="platform" />
          <VscLiveShare size={30} className="platform" />
        </div>
      </div>
    </div>
  );
};

export default Work;
