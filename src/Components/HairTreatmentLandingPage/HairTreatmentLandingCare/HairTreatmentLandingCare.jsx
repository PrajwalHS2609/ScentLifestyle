import React from "react";
import "./HairTreatmentLandingCare.css";
import { Link } from "react-router-dom";
import scentImg from "./../../../Images/SCENT Logo.png";
const HairTreatmentLandingCare = () => {
  return (
    <div className="hairTreatmentLandingCare">
      <div
        className="hairTreatmentCareContent"
        id="hairTreatmentLandingCareContent1"
      >
        <div className="hairTreatmentLandingCareWrapper1">
          {" "}
          <h2>Hair Treatment</h2>
          <p className="hairTreatmentLandingCarePara1">
            Healthy hair that looks attractive can make you feel confident and
            super attractive. Shiny and Strong hair makes you the cynosure of
            all eyes.
          </p>
          <p className="hairTreatmentLandingCarePara2">
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
        className="hairTreatmentCareContent"
        id="hairTreatmentLandingCareContent2"
      >
        <div className="hairTreatmentLandingCareWrapper2">
          {" "}
          <img src={scentImg} alt="" />
          <p className="hairTreatmentLandingCarePara1">
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
  );
};

export default HairTreatmentLandingCare;
