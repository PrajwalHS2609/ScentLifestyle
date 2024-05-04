import React from "react";
import "./ServiceNearYou.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const SalonCard = (props) => {
  return (
    <>
    <div className="salonCardContainer">
      <img className="salonImg" src={props.image} alt="" />
      <div className="salonCover">
        <div className="salonCity">
          <h3>{props.city}</h3>
          <p>{props.no}</p>
        </div>
      </div>
    </div>
    <div className="respServiceCardContainer">
        <img className="respServiceImage" src={props.image} alt="" />
        <div className="respServiceNearYouCardCover">
          <h3>{props.city} </h3>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              className="menuIcon"
            ></FontAwesomeIcon> : 
              {props.no}
          </p>
        </div>
      </div>
    </>
  );
};

export default SalonCard;
