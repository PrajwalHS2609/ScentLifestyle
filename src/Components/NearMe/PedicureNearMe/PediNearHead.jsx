import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const PediNearHead = () => {
  return (
    <div className="nearHeadContainer">
      <h2>Pedicure Near Me: Experience the Best at SCENT Salon</h2>
      <p>
        When you search for a <Link to={"/pedicure-near-me"}>"pedicure near me,"</Link> you're not just looking for a
        basic foot care service; you're seeking a luxurious, relaxing experience
        that rejuvenates your feet and leaves you feeling pampered. At SCENT
        Salon, we understand the importance of a <Link to={"/nails-salon"}>high-quality pedicure</Link> and
        strive to provide an unparalleled service that exceeds your
        expectations. Our experienced technicians, state-of-the-art facilities,
        and commitment to hygiene make us the top choice for anyone searching
        for a <Link to={"/pedicure-near-me"}>"pedicure near me,"</Link>. Here’s why <Link to={"/"}>SCENT Salon</Link> should be your go-to
        destination for the ultimate pedicure experience.
      </p>
    </div>
  );
};

export default PediNearHead;
