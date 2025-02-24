import React from "react";
import "./Schw.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SchwCard = (props) => {
  return (
    <div className="schwCardContainer">
      <div className="schwCardImg">
        <img src={props.img} alt="" loading="lazy" />
      </div>
      <div className="schwCardTxt">
        <div className="schwCardHead">
          <h2>{props.txt}</h2>
        </div>
        <button>
          <a href="https://scent.zenoti.com/webstoreNew/services">
            Buy
            <FontAwesomeIcon
              icon={faArrowRight}
              className="schwWhats"
            ></FontAwesomeIcon>
          </a>
        </button>
      </div>
    </div>
  );
};

export default SchwCard;
