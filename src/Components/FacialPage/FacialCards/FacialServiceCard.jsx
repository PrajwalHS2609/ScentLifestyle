import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./FacialServiceCard.css";
const FacialServiceCard = (props) => {
  return (
    <div className="facialCardMain">
      <div className="facialCardWrapper">
        <img className="facialCardImg" src={props.img} alt="" />
        <div className="facialCardCover">
          <div className="facialCardTxtContainer">
            <div className="facialCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="facialCardPara">
              <p>{props.para}</p>
            </div>
            <div className="facialCardBut">
              <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="facialGoto">
          <div className="goTo1">
            <h3>{props.goto}</h3>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="facialCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respFacialServiceContainer">
        <div className="respFacialServiceCardCover">
          <div className="respFacialServiceCardTxtContainer">
            <div className="respFacialServiceCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="respFacialServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respFacialServiceCardBut">
              <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialServiceCard;
