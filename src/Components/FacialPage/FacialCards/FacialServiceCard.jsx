import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./FacialServiceCard.css"
import HairForm from '../../HairServicePage/HairForm/HairForm';
const FacialServiceCard = (props) => {
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
    <div className="facialCardMain">
      <HairFormContain/>
    <div className="facialCardWrapper">
        <img className="facialCardImg" src={props.img} alt="" />
      <div className="facialCardCover">
        <div className="facialCardTxtContainer">
          <div className="facialCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="facialCardPara">
            <p>{props.para}</p>
          </div>
          <div className="facialCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
      <Link to={props.link}>
      <div className="facialGoto">
        <div className="goTo1">
          <h1>{props.goto}</h1>
        </div>
        <div className="goTo2">
          <p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="facialCardIcon"
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
      </Link>
      <div className="respFacialServiceContainer">
      <div className="respFacialServiceCardCover">
        <div className="respFacialServiceCardTxtContainer">
          <div className="respFacialServiceCardHead">
            <h1>{props.heading}</h1>
          </div>
          <div className="respFacialServiceCardPara">
            <p>{props.para}</p>
          </div>
          <div className="respFacialServiceCardBut">
            <button onClick={handlePopUp}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FacialServiceCard
