import "../assets/css/experiencecard.css";


const ExperienceCard = (props) => {
  return (
    <>
      <div className="experience-card" >
        <div className="experience-card__left">
          <img src={props.src} alt={props.company} />
        </div>
        <div className="experience-card__right">
          <h1>{props.company}</h1>
          <h2>{props.title}</h2>
          <p>{props.time}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard;