import React from "react";

import ProjectItem from "../helper/projectiteam";

import { ProjectList } from "../helper/projectlist";

import "./Project.css"

function Project(){
    return (
      <div className="projects">
        <h1> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
    );
}
export default Project