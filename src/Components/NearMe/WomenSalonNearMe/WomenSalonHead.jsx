import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const WomenSalonHead = () => {
  return (
    <div className="nearHeadContainer">
      <h1>
        Women’s Salon Near Me: Experience Unmatched Beauty Services at SCENT
        Salon
      </h1>
      <p>
        When you search for a <Link to={"/women-salon-near-me"}> "women's salon near me,"</Link> you are looking for more
        than just a place to get your hair cut or nails done; you're seeking a
        haven where <Link to={"/hair-salon"}> beauty, comfort, and expertise</Link> come together. <Link to={"/"}>SCENT Salon</Link> is
        your ultimate destination, offering a wide array of top-tier services
        designed to enhance your natural beauty and provide a luxurious escape
        from the daily grind. Here’s why SCENT Salon is the best choice when you
        search for a <Link to={"/women-salon-near-me"}> "women's salon near me,"</Link>.
      </p>
    </div>
  );
};

export default WomenSalonHead;
