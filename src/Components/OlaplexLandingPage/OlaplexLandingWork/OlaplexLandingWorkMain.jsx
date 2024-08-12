import React from "react";
import OlaplexLandingWorkCard from "./OlaplexLandingWorkCard";
import OlaplexLandingWorkStatic from "./OlaplexLandingWorkStatic";
import "./OlaplexLandingWork.css"

const OlaplexLandingWorkMain = () => {
  return (
    <div className="olaplexLandingWorkMain">
      <OlaplexLandingWorkStatic />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
      <OlaplexLandingWorkCard />
    </div>
  );
};

export default OlaplexLandingWorkMain;
