import React from "react";
import "./HelpNearYou.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HelpCard = (props) => {
  return (
    <>
      <div className="helpCardContainer">
        <img className="helpImg" src={props.image} alt="" />
        <div className="helpCover">
          <div className="helpCity">
            <h3>
              <Link to={props.link} >{props.city}</Link>
            </h3>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                className="menuIcon"
              ></FontAwesomeIcon>
              : {props.no}
            </p>
          </div>
        </div>
      </div>
      <div className="respHelpCardContainer">
        <img className="respImage" src={props.image} alt="" />
        <div className="respHelpCardCover">
          <h3>{props.city} </h3>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              className="menuIcon"
            ></FontAwesomeIcon>
            :{props.no}
          </p>
        </div>
      </div>
    </>
  );
};

export default HelpCard;
