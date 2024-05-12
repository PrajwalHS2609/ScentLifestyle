import React from "react";
import "./LocationArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const LocationArrow = (props) => {
  return (
    <div className="locArrowContainer">
      <div className="leftArrow">
        <Link to={props.leftLink}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrowIcon"
          ></FontAwesomeIcon>
        </Link>
      </div>
      <div className="rightArrow">
        <Link to={props.rightLink}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrowIcon"
        ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default LocationArrow;
