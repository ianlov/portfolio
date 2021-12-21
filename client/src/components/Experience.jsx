import "../assets/css/experience.css";

import SectionHeader from "./SectionHeader.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import ga from "../assets/images/ga.png";
import stjfd from "../assets/images/stjfd.png";
import sipoa from "../assets/images/sipoa.png";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience" >
        <SectionHeader section="Experience" />
        <div className="experience__container" >
          <ExperienceCard 
            company={"Generaly Assembly"}
            title={"Software Engineering Immersive"}
            src={ga}
            description={"During my time at General Assembly, I was immersed in a variety of software development technologies and languages, including HTML, CSS, Javascript, API's, SQL, Ruby, Ruby on Rails, React, Heroku, Github, Github Enterprise, Markdown, NPM, Express, and Mongo. Over 400 hours of professional training in 12 weeks, I used a hands-on approach to designing and building web applications with full CRUD functionality."}
          />

          <ExperienceCard 
            company={"St Johns Fire District"}
            title={"Firefighter"}
            src={stjfd}
            description={"Served the Johns Island community by protecting lives and property during emergent situations. Worked within a team to gain control over emergency scenes. Participated in fire-prevention programs with elementary school students."}
          />

          <ExperienceCard 
            company={"Seabrook Island Property Owner's Association"}
            title={"Engineering Intern"}
            src={sipoa}
            description={"While learning to use the ESRI ArcGIS software by familiarizing myself with an existing GIS database, I worked with a team to take measurements of the stormwater drainage system. I also worked on producing a clearer picture of what sea level rise will look like on Seabrook Island, combining it with systems used by the NOAA. In addition, I began work on creating a hurricane damage assessment tool."}
          />
        </div>
      </div>
    </>
  )
}

export default Experience;