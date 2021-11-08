import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Work from "./components/Work";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div id="app">
      <NavBar />
      <div className="px-10">
        <Header />
        <Education />
        <Contact />
        <Work />
      </div>
    </div>
  );
};

export default App;
