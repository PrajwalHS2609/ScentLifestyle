import React from "react";
import point from "./../../../../../Images/point.png";

const CurlyHairAssess = () => {
  return (
    <div className="blogWhat-content">
      <h5>2. Assess Your Face Shape</h5>
      <p>
        Just like with any hairstyle, curly hair can look vastly different
        depending on your face shape. Here’s a quick breakdown of how curls
        complement various face shapes:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Oval:{" "}
          </span>
          <p>
            Lucky you! Oval faces suit most hairstyles, and curls can bring out
            your features without overwhelming them.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Round:{" "}
          </span>
          <p>
            Curls can add angles to a round face, especially with layered styles
            that avoid too much volume around the cheeks.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Square:
          </span>
          <p>
             Softer curls or waves soften the strong angles of a square
            face, lending a delicate and balanced look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Heart:
          </span>
          <p>
            {" "}
             Curls that add volume near the chin can help balance a
            heart-shaped face, especially styles that don’t emphasize the crown
            area too much.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Diamond:{" "}
          </span>
          <p>
             Layers and bouncy curls can add width to the jawline,
            balancing out the narrow chin and forehead typical of a
            diamond-shaped face.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          Face shape isn’t a strict rule, but it provides a foundation for
          knowing how curly hair will likely frame and complement your features.
        </p>
      </ul>
    </div>
  );
};

export default CurlyHairAssess;
