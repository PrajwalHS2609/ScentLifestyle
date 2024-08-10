import React from "react";
import "./HairTreatmentLandingProgram.css";
import HairTreatmentProgramCard from "./HairTreatmentProgramCard";
import { Link } from "react-router-dom";

const HairTreatmentMainProgram = () => {
  return (
    <div className="hairTreatmentMainProgram">
      <HairTreatmentProgramCard />
      <HairTreatmentProgramCard />
      <HairTreatmentProgramCard />
      <Link to={"/shop"}>
        <button>More Products</button>
      </Link>
    </div>
  );
};

export default HairTreatmentMainProgram;
