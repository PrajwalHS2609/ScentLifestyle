import React from "react";
import point from "./../../../Images/point.png";

const HairScalpTreatmentWhat = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>
        What Makes SCENT the Best Choice for Hair Scalp Treatment in Bangalore?
      </h5>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Affordable Packages:{" "}
          </span>
          <p>We offer competitive pricing without compromising on quality.</p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Client-Centric Approach:{" "}
          </span>
          <p>
            Your satisfaction is our priority. We provide post-treatment advice
            and follow-ups.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Positive Reviews:{" "}
          </span>
          <p>
            Our satisfied clients vouch for our expertise and exceptional
            service.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairScalpTreatmentWhat;
