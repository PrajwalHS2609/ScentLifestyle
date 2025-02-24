import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./SpaServiceCard.css"
const SpaServiceCard = (props) => {
  return (
    <div className="spaCardMain">
    <div className="spaCardWrapper">
        <img className="spaCardImg" src={props.img} alt="" />
      <div className="spaCardCover">
        <div className="spaCardTxtContainer">
          <div className="spaCardHead">
            <h3>{props.heading}</h3>
          </div>
          <div className="spaCardPara">
            <p>{props.para}</p>
          </div>
          <div className="spaCardBut">
          <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
          </div>
        </div>
      </div>
      </div>
      <Link to={props.link}>
      <div className="spaGoto">
        <div className="goTo1">
          <h3>{props.goto}</h3>
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
            <h3>{props.heading}</h3>
          </div>
          <div className="respSpaServiceCardPara">
            <p>{props.para}</p>
          </div>
          <div className="respSpaServiceCardBut">
          <a href="https://scent.zenoti.com/webstoreNew/services">
                <button>BOOK AN APPOINTMENT</button>
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SpaServiceCard
