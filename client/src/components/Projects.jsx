import "../assets/css/projects.css";

import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "../assets/projectData.js";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects" >
        <SectionHeader section={"Projects"} />
        {projectData.map( project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  )
}

export default Projects;