import React from "react";
import HairColorStreaksLandingProgramCard from "./HairColorStreaksLandingProgramCard";
import { Link } from "react-router-dom";
import "./HairColorStreaksLandingProgram.css";

const HairColorStreaksLandingProgramMain = () => {
  return (
    <div className="hairColorStreakMainProgram">
      <HairColorStreaksLandingProgramCard />
      <HairColorStreaksLandingProgramCard />
      <HairColorStreaksLandingProgramCard />
      <Link to={"/shop"}>
        <button>More Products</button>
      </Link>
    </div>
  );
};

export default HairColorStreaksLandingProgramMain;
