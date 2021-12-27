import "../assets/css/experience.css";

import SectionHeader from "./SectionHeader.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import ga from "../assets/images/ga.png";
import stjfd from "../assets/images/stjfd.png";
import sipoa from "../assets/images/sipoa.png";
import experienceData from "../assets/data/experienceData.js";
import resume from "../assets/data/resume.pdf";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience" >
        <SectionHeader section="Experience" />
        <div className="experience__container" >
          <ExperienceCard 
            experience={experienceData[0]}
            src={ga}
          />

          <ExperienceCard 
            experience={experienceData[1]}
            src={stjfd}
          />

          <ExperienceCard 
            experience={experienceData[2]}
            src={sipoa}
          />
          <a className="resume-link" href={resume} ><h3>Full Resume</h3></a>
        </div>
      </div>
    </>
  )
}

export default Experience;