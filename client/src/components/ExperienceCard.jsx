import "../assets/css/experiencecard.css";


const ExperienceCard = (props) => {
  return (
    <>
      <div className="experience-card" >
        <div className="experience-card__left">
          <img src={props.src} alt={props.experience.company} />
        </div>
        <div className="experience-card__right">
          <h1>{props.experience.company}</h1>
          <h2>{props.experience.title}</h2>
          <p>{props.experience.time}</p>
          <p>{props.experience.description}</p>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard;