import React from "react";
import "./HairColorStreaksLandingMission.css";
import { Link } from "react-router-dom";
import HairColorStreaksLandingMissionMain from "./HairColorStreaksLandingMissionMain";

const HairColorStreaksLandingMission = () => {
  return (
    <div className="hairColorStreakLandingMission">
      <div className="hairColorStreakMissionContent1">
        <div className="hairColorStreakMissionItem">
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
          <Link to={"/about-us"}>
            <button>More About Us</button>
          </Link>
        </div>
      </div>
      <div className="hairColorStreakMissionContent2">
        <HairColorStreaksLandingMissionMain />
      </div>
    </div>
  );
};

export default HairColorStreaksLandingMission;
