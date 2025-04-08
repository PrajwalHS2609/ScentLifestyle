import React from "react";
import point from "./../../../../../Images/point.png";

const PerfectPreDateLuxury = () => {
  return (
    <div className="blogWhat-content">
      <h5>A Luxurious Hair Care Routine</h5>
      <p>
        Your hair is your crowning glory, and taking the time to pamper it will
        make all the difference.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Deep Conditioning:{" "}
          </span>
          <p>
            Use a deep conditioning hair mask the night before to ensure soft,
            silky, and frizz-free locks.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Heat Styling Protection:{" "}
          </span>
          <p>
            If you plan to style your hair, apply a heat protectant spray before
            using any hot tools to prevent damage.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hairstyle Selection:{" "}
          </span>
          <p>
            Choose a hairstyle that complements your outfit and face shape. Soft
            curls, a sleek ponytail, or a classic updo are all excellent choices
            for a romantic look.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PerfectPreDateLuxury;
