import React from "react";
import point from "./../../../../../Images/point.png";

const AddsShine = () => {
  return (
    <div className="blogWhat-content">
      <h5>6. Adds Shine and Volume</h5>
      <p>
        Limp, lifeless hair is often a sign of neglected care. One of the Top
        Benefits of Regular Hair Spa Treatments is that it enhances your hair’s
        natural shine and volume. Specialized treatments add bounce and gloss,
        making your hair look healthier and more vibrant.
      </p>
      <ul>
        <h4> Top Benefits of Regular Hair Spa Treatments:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Shine-enhancing masks are used to polish dull strands.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Volumizing treatments help thin hair
            look fuller.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AddsShine;
