import React from "react";
import "../NearMe.css"
import { Link } from "react-router-dom";
const NailNearHead = () => {
  return (
    <div className="nearHeadContainer">
      <h2>
        Nail Salon Near Me: Discover the Best Nail Services at SCENT Salon
      </h2>
      <p>
        When you search for a <Link to={"/nails-salon-near-me"}>"nail salon near me,"</Link> you want a place that offers
        exceptional services, a welcoming atmosphere, and skilled technicians
        who can turn your nail dreams into reality. At SCENT Salon, we pride
        ourselves on being the premier destination for all your nail care needs
        in the area. Whether you're looking for a quick manicure, a luxurious
        pedicure, or intricate nail art, <Link to={"/nails-salon-near-me"}>SCENT Salon has you covered</Link>. Here’s why
        SCENT Salon should be your go-to choice when looking for a <Link to={"/nails-salon"}>nail salon</Link>
        near me.
      </p>
    </div>
  );
};

export default NailNearHead;
