import React from "react";
import checked from "./../../../../../Images/checked.png";

const HairColorTryChoosing = () => {
  return (
    <div className="blogWhat-content">
      <h5>Choosing the Perfect Hair Color</h5>
      <p>
        Choosing a hair color involves a mix of personal style, skin tone
        matching, and considering maintenance. Here's how you can confidently
        select one (or more!) from these 25+ Hair Colors Every Woman Should Try:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Understand Your Undertones: Oval:{" "}
          </span>
          <p>
            Warm skin tones look great with golden and honey shades, while cool
            undertones complement ash tones, platinum, and pastels.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Consider Your Lifestyle:{" "}
          </span>
          <p>
            If you prefer low-maintenance looks, balayage or ombre could be
            ideal. Vibrant colors may require frequent touch-ups, so consider
            your commitment level.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Experiment Gradually:{" "}
          </span>
          <p>
            Not ready for a drastic change? Opt for highlights or balayage
            techniques, which offer a gradual color introduction while still
            making an impact.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairColorTryChoosing;
