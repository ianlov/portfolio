import "../assets/css/nav.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <>
      <header>
        <HashLink className="hash" to="/#about" ><p>About</p></HashLink>
        <HashLink className="hash" to="/#projects" ><p>Projects</p></HashLink>
        <HashLink className="hash" to="/#skills" ><p>Skills</p></HashLink>
        <HashLink className="hash" to="/#experience" ><p>Experience</p></HashLink>
        <Link to="/contact" id="contact-link" ><p>Contact Me</p></Link>
      </header>
    </>
  )
}

export default Nav;