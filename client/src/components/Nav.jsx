import "../assets/css/nav.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <>
      <header>
        <HashLink to="/#about" ><p>About</p></HashLink>
        <HashLink to="/#projects" ><p>Projects</p></HashLink>
        <HashLink to="/#skills" ><p>Skills</p></HashLink>
        <HashLink to="/#experience" ><p>Experience</p></HashLink>
        <Link to="/contact" id="contact-link" ><p>Contact Me</p></Link>
      </header>
    </>
  )
}

export default Nav;