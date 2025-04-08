import React from "react";
import point from "./../../../../../Images/point.png";

const GlamorousBun = () => {
  return (
    <div className="blogWhat-content">
      <h5>2. The Messy Bun with a Twist</h5>
      <p>
        Messy buns are the go-to hairstyle for when you're in a rush, but adding
        a twist makes it feel more intentional and glamorous. This hairstyle is
        great if you’re looking for something quick, chic, and just a bit
        undone.
      </p>
      <ul>
       
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 1:{" "}
          </span>
          <p>
            Begin by loosely curling your hair to add some texture. If you're
            short on time, skip this step and embrace your natural texture.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 2:
          </span>
          <p>
            Gather your hair into a high ponytail and secure it with a hair tie.
            Leave out a few face-framing strands for that effortlessly messy
            vibe.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 3:
          </span>
          <p>
            {" "}
            Twist the ponytail around the base to form a bun. Secure it with
            bobby pins, making sure to leave it a little loose for that relaxed,
            messy effect.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 4:
          </span>
          <p>
            {" "}
            Gently pull at some sections of the bun to give it more volume.
            Spritz with a texturizing spray for added hold and body.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 5:{" "}
          </span>
          <p>
            Finish by curling the face-framing strands for a soft, romantic
            touch.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          The messy bun with a twist is a great option for casual chic vibes,
          perfect for a more laid-back night out or a dinner party with friends.
        </p>
      </ul>
    </div>
  );
};

export default GlamorousBun;
