import React from "react";
import "./Academy.css";
import AcademyHeader from "./AcademyHeader/AcademyHeader";
import AcademyWhyChoose from "./AcademyWhyChoose/AcademyWhyChoose";
import AcademyConnect from "./AcademyConnect/AcademyConnect";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import AcademyKeyMetrics from "./AcademyKeyMetrics/AcademyKeyMetrics";
import AcademyModel from "./AcademyModel/AcademyModel";
import AcademyPopup from "./AcademyPopup/AcademyPopup";
const Academy = () => {
  return (
    <div className="academyContainer">
      <AcademyHeader />
      <AcademyWhyChoose />
      {/* <AcademyKeyMetrics /> */}
      <AcademyConnect />
      <TextLocReviews />
      <AcademyModel />
      {/* <AcademyPopup/> */}
    </div>
  );
};

export default Academy;
