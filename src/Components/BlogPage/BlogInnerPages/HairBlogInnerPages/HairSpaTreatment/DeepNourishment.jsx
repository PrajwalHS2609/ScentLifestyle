import React from "react";
import point from "./../../../../../Images/point.png";

const DeepNourishment = () => {
  return (
    <div className="pediManicureWhat">
      <h5>1. Deep Nourishment and Hydration</h5>
      <p>
        One of the{" "}
        <a href="https://scentlifestyle.com/top-benefits-of-regular-hair-spa-treatments">
          Top Benefits of Regular Hair Spa Treatments
        </a>{" "}
        is the deep hydration it provides. Hair often becomes dry due to
        environmental factors or overuse of heat tools. Hair spa therapies
        include treatments that penetrate the hair shafts, locking in moisture
        and restoring softness and shine.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Women:{" "}
          </span>
          <p>
            Women often struggle with dryness due to frequent hair coloring or
            styling. A hair spa revitalizes their strands, making them
            manageable and glossy.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Men:{" "}
          </span>
          <p>
            Men experience dryness due to exposure to the sun and pollution.
            Regular hair spa sessions can replenish their scalp and hair
            moisture levels.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DeepNourishment;
