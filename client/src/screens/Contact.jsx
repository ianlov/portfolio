import "../assets/css/contact.css";

import ContactForm from "../components/ContactForm.jsx";
import githublogo from "../assets/images/githublogo.png";
import linkedin from "../assets/images/linkedin.png";

const Contact = () => {
  return (
    <>
      <div className="contact" >
        <div className="contact__info" >
          <h3>Ian Lovice</h3>
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
        <ContactForm />
      </div>
    </>
  )
}

export default Contact;