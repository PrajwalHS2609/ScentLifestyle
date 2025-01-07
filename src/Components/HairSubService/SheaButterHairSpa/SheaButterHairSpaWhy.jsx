import React from "react";
import check from "./../../../Images/checked.png";

const SheaButterHairSpaWhy = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>
        Why SCENT is the Best Choice for Shea Butter Hair Spa in Bangalore
      </h5>
      <p>
        Choosing the right salon for your hair spa experience is essential.
        Here’s why SCENT is the top choice for a Shea Butter Hair Spa in
        Bangalore:
      </p>
      <ul>
        <li>
          <span>
            <img src={check} alt="check" />
            Expert Stylists:{" "}
          </span>
          <p>
            Our team of highly trained professionals ensures a personalized and
            effective treatment.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Premium Products:{" "}
          </span>
          <p>
            We use only the finest quality shea butter and hair care products
            for optimal results.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Relaxing Ambience:{" "}
          </span>
          <p>
            Our salon offers a serene and luxurious environment to enhance your
            spa experience.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Affordable Luxury:{" "}
          </span>
          <p>Enjoy top-notch treatments at competitive prices.</p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Positive Client Feedback:{" "}
          </span>
          <p>
            Our clients rave about the transformative effects of our hair spa
            treatments.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default SheaButterHairSpaWhy;
