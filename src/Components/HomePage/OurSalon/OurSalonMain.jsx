import React from "react";
import "./OurSalon.css";
import OurSalonCard from "./OurSalonCard";

const OurSalonMain = () => {
  return (
      <div className="salonContent2">
        <OurSalonCard txt="15 years" />
        <OurSalonCard txt="6 salons" />
        <OurSalonCard txt="10,000+ customers" />
      </div>
  );
};

export default OurSalonMain;
