import "../assets/css/contact.css";

import { Link } from "react-router-dom";

// import ContactForm from "../components/ContactForm.jsx";
import githublogo from "../assets/images/githublogo.png";
import linkedin from "../assets/images/linkedin.png";

const Contact = () => {
  return (
    <>
      <div className="contact" >
        <div className="contact__info" >
          <ul>
            <li>
              <a href="https://github.com/ianlov" >
                <img className="image-link" src={githublogo} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ian-lovice/" >
                <img className="image-link" src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__name-email">
          <h1>Ian Lovice</h1>
          <p>ian.lovice.dev@pm.me</p>
        </div>
        <Link to="/" >
          <button>Go Back</button>
        </Link>
      </div>
    </>
  )
}

export default Contact;