import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const OurSalonFooterTxt = () => {
  return (
    <div className="salonContent3">
      <Link to="/">
        <p>OUR SALONS </p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="salonIcon"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default OurSalonFooterTxt;
