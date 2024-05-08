import React from "react";
import "./HairServiceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HairForm from "../HairForm/HairForm";
const HairServiceCard = (props) => {
  let handlePopUp = () => {
    let open = document.querySelector(".hairFormWrapper");
    open.style.display = "flex";
  };
  let handleExit = () => {
    let close = document.querySelector(".hairFormWrapper");
    close.style.display = "none";
  };

  const HairFormContain = () => {
    return (
      <div className="hairFormWrapper">
        <div className="hairFormExit">
          <FontAwesomeIcon
            icon={faX}
            className="formIcon"
            onClick={handleExit}
          ></FontAwesomeIcon>
        </div>
        <HairForm />
      </div>
    );
  };
  return (
    <div className="hairCardMain">
      <HairFormContain />
      <div className="hairCardWrapper">
        <img className="hairCardImg" src={props.img} alt="" />
        <div className="hairCardCover">
          <div className="hairCardTxtContainer">
            <div className="hairCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="hairCardPara">
              <p>{props.para}</p>
            </div>
            <div className="hairCardBut">
              <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="hairGoto">
          <div className="goTo1">
            <h1>{props.goto}</h1>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="hairCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respHairServiceContainer">
        <div className="respHairServiceCardCover">
          <div className="respHairServiceCardTxtContainer">
            <div className="respHairServiceCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="respHairServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respHairServiceCardBut">
              <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairServiceCard;
