import "../assets/css/projectcard.css";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card" >
        <img src={props.src} alt={props.project.image} />
        <a href={`${props.github_url}`} ><h2>{props.project.title} <i class="devicon-github-original"></i></h2></a>
        <p>{props.project.description}</p>
        {props.project.tech}
      </div>
    </>
  )
}

export default ProjectCard;