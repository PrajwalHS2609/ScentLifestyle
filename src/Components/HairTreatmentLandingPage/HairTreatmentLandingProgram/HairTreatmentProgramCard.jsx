import React from "react";
import "./HairTreatmentLandingProgram.css";

const HairTreatmentProgramCard = () => {
  return (
    <div className="hairTreatmentProgramCard">
      <div className="hairTreatmentProgramCardContent1">
        <img
          src="https://img.freepik.com/free-photo/beautiful-model-with-long-smooth-flying-brunette-hair_155003-19424.jpg?t=st=1723203883~exp=1723207483~hmac=32de4c25e84057864aaa17c8843b653022bf17fd1966c930730240ab769592dd&w=996"
          alt=""
        />
        <div className="hairTreatmentProgramCardCover">
          <h4>40%</h4>
          <p>On Products</p>
        </div>
      </div>
      <div className="hairTreatmentProgramCardContent2">
        <h3>Long Wavy Hair</h3>
      </div>
      <div className="hairTreatmentProgramCardContent3">
        <p>The ultimate classic hair which has won the hearts of many.</p>
      </div>
    </div>
  );
};

export default HairTreatmentProgramCard;
