import React from "react";
import "./BotoxLandingWork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const BotoxLandingWorkCard = (props) => {
  return (
    <div className="botoxLandingWorkCard">
      {/* <img
        src="https://img.freepik.com/free-photo/close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa_23-2147939902.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt=""
      /> */}
      <video autoPlay loop muted >
        <source src={props.vid} type="video/mp4"/>
      </video>
      <div className="botoxLandingWorkCardCover">
        <h3>SCENT</h3>
        <div className="botoxLandingWorkCardUnderline"></div>
        <p>
          Stuck in a hair rut, I turned to Scent salon for a fresh perspective.
          During a fun and informative consultation, we brainstormed ideas and
          their expert stylist brought a daring new colour and cut to life. It
          felt like stepping into a makeover montage, and now my hair feels like
          a true statement!
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
