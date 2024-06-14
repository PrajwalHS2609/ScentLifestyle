import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./LocationNavi.css";
const LocationNavi = (props) => {
  return (
    <div className="locNaviContainer">
      <div className="locNaviContent">
        <h2>
          <Link to={"/"}>Home</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="locIcon"
            ></FontAwesomeIcon>
          </p>
          <Link to={"/location"}>Location</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="locIcon"
            ></FontAwesomeIcon>
          </p> 
          <p><span>{props.loc}</span></p>
        </h2>
      </div>
    </div>
  );
};

export default LocationNavi;
