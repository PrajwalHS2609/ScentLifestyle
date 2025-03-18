import React from "react";
import checked from "./../../../../Images/checked.png";
import "./LashesInMeadowsWhy.css";
const LashesInMeadowsWhyChoose = () => {
  return (
    <div className="hairSalonInMeadowsWhy">
      <h5>Why Choose SCENT Salon for Eye Lashes in Meadows Whitefield?</h5>
      <p>
        SCENT Salon is renowned for offering premium beauty services that cater
        to your unique style and preferences. When it comes to eye lashes in
        Meadows Whitefield, our salon provides expert-level service in a
        relaxing, luxurious environment. Here’s why SCENT Salon stands out:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Experienced Technicians:{" "}
          </span>
          <p>
            Our certified eyelash technicians are skilled in creating the
            perfect lash look, tailored to suit your facial features.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            High-Quality Products:{" "}
          </span>
          <p>
            We use only the best eyelash materials and adhesives to ensure that
            your lashes are both beautiful and safe.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customization:{" "}
          </span>
          <p>
            From length to curl and volume, SCENT Salon offers fully
            customizable eye lashes in Meadows Whitefield that reflect your
            unique style.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Long-Lasting Results:{" "}
          </span>
          <p>
            Enjoy lashes that last for weeks, allowing you to wake up each
            morning looking effortlessly beautiful.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Affordable Luxury:{" "}
          </span>
          <p>
            Our lash services are competitively priced, making it easy for
            everyone to experience the benefits of professional eye lashes in
            Meadows Whitefield.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default LashesInMeadowsWhyChoose;
