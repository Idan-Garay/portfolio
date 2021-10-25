import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div id="education-section" className="slide x-padding">
      <h1>Education</h1>
      <div id="schools">
        <div className="school">
          <span className="school-name">University of San Carlos</span>
          <span className="sy">2018 - current</span>
        </div>
        <div className="school">
          <span className="school-name">University of Cebu</span>
          <span className="sy">2016 - 2018</span>
        </div>
        <div className="school">
          <span className="school-name">Saint Louis College - Cebu</span>
          <span className="sy">2012 - 2016</span>
        </div>
        <div className="school">
          <span className="school-name">Banilad Elementary School</span>
          <span className="sy">2006 - 2012</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
