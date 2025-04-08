import React from "react";
import point from "./../../../../../Images/point.png";

const HairBotoxTreatmentMaintain = () => {
  return (
    <div className="blogWhat-content">
      <h5>Maintaining Hair Botox Results</h5>
      <p>
        Proper maintenance can help extend the life of your Hair Botox
        treatment. Here are some tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Use Sulfate-Free Shampoo:{" "}
          </span>
          <p>
            Sulfates can strip hair of moisture, so opt for a sulfate-free
            shampoo to maintain your treatment’s results.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Limit Heat Styling:{" "}
          </span>
          <p>
            Too much heat can weaken your hair over time. When possible, let
            your hair air-dry or use a heat protectant if you must style it.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
           Deep Conditioning:{" "}
          </span>
          <p>
            Regular deep conditioning will help keep your hair hydrated and
            healthy, complementing the effects of your Hair Botox treatment.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            4. Touch-Up Treatments:{" "}
          </span>
          <p>
            Regular touch-ups every 2-4 months can help you maintain the smooth,
            sleek look provided by Hair Botox.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairBotoxTreatmentMaintain;
