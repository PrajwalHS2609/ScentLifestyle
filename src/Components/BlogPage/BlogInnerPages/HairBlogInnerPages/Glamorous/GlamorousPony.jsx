import React from "react";
import point from "./../../../../../Images/point.png";

const GlamorousPony = () => {
  return (
    <div className="pediManicureWhat">
      <h5>1. The Sleek Low Ponytail</h5>
      <p>
        A low ponytail might sound basic, but when done right, it can look
        incredibly elegant and polished. This sleek style is perfect for
        showcasing your makeup and outfit, and it works for virtually every hair
        type.
      </p>
      <ul>
        <p>
          <span>How to Achieve the Look:</span>{" "}
        </p>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 1:{" "}
          </span>
          <p>
            Start by straightening your hair to create a smooth, sleek base. Use
            a heat protectant spray before styling to prevent damage.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 2:
          </span>
          <p>
            Part your hair down the middle or to the side, depending on your
            preference.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 3:
          </span>
          <p>
            {" "}
            Apply a smoothing serum or light hairspray to control any flyaways.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 4:
          </span>
          <p>
            {" "}
            Gather your hair at the nape of your neck and secure it with a hair
            tie. Make sure the ponytail is tight and smooth.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 5:{" "}
          </span>
          <p>
            For an extra polished look, take a small section of hair from the
            ponytail and wrap it around the hair tie, securing it with a bobby
            pin.{" "}
          </p>
        </li>
      </ul>
      <ul>
        <p>
          This sleek ponytail is perfect for a minimalist, sophisticated look.
          Pair it with statement earrings or a bold lip to complete your
          ensemble.
        </p>
      </ul>
    </div>
  );
};

export default GlamorousPony;
