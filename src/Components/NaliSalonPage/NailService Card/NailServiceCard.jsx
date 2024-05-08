import React from 'react'
import "./NailServiceCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import HairForm from '../../HairServicePage/HairForm/HairForm';
const NailServiceCard = (props) => {
  let handlePopUp = () => {
    let open = document.querySelector(".hairFormWrapper");
    open.style.display = "flex";
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
    <div className="nailCardMain">
      <HairFormContain/>
    <div className="nailCardWrapper">
        <img className="nailCardImg" src={props.img} alt="" />
      <div className="nailCardCover">
        <div className="nailCardTxtContainer">
          <div className="nailCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="nailCardPara">
            <p>{props.para}</p>
          </div>
          <div className="nailCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
      <Link to={props.link}>
      <div className="nailGoto">
        <div className="nailGoTo1">
          <h1>{props.goto}</h1>
        </div>
        <div className="goTo2">
          <p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="nailCardIcon"
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
      </Link>
      <div className="respNailServiceContainer">
      <div className="respNailServiceCardCover">
        <div className="respNailServiceCardTxtContainer">
          <div className="respNailServiceCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="respNailServiceCardPara">
            <p>{props.para}</p>
          </div>
          <div className="respNailServiceCardBut">
            <button onClick={handlePopUp} >BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NailServiceCard
