import React from "react"

import { ProjectList } from "../helper/projectlist";
import { useParams } from "react-router-dom";

import "./projectdisplay.css"
// import GitHubIcon from "@mui/icons-material/GitHub";

import { FaGithub} from "react-icons/fa";

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
      <div className="github-icon">
      <a href="https://github.com/lalatendu65">
        <FaGithub />
      </a>
      </div>
    </div>
  );
}
export default ProjectDisplay