import "../assets/css/projectcard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.project.url}><h2>{props.project.title}</h2></a>
      {props.project.tech}
      <a className="tech" id="g-link" href={props.project.github_url}><i className="devicon-github-original colored"></i></a>
    </div>
  )
}

export default ProjectCard;