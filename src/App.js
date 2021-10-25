import React from "react";
import "./App.css";
import Header from "./components/Header";
import Education from "./components/Education";
import Project from "./components/Project";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Education />
      <Project />
    </div>
  );
};

export default App;
