import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const HairSpaNearMeHead = () => {
  return (
    <div className="nearHeadContainer">
      <h1>Hair Spa Near Me: Revitalize Your Locks at SCENT Salon </h1>
      <p>
        Maintaining healthy and beautiful hair is a priority for many, and
        finding the perfect <Link to={"/hair-spa"}>hair spa</Link> can make all
        the difference. If you're searching for a
        <Link to={"/hair-spa-near-me"}>"hair spa near me,"</Link> look no
        further than <Link to="/">SCENT Salon</Link>. Conveniently located,
        <Link to="/">SCENT Salon</Link> offers a range of luxurious hair
        treatments designed to nourish, repair, and rejuvenate your hair, making
        it the ultimate destination for all your{" "}
        <Link to={"/hair-spa"}> hair care</Link> needs.
      </p>
    </div>
  );
};

export default HairSpaNearMeHead;
