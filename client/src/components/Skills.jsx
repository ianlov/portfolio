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
          <SkillCard class={"devicon-react-original"} name={"React"} />
          <SkillCard class={"devicon-ruby-plain"} name={"Ruby"} />
          <SkillCard class={"devicon-rails-plain"} name={"Rails"} />
          <SkillCard class={"devicon-git-plain"} name={"Git"} />
          <SkillCard class={"devicon-nodejs-plain"} name={"node.js"} />
          <SkillCard class={"devicon-mongodb-plain"} name={"MongoDB"} />
          <SkillCard class={"devicon-javascript-plain"} name={"JavaScript"} />
        </div>
      </div>
    </>
  )
}

export default Skills;