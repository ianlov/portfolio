import "../assets/css/skills.css";

import SectionHeader from "./SectionHeader.jsx";
import SkillCard from "./SkillCard.jsx";

const Skills = () => {
  return (
    <>
      <div className="skills" >
        <SectionHeader section={"Skills"} />
        <div className="skills-container" >
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
        </div>
      </div>
    </>
  )
}

export default Skills;