import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./LashesServiceCard.css"
import HairForm from '../../HairServicePage/HairForm/HairForm';
const LashesServiceCard = (props) => {
  let handlePopUp = () => {
    let open = document.querySelector(".hairFormWrapper");
    open.style.display = "flex";
    console.log("open");
  };
  let handleExit = () => {
    let close = document.querySelector(".hairFormWrapper");
    close.style.display = "none";
  };

  const HairFormContain = () => {
    return (
      <div className="hairFormWrapper">
        <div className="hairFormExit">
          <FontAwesomeIcon
            icon={faX}
            className="formIcon"
            onClick={handleExit}
          ></FontAwesomeIcon>
        </div>
        <HairForm />
      </div>
    );
  };
  return (
    <div className="lashesCardMain">
      <HairFormContain/>
    <div className="lashesCardWrapper">
        <img className="lashesCardImg" src={props.img} alt="" />
      <div className="lashesCardCover">
        <div className="lashesCardTxtContainer">
          <div className="lashesCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="lashesCardPara">
            <p>{props.para}</p>
          </div>
          <div className="lashesCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
      <Link to={props.link}>
      <div className="lashesGoto">
        <div className="goTo1">
          <h1>{props.goto}</h1>
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
            <h1>{props.heading}</h1>
          </div>
          <div className="respLashesServiceCardPara">
            <p>{props.para}</p>
          </div>
          <div className="respLashesServiceCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LashesServiceCard
