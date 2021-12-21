import "../assets/css/nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <Link to="/" ><p>About</p></Link>
        <Link to="/" ><p>Projects</p></Link>
        <Link to="/" ><p>Skills</p></Link>
        <Link to="/" ><p>Experience</p></Link>
        <Link to="/contact" id="contact-link" ><p>Contact Me</p></Link>
      </header>
    </>
  )
}

export default Nav;