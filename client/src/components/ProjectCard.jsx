import livemusicunderground from "../assets/images/livemusicunderground.png";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card" >
        <img src={`../assets/images/${props.project.image}.png`} alt={props.project.image} />
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard;