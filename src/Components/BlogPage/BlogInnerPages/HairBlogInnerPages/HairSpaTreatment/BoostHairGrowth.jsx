import React from "react";
import point from "./../../../../../Images/point.png";

const BoostHairGrowth = () => {
  return (
    <div className="pediManicureWhat">
      <h5>3. Boosts Hair Growth</h5>
      <p>
        One of the lesser-known yet highly effective Top Benefits of Regular
        Hair Spa Treatments is stimulating hair growth. By improving blood
        circulation in the scalp, hair spa sessions encourage hair follicles to
        produce healthier and stronger hair.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Women:{" "}
          </span>
          <p>
            Women experiencing hair thinning or postpartum hair loss can benefit
            significantly.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Men:{" "}
          </span>
          <p>
            Men dealing with early signs of balding or thinning hair can boost
            follicle health through consistent spa sessions.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BoostHairGrowth;
