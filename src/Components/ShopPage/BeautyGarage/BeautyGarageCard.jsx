import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BeautyGarageCard = (props) => {
  return (
    <div className="beautyGarageCardContainer">
      <div className="beautyGarageCardImg">
        <img src={props.img} alt="" loading="lazy"/>
      </div>
      <div className="beautyGarageCardTxt">
        <div className="beautyGarageCardHead">
          <h2>{props.head}</h2>
        </div>
        <div className="beautyGarageCardPrice">
          <pre>
            <FontAwesomeIcon
              icon={faIndianRupee}
              className="rupeeIcon"
            ></FontAwesomeIcon>
            .{props.price}
          </pre>
        </div>
        <button>
        <a href="https://api.whatsapp.com/send?phone=919742232700">
          Buy 
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="beautyWhats"
          ></FontAwesomeIcon>
          </a>
        </button>
        
      </div>
    </div>
  );
};

export default BeautyGarageCard;
