import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const UpperNav = () => {
  return (
    <div className="upperNavContainer">
      <h3>
        Glam Up with Our Exclusive Beauty Deals! -{" "}
        <span>
          <a href="https://scentlifestyle.com/offer?utm_source=Organic&utm_medium=Festive+Offer&utm_campaign=September+Month&utm_id=Banner+Bar">
            See Offers{" "}
          </a>
        </span>
      </h3>
      <div className="upperNavInsta">
        <a href="https://www.instagram.com/scentlifestyle/">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="upperNavIcon"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default UpperNav;
