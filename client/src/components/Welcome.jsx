import "../assets/css/welcome.css";

import devlogo from "../assets/images/devlogo.png";

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="weclome-container__card">
          <img src={devlogo} alt="developer logo" />
          <h1>Ian Lovice</h1>
          <div className="welcome-container__card__title-container">
            <p
              className="welcome-container__card__title-container__title"
            >Software Engineer.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome;