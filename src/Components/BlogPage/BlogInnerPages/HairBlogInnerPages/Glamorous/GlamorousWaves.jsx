import React from "react";
import point from "./../../../../../Images/point.png";

const GlamorousWaves = () => {
  return (
    <div className="pediManicureWhat">
      <h5>4. The Glamorous Hollywood Waves</h5>
      <p>
        For a truly glamorous night out, you can never go wrong with old
        Hollywood waves. This classic, red-carpet-worthy hairstyle is all about
        creating voluminous, shiny waves that frame your face beautifully.
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
           Start by applying a volumizing mousse or spray to damp
            hair, then blow-dry it for extra volume.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 2:
          </span>
          <p>
           Use a large barrel curling iron to create large, uniform
            curls. Curl each section of hair in the same direction to ensure the
            waves fall together.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 3:
          </span>
          <p>
            {" "}
           Once all the curls are in place, let them cool for a few
            minutes. Then, gently brush through them with a paddle brush to
            soften the curls and turn them into smooth waves.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 4:
          </span>
          <p>
            {" "}
            Part your hair to the side for that classic Hollywood
            look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 5:{" "}
          </span>
          <p>
            Finish with a shine spray and a medium-hold hairspray to
            keep the waves intact all night.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          Hollywood waves scream glamour and sophistication, making them the
          perfect choice for formal events or any night where you want to make a
          statement.
        </p>
      </ul>
    </div>
  );
};

export default GlamorousWaves;
