import React from "react";
import "./BotoxLandingWork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BotoxLandingWorkCard = () => {
  return (
    <div className="botoxLandingWorkCard">
      <img
        src="https://img.freepik.com/free-photo/close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa_23-2147939902.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt=""
      />
      <div className="botoxLandingWorkCardCover">
        <h3>Paul Mitchell Hair Show</h3>
        <div className="botoxLandingWorkCardUnderline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
          incidunt ipsum inventore autem commodi perspiciatis possimus,
          consequuntur facere, dolor ducimus molestias accusantium. Laborum,
          nobis? Officia similique itaque explicabo ipsa.
        </p>
        <div className="botoxLandingWorkCardArrow">
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="botoxArrow"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BotoxLandingWorkCard;
