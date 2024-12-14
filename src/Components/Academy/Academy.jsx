import React from "react";
import "./Academy.css";
import AcademyHeader from "./AcademyHeader/AcademyHeader";
import AcademyWhyChoose from "./AcademyWhyChoose/AcademyWhyChoose";
import AcademyConnect from "./AcademyConnect/AcademyConnect";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
// import AcademyKeyMetrics from "./AcademyKeyMetrics/AcademyKeyMetrics";
import AcademyModel from "./AcademyModel/AcademyModel";
import AcademyPopup from "./AcademyPopup/AcademyPopup";
import { Helmet } from "react-helmet";
const Academy = () => {
  return (
    <div className="academyContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Salon Academy in Bangalore | SCENT Salon Academy near Me</title>
        <meta
          name="description"
          content="Salon Academy in Bangalore. Begin your journey to success at SCENT Academy, where we equip you with innovative programs and unwavering support to build a flourishing career in the hair and beauty industry."
        />
        <link rel="canonical" href="https://scentlifestyle.com/academy" />
      </Helmet>
      <AcademyHeader />
      <AcademyWhyChoose />
      {/* <AcademyKeyMetrics /> */}
      <AcademyConnect />
      <TextLocReviews />
      <AcademyModel />
      <AcademyPopup />
    </div>
  );
};

export default Academy;
