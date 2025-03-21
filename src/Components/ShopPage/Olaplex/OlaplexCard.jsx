import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Olaplex.css";

const OlaplexCard = (props) => {
  return (
    <div className="olaplexCardContainer">
      <div className="olaplexCardImg">
        <img src={props.img} alt="" loading="lazy"/>
      </div>
      <div className="olaplexCardTxt">
        <div className="olaplexCardHead">
          <h2>{props.txt}</h2>
        </div>
        <button>
          <a href="https://scent.zenoti.com/webstoreNew/services">
            Buy
            <FontAwesomeIcon
              icon={faArrowRight}
              className="olaplexWhats"
            ></FontAwesomeIcon>
          </a>
        </button>
      </div>
    </div>
  );
};

export default OlaplexCard;
