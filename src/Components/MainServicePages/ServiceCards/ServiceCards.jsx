import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HairForm from "../../HairServicePage/HairForm/HairForm";
const ServiceCards = (props) => {
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
    <div className="serviceCardMain">
            <HairFormContain/>

      <div className="serviceCardWrapper">
        <img className="serviceCardImg" src={props.img} alt="" />
        <div className="serviceCardCover">
          <div className="serviceCardTxtContainer">
            <div className="serviceCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="serviceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="serviceCardBut">
              <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="serviceGoto">
          <div className="goTo1">
            <h1>{props.goto}</h1>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="serviceCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respContainer">
        <div className="respServiceCardCover">
          <div className="respServiceCardTxtContainer">
            <div className="respServiceCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="respServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respServiceCardBut">
              <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
