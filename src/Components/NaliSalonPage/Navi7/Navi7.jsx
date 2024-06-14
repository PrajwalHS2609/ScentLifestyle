import React from "react";
import "./Navi7.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navi7 = () => {
  return (
    <div className="navi7Container">
      <div className="navi7Content">
        <h2>
          <Link to={"/"}>Home</Link>
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
          <span> Nail Salon </span>
        </h2>
      </div>
    </div>
  );
};

export default Navi7;
