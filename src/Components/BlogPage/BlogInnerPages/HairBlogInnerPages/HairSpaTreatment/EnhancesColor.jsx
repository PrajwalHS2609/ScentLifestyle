import React from "react";
import point from "./../../../../../Images/point.png";

const EnhancesColor = () => {
  return (
    <div className="pediManicureWhat">
      <h5>8. Enhances Color Longevity</h5>
      <p>
        For individuals with dyed or highlighted hair, maintaining color
        vibrancy is often a challenge. Regular Hair Spa Treatments include
        products specifically formulated for color-treated hair.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Protects against fading.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Repairs damage caused by harsh dyes.{" "}
          </span>
        </li>
      </ul>
      <p>
        This is particularly important for Hair Spa for Women, as they often
        experiment with multiple hair colors, but it also benefits men with
        subtle highlights or colored strands.
      </p>
    </div>
  );
};

export default EnhancesColor;
