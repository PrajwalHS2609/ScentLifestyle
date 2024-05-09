import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BeautyGarageCard = (props) => {
  return (
    <div className="beautyGarageCardContainer">
      <div className="beautyGarageCardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="beautyGarageCardTxt">
        <div className="beautyGarageCardHead">
          <h1>{props.head}</h1>
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
        <a href="https://wa.me/09742232700/?text=urlencodedtext">
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
