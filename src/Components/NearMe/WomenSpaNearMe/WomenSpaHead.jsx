import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const WomenSpaHead = () => {
  return (
    <div className="nearHeadContainer">
      <h1>
        Women's Spa Near Me: Discover the Ultimate Relaxation Experience at
        SCENT Salon
      </h1>
      <p>
        Finding a rejuvenating retreat is essential for modern women who juggle
        numerous roles and responsibilities. If you're searching for a <Link to={"/women-spa-near-me"}>"women's
        spa near me,"</Link> <Link to={"/"}>SCENT Salon</Link> offers a sanctuary designed to revitalize both
        body and mind. Located conveniently, SCENT Salon is the epitome of
        luxury and tranquility, perfect for those moments when you need to
        unwind and pamper yourself.
      </p>
    </div>
  );
};

export default WomenSpaHead;
