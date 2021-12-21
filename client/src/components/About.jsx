import "../assets/css/about.css";

import SectionHeader from "./SectionHeader.jsx";
import headshot from "../assets/images/headshot.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about" >
        <SectionHeader section={"About"} />
        <div className="about__window" >
          <div className="about__window__header">
            <div className="red" ></div>
            <div className="yellow" ></div>
            <div className="green" ></div>
          </div>
          <div className="about__window__body" >
            <p><img src={headshot} alt="headshot"/>I am a programmer with strong emphasis in JavaScript, CSS, HTML and React. My previous career in Firefighting allowed me to cultivate an ability to problem solve under pressure, work well within a team, and gratefully receive critical feedback. <br/><br/>Even before then, I have gravitated towards hobbies where problem solving requires a high attention to detail, like rock-climbing, brazilian jiu-jitsu, and weight lifting. I like to tackle complex challenges and become stronger in the process. I believe I have always been a programmer at heart, but I have only recently discovered the craft. <br/><br/>I am seeking a role as a web developer at a company where I can continue to learn and work towards mastering the art of programming while utilizing my tenacious and detail oriented approach to finding solutions to enhance a team.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;