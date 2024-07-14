import React from "react";
import "./Navi4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navi4 = () => {
  return (
    <div className="navi3Container">
      <div className="navi3Content">
        <h2>
          <Link to={"/"}>Home</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <Link to={"/service"}>Service</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <span> Beauty Essentials </span>
        </h2>
      </div>
    </div>
  );
};

export default Navi4;
