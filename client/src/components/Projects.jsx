import "../assets/css/projects.css";

import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "../assets/data/projectData.js";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects" >
        <SectionHeader section={"Projects"} />
        <div className="projects-container" >
          <ProjectCard project={projectData[0]} />
          <ProjectCard project={projectData[1]} />
          <ProjectCard project={projectData[2]} />
          <ProjectCard project={projectData[3]} />
        </div>
      </div>
    </>
  )
}

export default Projects;