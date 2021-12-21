import "../assets/css/projects.css";

import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "../assets/projectData.js";

// import frankslist from "../assets/images/frankslist.png";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects" >
        <SectionHeader section={"Projects"} />
        <div className="projects-container" >
          {projectData.map( (project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;