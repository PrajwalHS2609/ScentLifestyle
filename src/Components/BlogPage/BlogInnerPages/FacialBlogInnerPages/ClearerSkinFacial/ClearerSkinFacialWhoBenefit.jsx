import React from "react";
import checked from "./../../../../../Images/checked.png";

const ClearerSkinFacialWhoBenefit = () => {
  return (
    <div className="blogWhat-content">
      <h5>Who Can Benefit from Acne Cure Facials?</h5>
      <p>Acne Cure Facials are suitable for anyone dealing with:</p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" /> Persistent acne or occasional
            breakouts{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Oily skin prone to clogged pores{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Post-acne scars and
            discoloration{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Enlarged pores or rough skin
            texture{" "}
          </span>
        </li>
      </ul>
      <p>
        These facials can be customized for teenagers, adults, and even those
        with sensitive skin.
      </p>
    </div>
  );
};

export default ClearerSkinFacialWhoBenefit;
