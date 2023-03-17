import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";

import Experience from "./component/Exprience";

import Project from "./component/Project";

import ProjectDisplay from "./component/projectdisply";
import Contact from "./component/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact}/>
          <Route path="/project" Component={Project} />

          <Route path="/project/:id" Component={ProjectDisplay} />

          <Route path="/exprience" Component={Experience} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
