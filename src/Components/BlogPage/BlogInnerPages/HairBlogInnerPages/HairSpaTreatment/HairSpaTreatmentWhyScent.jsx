import React from "react";
import checked from "./../../../../../Images/checked.png";

const HairSpaTreatmentWhyScent = () => {
  return (
    <div className="blogWhat-content">
      <h5>Why SCENT is Your Go-To Destination for Hair Spa Treatments</h5>
      <p>
        At SCENT, we understand the importance of tailored care. Our
        professional stylists and state-of-the-art products ensure that you
        enjoy the Top Benefits of Regular Hair Spa Treatments.
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" /> We offer specialized services for
            both Hair Spa for Women and Hair Spa for Men.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Our treatments include premium
            products designed to nourish and revitalize your hair.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> The relaxing environment at SCENT
            makes every session a rejuvenating experience.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HairSpaTreatmentWhyScent;
