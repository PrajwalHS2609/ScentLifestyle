import React from "react";
import point from "./../../../Images/point.png";

const PedicureNearMeKeyword = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Keywords That Matter for Your Pedicure</h5>
      <p>
        When searching for pedicure near me you’re likely looking for a
        combination of keywords that align with your specific needs. Here’s how
        SCENT covers them all:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Best Pedicure Services:{" "}
          </span>
          <p>SCENT is renowned for its world-class pedicure treatments.</p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Affordable Pedicure Near Me:{" "}
          </span>
          <p>We offer exceptional value with competitively priced services.</p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Luxury Pedicure:
          </span>
          <p>Indulge in a spa-like experience that redefines luxury.</p>
        </li>{" "}
        5.	Follow Technician Advice
Listen to your nail technician’s recommendations for the best care practices.
    </ul>
      <p>
        By offering a blend of these services, SCENT ensures that your search
        for pedicure near me always leads to us.
      </p>
    </div>
  );
};

export default PedicureNearMeKeyword;
