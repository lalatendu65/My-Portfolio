import React from "react"

import { ProjectList } from "../helper/projectlist";
import { useParams } from "react-router-dom";

import "./projectdisplay.css"




function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project img " />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>ProjectLinks</b> {project.projectlink}
      </p>
    </div>
  );
}
export default ProjectDisplay