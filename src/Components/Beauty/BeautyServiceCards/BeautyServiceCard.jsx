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
              <h1>{props.heading}</h1>
            </div>
            <div className="beautyCardPara">
              <p>{props.para}</p>
            </div>
            <div className="beautyCardBut">
              <a href="https://wa.me/09742232700/?text=urlencodedtext">
                <button>BOOK AN APPOINTMENT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to={props.link}>
        <div className="beautyGoto">
          <div className="goTo1">
            <h1>{props.goto}</h1>
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
              <h1>{props.heading}</h1>
            </div>
            <div className="respBeautyServiceCardPara">
              <p>{props.para}</p>
            </div>
            <div className="respBeautyServiceCardBut">
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

export default BeautyServiceCard;
