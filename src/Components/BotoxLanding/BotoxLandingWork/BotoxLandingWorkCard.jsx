import React from "react";
import "./BotoxLandingWork.css";
const BotoxLandingWorkCard = (props) => {
  return (
    <div className="botoxLandingWorkCard">
      {/* <img
        src="https://img.freepik.com/free-photo/close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa_23-2147939902.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt=""
      /> */}
      <video autoPlay loop muted>
        <source src={props.vid} type="video/mp4" />
      </video>
      <div className="botoxLandingWorkCardCover">
        <h3>{props.head}</h3>
        <div className="botoxLandingWorkCardUnderline"></div>
        <p>{props.para}</p>
        {/* <div className="botoxLandingWorkCardArrow">
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="botoxArrow"
            ></FontAwesomeIcon>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BotoxLandingWorkCard;
