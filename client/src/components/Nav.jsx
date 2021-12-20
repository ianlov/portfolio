import "../assets/css/nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <div className="page-links">
          <a id="about" >About</a>
          <a id="projects" >Projects</a>
          <a id="skills" >Skills</a>
          <a id="experience" >Experience</a>
        </div>
        <div className="off-page-links">
          <Link to="/contact" >Contact Me</Link>
        </div>
      </header>
    </>
  )
}

export default Nav;