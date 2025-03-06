import React from 'react'
import "./HairColorStreaksLandingCare.css"
import { Link } from 'react-router-dom'
import scentImg from "./../../../Images/SCENT Logo.png";

const HairColorStreaksLandingCare = () => {
  return (
    <div className="hairColorStreakLandingCare">
    <div
      className="hairColorStreakCareContent"
      id="hairColorStreakLandingCareContent1"
    >
      <div className="hairColorStreakLandingCareWrapper1">
        {" "}
        <h2>Hair Treatment</h2>
        <p className="hairColorStreakLandingCarePara1">
          Healthy hair that looks attractive can make you feel confident and
          super attractive. Shiny and Strong hair makes you the cynosure of
          all eyes.
        </p>
        <p className="hairColorStreakLandingCarePara2">
          Taking a few basic hair care steps go a long way in maintaining your
          hair. Otherwise, hair fall, unhealthy hair, and lackluster hair is
          the end result that can well be avoided. Remember, your hair is an
          index of your personality which can make or mar your looks.
        </p>
        <Link to={"/about-us"}>
          <button>More About Us</button>
        </Link>
      </div>
    </div>
    <div
      className="hairColorStreakCareContent"
      id="hairColorStreakLandingCareContent2"
    >
      <div className="hairColorStreakLandingCareWrapper2">
        {" "}
        <img src={scentImg} alt="" />
        <p className="hairColorStreakLandingCarePara1">
          Healthy hair that looks attractive can make you feel confident and
          super attractive. Shiny and Strong hair makes you the cynosure of
          all eyes.
        </p>

        <Link to={"/about-us"}>
          <button>More About Us</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HairColorStreaksLandingCare
