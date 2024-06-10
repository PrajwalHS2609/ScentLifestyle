import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const HairTreatmentNearMeHead = () => {
  return (
    <div className="nearHeadContainer">
      <h1>Hair Treatments Near Me: Transform Your Tresses at SCENT Salon</h1>
      <p>
        Finding the perfect <Link to={"/hair-treatments"}> hair treatments</Link> to maintain and enhance the health
        and beauty of your hair is essential. If you're searching for{" "}
        <Link to={"/hair-treatment-near-me"}> "hair treatments near me,"</Link>{" "}
        look no further than <Link to={"/"}>SCENT Salon</Link>. Conveniently
        located and renowned for its exceptional hair care services, SCENT Salon
        offers a variety of <Link to={"/hair-treatments"}> treatments </Link>{" "}
        designed to address a range of hair concerns and elevate your style.
      </p>
    </div>
  );
};

export default HairTreatmentNearMeHead;
