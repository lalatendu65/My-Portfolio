import React from "react"

import {Link} from "react-router-dom";

import "./navbar.css"

function Navbar(){
    return (
      <>
        <nav>
          <h1 className="head">My Portfolio </h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/exprience'>Exprience</Link></li>
            <li><Link to='/project'>Project</Link></li>
          </ul>
        </nav>
      </>
    );
};
export default Navbar