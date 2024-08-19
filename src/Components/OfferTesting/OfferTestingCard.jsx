import React from "react";
import bannerImg from "./../../Images/offerTesting.png";
import { Link } from "react-router-dom";
const OfferTestingCard = () => {
  return (
    <div className="OfferTestingCard">
      <img src={bannerImg} alt="bannerImg" />
      <div className="OfferTestingCardButton">
        <Link to={"/"}>
          <button>Book Now</button>
        </Link>
      </div>
      <div className="OfferTestingCardContent">
        <h2>Heading1</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          voluptates? Ut animi saepe mollitia sit excepturi. Assumenda maxime,
          officia quis dolorum sunt architecto iusto qui tempora explicabo porro
          perspiciatis sed. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Dolorum dolore natus nulla facere, odit perspiciatis ab velit
          totam, eius sed, possimus eum libero aperiam! Amet nesciunt eaque
          itaque quis eveniet.
        </p>
      </div>
    </div>
  );
};

export default OfferTestingCard;
