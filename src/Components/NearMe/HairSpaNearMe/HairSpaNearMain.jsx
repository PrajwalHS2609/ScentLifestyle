import React from "react";
import "../NearMe.css";
import HairSpaNearMeHead from "./HairSpaNearMeHead";
import HairSpaNearMePara from "./HairSpaNearMePara";

const HairSpaNearMain = () => {
  return (
    <div className="nearContainer">
      <HairSpaNearMeHead />
      <HairSpaNearMePara />
    </div>
  );
};

export default HairSpaNearMain;
