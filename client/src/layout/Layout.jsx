import "../assets/css/layout.css";

import Nav from "../components/Nav.jsx";
import githublogo from "../assets/images/githublogo.png";
import linkedin from "../assets/images/linkedin.png";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <footer>
        <a href="https://github.com/ianlov" ><img src={githublogo} alt="github logo" className="github" /></a>
        <a href="https://www.linkedin.com/in/ian-lovice/" ><img src={linkedin} alt="linkedin logo" className="linkedin" /></a>
      </footer>
    </>
  )
}

export default Layout;