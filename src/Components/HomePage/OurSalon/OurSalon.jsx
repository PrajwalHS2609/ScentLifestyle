import React from "react";
import "./OurSalon.css";
import OurSalonHead from "./OurSalonHead";
import OurSalonMain from "./OurSalonMain";
import OurSalonFooterTxt from "./OurSalonFooterTxt";
const OurSalon = () => {
  return (
    <div className="salonContainer">
      <OurSalonHead />
      <OurSalonMain />
      <OurSalonFooterTxt />
    </div>
  );
};

export default OurSalon;
