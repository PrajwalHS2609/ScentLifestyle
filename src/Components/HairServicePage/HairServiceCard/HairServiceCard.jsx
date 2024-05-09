import React from "react";
import "./HairServiceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HairServiceCard = (props) => {
  return (
    <div className="hairCardMain">
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
              <a href="https://wa.me/09742232700/?text=urlencodedtext">
                <button>BOOK AN APPOINTMENT</button>
              </a>
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

export default HairServiceCard;
