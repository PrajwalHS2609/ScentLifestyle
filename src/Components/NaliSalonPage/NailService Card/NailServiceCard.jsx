import React from "react";
import "./NailServiceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NailServiceCard = (props) => {
  return (
    <div className="nailCardMain">
      <div className="nailCardWrapper">
        <img className="nailCardImg" src={props.img} alt="" />
        <div className="nailCardCover">
          <div className="nailCardTxtContainer">
            <div className="nailCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="nailCardPara">
              <p>{props.para}</p>
            </div>
            <div className="nailCardBut">
              <a href="https://api.whatsapp.com/send?phone=919742232700">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="nailGoto">
          <div className="nailGoTo1">
            <h1>{props.goto}</h1>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="nailCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respNailServiceContainer">
        <div className="respNailServiceCardCover">
          <div className="respNailServiceCardTxtContainer">
            <div className="respNailServiceCardHead">
              <h1>{props.heading}</h1>
            </div>
            <div className="respNailServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respNailServiceCardBut">
              <a href="https://wa.me/9742232700/?text=urlencodedtext">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailServiceCard;
