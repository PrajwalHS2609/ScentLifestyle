import React from "react";
import point from "./../../../../../Images/point.png";

const CurlyHairProsCons = () => {
  return (
    <div className="pediManicureWhat">
      <h5>8. Pros and Consf Curly Hair</h5>
      <p>
        Here’s a quick rundownf the benefits and challengesf curly hair to help
        make your decision easier.
      </p>
      <ul>
        <p>
          <span>Pros:</span>{" "}
        </p>
        <li>
          <span>
            <img src={point} alt="point" />
            Unique and eye-catching look
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Adds volume and dimension
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Great for expressing a fun, lively
            personality{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Works well with a varietyf styles
            and accessories
          </span>
        </li>
      </ul>
      <ul>
        <p>
          <span>Cons:</span>{" "}
        </p>
        <li>
          <span>
            <img src={point} alt="point" /> Can be time-consuming to maintain{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Prone to frizz, especially in humid
            weather{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> May require frequent moisturizing
            and product use
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Can be unpredictable and may not
            hold shape without styling products
          </span>
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

export default CurlyHairProsCons;
