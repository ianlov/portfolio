import "../assets/css/projectcard.css";

import livemusicunderground from "../assets/images/livemusicunderground.png";
// import frankslist from "../assets/images/frankslist.png";
// import wikiroll from "../assets/images/wikiroll.png";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card" >
        <img src={livemusicunderground} alt={props.project.image} />
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard;