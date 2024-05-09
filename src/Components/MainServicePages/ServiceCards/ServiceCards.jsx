import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCards = (props) => {
  return (
    <div className="serviceCardMain">
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
              <a href="https://api.whatsapp.com/send?phone=919742232700">
                <button>BOOK AN APPOINTMENT</button>
              </a>
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

export default ServiceCards;
