import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCards = (props) => {
  return (
    <div className="serviceCardMain">
      <div className="serviceCardWrapper">
        <img className="serviceCardImg" src={props.img} alt="" loading="lazy"/>
        <div className="serviceCardCover">
          <div className="serviceCardTxtContainer">
            <div className="serviceCardHead">
              <h3>{props.heading}</h3>
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
      <div className="respContainer">
        <div className="respServiceCardCover">
          <div className="respServiceCardTxtContainer">
            <div className="respServiceCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="respServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respServiceCardBut">
              <a href="https://api.whatsapp.com/send?phone=919742232700">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="serviceGoto">
        <Link to={props.link}>
          <h3>{props.goto}</h3>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="serviceCardIcon"
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
