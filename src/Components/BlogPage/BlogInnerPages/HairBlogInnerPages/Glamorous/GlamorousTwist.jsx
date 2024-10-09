import React from "react";
import point from "./../../../../../Images/point.png";

const GlamorousTwist = () => {
  return (
    <div className="pediManicureWhat">
      <h5>3. The Half-Up, Half-Down Twist</h5>
      <p>
        The half-up, half-down hairstyle is ideal when you want to show off your
        hair while keeping it out of your face. It’s an effortlessly glamorous
        style that works for all hair lengths and textures.
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
            Start by curling your hair in loose waves. Use a curling wand or
            iron to create soft, beachy waves.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 2:
          </span>
          <p>
            Part your hair down the middle and section off the top half of your
            hair.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 3:
          </span>
          <p>
            {" "}
            Take a small section from either side of your head, twist each
            section back, and secure them together at the back of your head with
            bobby pins or a small hair tie.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 4:
          </span>
          <p>
            {" "}
            Add a jeweled clip or hair accessory to the twist for extra glamour.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 5:{" "}
          </span>
          <p>
            Finish the look with a light-hold hairspray to keep everything in
            place without weighing down the waves.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          This hairstyle gives off a romantic, ethereal vibe and is perfect for
          when you want to look elegant but still casual.
        </p>
      </ul>
    </div>
  );
};

export default GlamorousTwist;
