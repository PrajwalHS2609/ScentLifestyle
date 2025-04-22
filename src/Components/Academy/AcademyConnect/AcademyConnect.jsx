import React from "react";
import "./AcademyConnect.css";

import AcademyConnectImgContent from "./AcademyConnectImgContent";
import AcademyConnectTxtContent from "./AcademyConnectTxtContent";
const AcademyConnect = () => {
  return (
    <div className="academyConnect-container">
      <div className="academyConnect-wrapper">
        <AcademyConnectImgContent />
      </div>
      <div className="academyConnect-wrapper">
        <AcademyConnectTxtContent />

      </div>
    </div>
  );
};

export default AcademyConnect;
