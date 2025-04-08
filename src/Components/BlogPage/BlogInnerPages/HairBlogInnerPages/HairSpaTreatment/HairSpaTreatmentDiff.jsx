import React from "react";
import point from "./../../../../../Images/point.png";

const HairSpaTreatmentDiff = () => {
  return (
    <div className="blogWhat-content">
      <h5>The difference between Hair Spa for Women and Hair Spa for Men</h5>
      <p>
        While the fundamentals of hair spa treatments remain consistent, there
        are some differences in the approach based on gender-specific needs:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Women:{" "}
          </span>
          <p>
            Women’s hair spa treatments often focus on hydration, frizz control,
            and enhancing hair softness and shine. Women also frequently choose
            treatments that maintain hair color or protect against styling
            damage.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Men:{" "}
          </span>
          <p>
            Men’s hair spa treatments focus more on scalp care, addressing
            dandruff, hair thinning, and enhancing overall health. Products used
            are often lighter to cater to shorter hair.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairSpaTreatmentDiff;
