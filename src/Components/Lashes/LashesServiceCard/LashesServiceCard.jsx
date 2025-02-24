import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./LashesServiceCard.css";
const LashesServiceCard = (props) => {
  return (
    <div className="lashesCardMain">
      <div className="lashesCardWrapper">
        <img className="lashesCardImg" src={props.img} alt="" />
        <div className="lashesCardCover">
          <div className="lashesCardTxtContainer">
            <div className="lashesCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="lashesCardPara">
              <p>{props.para}</p>
            </div>
            <div className="lashesCardBut">
              <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="lashesGoto">
          <div className="goTo1">
            <h3>{props.goto}</h3>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="LashesCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respLashesServiceContainer">
        <div className="respLashesServiceCardCover">
          <div className="respLashesServiceCardTxtContainer">
            <div className="respLashesServiceCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="respLashesServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respLashesServiceCardBut">
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

export default LashesServiceCard;
