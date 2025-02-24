import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee,faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        <a href="https://scent.zenoti.com/webstoreNew/services">
          Buy 
          <FontAwesomeIcon
            icon={faArrowRight}
            className="beautyWhats"
          ></FontAwesomeIcon>
          </a>
        </button>
        
      </div>
    </div>
  );
};

export default BeautyGarageCard;
