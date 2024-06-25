import React from "react";
import "./NailSalonTestimonial.css";
import quote from "./../../../Images/quotes.png";

const NailSalonTestimonialCard = (props) => {
  return (
    <div className="nailTestimonialCardContainer">
      <div className="nailTestimonialCardContent">
        <div className="nailTestimonialCardItem1">
          <img src={quote} alt="" />
        </div>
        <div className="nailTestimonialCardItem2">
          <p>
            <span>" </span>
            {props.para} <span>"</span>
          </p>
          <h4>
            <span>{props.name}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NailSalonTestimonialCard;
