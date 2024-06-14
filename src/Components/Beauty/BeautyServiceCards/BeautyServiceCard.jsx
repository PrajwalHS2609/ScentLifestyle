import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./BeautyServiceCard.css";
const BeautyServiceCard = (props) => {
  return (
    <div className="beautyCardMain">
      <div className="beautyCardWrapper">
        <img className="beautyCardImg" src={props.img} alt="" />
        <div className="beautyCardCover">
          <div className="beautyCardTxtContainer">
            <div className="beautyCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="beautyCardPara">
              <p>{props.para}</p>
            </div>
            <div className="beautyCardBut">
              <a href="https://api.whatsapp.com/send?phone=919742232700">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="beautyGoto">
          <div className="goTo1">
            <h3>{props.goto}</h3>
          </div>
          <div className="goTo2">
            <p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="beautyCardIcon"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </Link>
      <div className="respBeautyServiceContainer">
        <div className="respBeautyServiceCardCover">
          <div className="respBeautyServiceCardTxtContainer">
            <div className="respBeautyServiceCardHead">
              <h3>{props.heading}</h3>
            </div>
            <div className="respBeautyServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respBeautyServiceCardBut">
              <a href="https://api.whatsapp.com/send?phone=919742232700">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyServiceCard;
