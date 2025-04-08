import React from "react";
import point from "./../../../../../Images/point.png";

const RepairHairDamage = () => {
  return (
    <div className="blogWhat-content">
      <h5>2. Repairs Hair Damage</h5>
      <p>
        Damaged hair is a common issue caused by bleaching, coloring, and
        frequent use of straighteners or curling irons. Regular Hair Spa
        Treatments include masks and serums that are specifically designed to
        repair damaged cuticles.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Restores the natural structure of
            the hair.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Strengthens weak and brittle strands.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Protects against future damage.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RepairHairDamage;
