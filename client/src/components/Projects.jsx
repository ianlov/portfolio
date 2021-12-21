import "../assets/css/projects.css";

import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "../assets/data/projectData.js";

import livemusicunderground from "../assets/images/livemusicunderground.png";
import frankslist from "../assets/images/frankslist.png";
import wikiroll from "../assets/images/wikiroll.png";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects" >
        <SectionHeader section={"Projects"} />
        <div className="projects-container" >
          <ProjectCard project={projectData[0]} src={livemusicunderground} />
          <ProjectCard project={projectData[1]} src={frankslist} />
          <ProjectCard project={projectData[2]} src={wikiroll} />
        </div>
      </div>
    </>
  )
}

export default Projects;