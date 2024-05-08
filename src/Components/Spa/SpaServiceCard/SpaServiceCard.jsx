import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./SpaServiceCard.css"
import HairForm from '../../HairServicePage/HairForm/HairForm';
const SpaServiceCard = (props) => {
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
    <div className="spaCardMain">
      <HairFormContain/>
    <div className="spaCardWrapper">
        <img className="spaCardImg" src={props.img} alt="" />
      <div className="spaCardCover">
        <div className="spaCardTxtContainer">
          <div className="spaCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="spaCardPara">
            <p>{props.para}</p>
          </div>
          <div className="spaCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
      <Link to={props.link}>
      <div className="spaGoto">
        <div className="goTo1">
          <h1>{props.goto}</h1>
        </div>
        <div className="goTo2">
          <p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="spaCardIcon"
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
      </Link>
      <div className="respSpaServiceContainer">
      <div className="respSpaServiceCardCover">
        <div className="respSpaServiceCardTxtContainer">
          <div className="respSpaServiceCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="respSpaServiceCardPara">
            <p>{props.para}</p>
          </div>
          <div className="respSpaServiceCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SpaServiceCard
