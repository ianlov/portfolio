import "../assets/css/skillcard.css";

const SkillCard = (props) => {
  return (
    <>
      <div className="skill-card" >
        <i className={props.class} ></i>
        <p>{props.name}</p>
      </div>
    </>
  )
}

export default SkillCard;