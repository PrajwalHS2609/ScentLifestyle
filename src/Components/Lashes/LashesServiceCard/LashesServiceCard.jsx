import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./LashesServiceCard.css"
const LashesServiceCard = (props) => {
  return (
    <div className="lashesCardMain">
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
            <button>BOOK AN APPOINTMENT</button>
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
            <button>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LashesServiceCard
