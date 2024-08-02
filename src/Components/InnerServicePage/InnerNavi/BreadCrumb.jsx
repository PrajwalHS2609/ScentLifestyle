import React from "react";
import "./InnerNavi.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const BreadCrumb = (props) => {
  return (
    <div className="innerNaviContainer">
      <div className="innerNaviContent">
        <h2>
          <Link to={"/"}> Home</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <span>{props.currService}</span>
        </h2>
      </div>
    </div>
  );
};

export default BreadCrumb;
