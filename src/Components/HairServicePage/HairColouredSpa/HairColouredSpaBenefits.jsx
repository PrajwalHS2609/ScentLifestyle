import React from "react";
import point from "./../../../Images/point.png";

const HairColouredSpaBenefits = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Benefits of Our Hair Spa for Colored Hair in Bangalore</h5>
      <p>
        Here’s why SCENT’s specialized hair spa is the ultimate choice for
        color-treated hair care:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Long-Lasting Color Retention{" "}
          </span>
          <p>
            Color fading is a common issue for those with treated hair. Our hair
            spa uses high-quality color-lock treatments that help retain
            vibrancy, ensuring your color lasts longer and looks fresh between
            salon visits.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Enhanced Moisture and Hydration{" "}
          </span>
          <p>
            Dyeing can strip your hair of natural moisture, leaving it dry and
            brittle. Our Hair Spa for Colored Hair in Bangalore includes deep
            conditioning treatments that provide intensive hydration, restoring
            softness and making your hair feel luxuriously silky.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Protection from Damage and Breakage{" "}
          </span>
          <p>
            Chemical treatments can weaken hair strands. Our hair spa
            strengthens each strand from root to tip, reducing breakage and
            restoring resilience so your hair feels healthy, strong, and
            well-nourished.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Improved Texture and Shine{" "}
          </span>
          <p>
            After a color treatment, hair can sometimes look dull and feel
            rough. Our spa treatments add a radiant shine, improving texture and
            leaving your hair looking as stunning as it feels.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Enhanced Scalp Health{" "}
          </span>
          <p>
            A healthy scalp is essential for maintaining beautiful hair. Our spa
            treatments not only focus on the hair but also promote scalp health,
            ensuring a strong foundation for vibrant, color-treated hair.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairColouredSpaBenefits;
