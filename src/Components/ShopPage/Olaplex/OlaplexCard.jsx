import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Olaplex.css";

const OlaplexCard = (props) => {
  return (
    <div className='olaplexCardContainer'>
       <div className="olaplexCardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="olaplexCardTxt">
        <div className="olaplexCardHead">
          <h2>{props.txt}</h2>
  </div>
        <button>
        <a href="https://api.whatsapp.com/send?phone=919742232700">
          Buy 
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="olaplexWhats"
          ></FontAwesomeIcon>
          </a>
        </button>
      </div>
    </div>
  )
}

export default OlaplexCard
