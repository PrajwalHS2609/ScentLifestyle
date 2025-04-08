import React from "react";
import point from "./../../../../../Images/point.png";

const CustomizableHairType = () => {
  return (
    <div className="blogWhat-content">
      <h5>9. Customizable to Your Hair Type</h5>
      <p>
        Another of the Top Benefits of Regular Hair Spa Treatments is that they
        are highly customizable. Whether you have dry, oily, curly, or straight
        hair, there’s a treatment tailored to meet your unique needs.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Treatments for dry hair focus on moisture.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Oily hair treatments balance scalp oils.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CustomizableHairType;
