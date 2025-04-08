import React from "react";
import point from "./../../../../../Images/point.png";

const PerfectPreDateRadiant = () => {
  return (
    <div className="blogWhat-content">
      <h5>Get That Radiant Glow with Body Care</h5>
      <p>
        Smooth and glowing skin will make you feel your best and enhance your
        overall appearance.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Exfoliate & Moisturize:          </span>
          <p>
             Use a body scrub in the shower to slough
            off dead skin, then follow up with a rich body lotion or oil to keep
            your skin soft and supple.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Shaving or Waxing:{" "}
          </span>
          <p>
            If needed, shave or wax at least a few hours before your date to
            avoid irritation. Follow up with an aloe-based gel to soothe your
            skin.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Fragrance Layering:{" "}
          </span>
          <p>
            Apply a scented body lotion or oil before spritzing your favorite
            perfume to make the fragrance last longer.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PerfectPreDateRadiant;
