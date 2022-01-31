import React from "react";
import "./App.css";
import {
  Navbar,
  Header,
  About,
  Projects,
  Contact,
} from "./components/Container/index";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
