import React from "react";
import checked from "./../../../Images/checked.png";

const PedicureNearMeWhy = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why SCENT is the Best Answer to pedicure near me</h5>
      <p>
        In a city filled with options, SCENT stands out as the ultimate choice
        for pedicure near me, because of our commitment to excellence. Here’s
        what sets us apart:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Ambiance{" "}
          </span>
          <p>
            Our salons provide a serene and luxurious environment that makes
            every visit a mini-retreat.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Top-Notch Products{" "}
          </span>
          <p>
            We use only premium-quality products that nourish and protect your
            skin and nails.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Attention to Detail{" "}
          </span>
          <p>
            Every step of our pedicure process is executed with precision,
            ensuring a flawless result every time.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Affordable
          </span>
          <p>
            Luxury Quality doesn’t have to come with a hefty price tag. At
            SCENT, we offer competitive pricing without compromising on service
            excellence.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default PedicureNearMeWhy;
