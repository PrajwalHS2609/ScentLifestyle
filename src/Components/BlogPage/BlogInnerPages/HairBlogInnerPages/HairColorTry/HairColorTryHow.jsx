import React from "react";
import point from "./../../../../../Images/point.png";

const HairColorTryHow = () => {
  return (
    <div className="pediManicureWhat">
      <h5>How to Choose from the 25+ Hair Colors Every Woman Should Try</h5>
      <p>
        With so many options, picking the right color can feel overwhelming.
        Here’s a quick guide to help you make the best choice from these 25+
        Hair Colors Every Woman Should Try:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            For a Low-Maintenance Look:{" "}
          </span>
          <p>
            Try balayage or ombre options, which grow out naturally and require
            fewer touch-ups.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            If You Want to Go Bold:{" "}
          </span>
          <p>
            Bright colors like emerald green, navy blue, or pastel lavender are
            great for making a statement.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Classic Elegance:{" "}
          </span>
          <p>
            Opt for timeless choices like chocolate brown, golden blonde, or
            chestnut if you want something subtle and versatile.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairColorTryHow;
