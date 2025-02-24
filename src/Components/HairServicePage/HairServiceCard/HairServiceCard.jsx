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
              <h3>{props.heading}</h3>
            </div>
            <div className="hairCardPara">
              <p>{props.para}</p>
            </div>
            <div className="hairCardBut">
              <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="hairGoto">
          <div className="goTo1">
            <h3>{props.goto}</h3>
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
              <h3>{props.heading}</h3>
            </div>
            <div className="respHairServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respHairServiceCardBut">
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

export default HairServiceCard;
