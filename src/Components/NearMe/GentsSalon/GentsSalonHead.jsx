import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const GentsSalonHead = () => {
  return (
    <div className="nearHeadContainer">
      <h1>
        Gents Hair Salon Near Me: Experience Premium Grooming at SCENT Salon
      </h1>
      <p>
        Finding a quality hair salon that caters specifically to men can be
        challenging. If you're on the hunt for a <Link to={"/gents-salon-near-me"}>"gents hair salon near me,"</Link>
        look no further than <Link to={"/"}>SCENT Salon</Link>. Conveniently located and renowned for
        its top-notch services, <Link to={"/"}>SCENT Salon</Link> is the ultimate destination for men
        seeking exceptional<Link to={"/hair-salon"}> haircuts, styling, and grooming</Link>.
      </p>
    </div>
  );
};

export default GentsSalonHead;
