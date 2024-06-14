import React from "react";
import "./Navi6.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navi6 = () => {
  return (
    <div className="navi6Container">
      <div className="navi6Content">
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
          <span> Lashes </span>
        </h2>
      </div>
    </div>
  );
};

export default Navi6;
