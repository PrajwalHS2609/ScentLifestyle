import React from "react";
import point from "./../../../../../Images/point.png";

const TamesFrizz = () => {
  return (
    <div className="blogWhat-content">
      <h5>5. Tames Frizz and Improves Manageability</h5>
      <p>
        Frizz can make even the best haircut look untamed. Hair spa treatments
        coat the hair strands with nourishing ingredients, smoothing the
        cuticles and reducing frizz.
      </p>
      <ul>
        <h4>Top Benefits of Regular Hair Spa Treatments:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Achieves a salon-finished look without styling tools.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Reduces tangles, making hair easy to
            manage.{" "}
          </span>
        </li>
      </ul>
      <p>
        This benefit is equally beneficial for both{" "}
        <a href="https://scentlifestyle.com/hair-botox-treatment-all-you-need-to-know">
          Hair Spa for Women
        </a>{" "}
        and Hair Spa for Men, especially for individuals with curly or coarse
        hair types.
      </p>
    </div>
  );
};

export default TamesFrizz;
