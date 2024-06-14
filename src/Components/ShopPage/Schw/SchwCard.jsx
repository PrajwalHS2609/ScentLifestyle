import React from 'react'
import "./Schw.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const SchwCard = (props) => {
  return (
      <div className="schwCardContainer">
        <div className="schwCardImg">
          <img src={props.img} alt="" />
        </div>
        <div className="schwCardTxt">
          <div className="schwCardHead">
            <h2>{props.txt}</h2>
          </div>
          <button>
            <a href="https://api.whatsapp.com/send?phone=919742232700">
              Buy
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="schwWhats"
              ></FontAwesomeIcon>
            </a>
          </button>
        </div>
      </div>
  )
}

export default SchwCard
