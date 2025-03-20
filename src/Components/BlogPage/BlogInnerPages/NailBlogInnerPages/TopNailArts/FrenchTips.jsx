import React from "react";
import point from "./../../../../../Images/point.png";

const FrenchTips = () => {
  return (
    <div className="pediManicureWhat">
      <h5>5. French Tips Reinvented</h5>
      <p>
        Classic French tips are being reimagined in bold and creative ways.
        Instead of the traditional white tip, 2024 brings colorful, chrome, or
        abstract versions of the French manicure. Some popular variations
        include:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            V-shaped French tips{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Neon or pastel tip designs{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Double-lined French tips{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Micro-French with ultra-thin edges{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FrenchTips;
