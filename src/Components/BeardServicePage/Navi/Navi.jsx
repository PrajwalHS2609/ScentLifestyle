import React from "react";
import "./Navi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navi = () => {
  return (
    <div className="naviContainer">
      <div className="naviContent">
        <h1>
          <Link to={"/"}> Home</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
         <Link to={"/service"}>Salon Service</Link> 
         <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
       <Link to={"/hair"}>Hair Salon</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <span>Beard Styling</span>
        </h1>
      </div>
    </div>
  );
};

export default Navi;
