import React from "react";
import "./Navi3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navi3 = () => {
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
          <Link to={"/service"}>Salon Service</Link>
          <p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="serviceCardIcon"
            ></FontAwesomeIcon>
          </p>
          <span> Facial </span>
        </h2>
      </div>
    </div>
  );
};

export default Navi3;
