import "../assets/css/projectcard.css";

const ProjectCard = (props) => {
  return (
    <>
      <a href={`${props.project.url}`} className="project-card" >
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
        {props.project.tech}
      </a>
    </>
  )
}

export default ProjectCard;