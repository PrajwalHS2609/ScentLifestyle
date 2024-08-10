import React from "react";
import "./HairTreatmentLandingMission.css";
import { Link } from "react-router-dom";
import HairTreatmentLandingMissionMain from "./HairTreatmentLandingMissionMain";
const HairTreatmentLandingMission = () => {
  return (
    <div className="hairTreatmentLandingMission">
      <div className="hairTreatmentMissionContent1">
        <div className="hairTreatmentMissionItem">
          <h3>Mission</h3>
          <p>
            <span>
              We are a research-oriented organization. Our goal is to provide
              every individual with special needs the product that fulfills his
              yearning.
            </span>
          </p>
          <p>
            The term Special Needs is a unique need applicable only to that
            individual. It is an idiosyncrasy of the individual, that must be
            addressed. Therefore, the term Special Needs comes into play
            whenever an individual differs from the normal majority of category…
          </p>
          <Link to={"/about"}>
            <button>More About Us</button>
          </Link>
        </div>
      </div>
      <div className="hairTreatmentMissionContent2">
        <HairTreatmentLandingMissionMain />
      </div>
    </div>
  );
};

export default HairTreatmentLandingMission;
