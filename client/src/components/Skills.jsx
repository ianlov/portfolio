import "../assets/css/skills.css";

import SectionHeader from "./SectionHeader.jsx";
import SkillCard from "./SkillCard.jsx";

const Skills = () => {
  return (
    <>
      <div className="skills" id="skills" >
        <SectionHeader section={"Skills"} />
        <div className="skills-container" >
          <SkillCard class={"devicon-html5-plain"} name={"html5"} />
          <SkillCard class={"devicon-css3-plain"} name={"css3"} />
          <SkillCard class={"devicon-javascript-plain"} name={"javaScript"} />
          <SkillCard class={"devicon-nodejs-plain"} name={"node.js"} />
          <SkillCard class={"devicon-express-original"} name={"express.js"} />
          <SkillCard class={"devicon-react-original"} name={"react"} />
          <SkillCard class={"devicon-ruby-plain"} name={"ruby"} />
          <SkillCard class={"devicon-rails-plain"} name={"rails"} />
          <SkillCard class={"devicon-git-plain"} name={"git"} />
          <SkillCard class={"devicon-github-original"} name={"github"} />
          <SkillCard class={"devicon-mongodb-plain"} name={"mongodb"} />
          <SkillCard class={"devicon-matlab-plain"} name={"matlab"} />
        </div>
      </div>
    </>
  )
}

export default Skills;