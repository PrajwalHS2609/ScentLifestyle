import React from "react";
import "./InnerNavi.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const InnerNavi = (props) => {
  return (
    <div className="innerNaviContainer">
      <div className="innerNaviContent">
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
          <Link to={"/beard"}>{props.service}</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <span>{props.currService}</span>
        </h1>
      </div>
    </div>
  );
};

export default InnerNavi;
