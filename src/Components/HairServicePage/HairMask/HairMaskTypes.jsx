import React from "react";
import point from "./../../../Images/point.png";

const HairMaskTypes = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Types of Hair Masks We Offer</h5>
      <p>
        SCENT offers a variety of hair masks tailored to address specific hair
        concerns. Here’s a look at some of our most popular treatments:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hydrating Hair Masks{" "}
          </span>
          <p>
            Ideal for dry and damaged hair, our hydrating masks are enriched
            with ingredients like argan oil, aloe vera, and shea butter. They
            provide intense moisture and restore your hair’s natural softness.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Repair and Strengthening Masks{" "}
          </span>
          <p>
            For hair weakened by chemical treatments or heat styling, our repair
            masks are infused with proteins and keratin to rebuild strength and
            resilience.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Anti-Frizz Hair Masks{" "}
          </span>
          <p>
            Combat frizz and unruly hair with our smoothing masks that contain
            natural oils and serums to tame flyaways and provide a sleek finish.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Scalp Detox Masks{" "}
          </span>
          <p>
            A healthy scalp is the foundation of healthy hair. Our detox masks
            cleanse and purify your scalp, removing buildup and promoting
            optimal hair growth.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Color-Protection Masks{" "}
          </span>
          <p>
            Designed for colored or highlighted hair, these masks prevent
            fading, enhance vibrancy, and keep your color-treated hair looking
            fresh and radiant.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Growth Masks{" "}
          </span>
          <p>
            Boost your hair’s growth with nutrient-rich masks that nourish the
            scalp and stimulate hair follicles.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairMaskTypes;
