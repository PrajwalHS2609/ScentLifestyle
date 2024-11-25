import React from "react";
import checked from "./../../../Images/checked.png";

const PedicureNearMeWhyChoose = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why Choose SCENT for Your Pedicure?</h5>
      <p>
        Finding a reliable and professional pedicure near me is essential for
        maintaining foot hygiene, boosting confidence, and enjoying some
        much-needed relaxation. At SCENT, we offer a range of services tailored
        to your specific needs:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Professional Expertise:{" "}
          </span>
          <p>
            Our trained therapists bring years of experience in delivering
            high-quality pedicures that are both therapeutic and aesthetic.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Hygiene Standards:{" "}
          </span>
          <p>
            Your health and safety are our top priorities. We adhere to the
            strictest hygiene protocols, ensuring a clean and sanitized
            environment.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Personalized Care:{" "}
          </span>
          <p>
            From basic nail care to luxurious spa treatments, we customize every
            pedicure to meet your preferences.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default PedicureNearMeWhyChoose;
