import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./OurSalon.css";
const OurSalon = () => {
  return (
    <div className="salonContainer">
      <div className="salonContent1">
        <p>From one salon to a million transformation stories.</p>
        <div className="salonUnderline"></div>
      </div>
      <div className="salonContent2">
        <div className="salonItem">
          <p>15 years</p>
        </div>
        <div className="salonItem">
          <p>6 salons</p>
        </div>
        <div className="salonItem">
          <p>10,000+ customers</p>
        </div>
      </div>
      <div className="salonContent3">
        <p>OUR SALONS </p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="salonIcon"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default OurSalon;
