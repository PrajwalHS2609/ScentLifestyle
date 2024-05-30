import React from "react";
import BodySpaNearMeHead from "./BodySpaNearMeHead";
import BodySpaNearMePara from "./BodySpaNearMePara";
import "../NearMe.css";

const BodySpaNearMeMain = () => {
  return (
    <div className="nearContainer">
      <BodySpaNearMeHead />
      <BodySpaNearMePara />
    </div>
  );
};

export default BodySpaNearMeMain;
