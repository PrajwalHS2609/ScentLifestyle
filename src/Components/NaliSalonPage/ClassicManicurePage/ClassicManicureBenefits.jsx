import React from "react";
import checked from "./../../../Images/checked.png";

const ClassicManiBenefits = () => {
  return (
    <div className="nailExtensionWhy">
      <h5> The Benefits of a Classic Manicure</h5>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Improved Nail Health:
          </span>
          <p>
            {" "}
            Regular manicures help to keep your nails healthy and strong. The
            process of trimming, shaping, and caring for your cuticles prevents
            nail damage and promotes growth.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" /> Enhanced Appearance:{" "}
          </span>{" "}
          <p>
            {" "}
            A{" "}
            <a href="https://scentlifestyle.com/classic-manicure">
              {" "}
              Classic Manicure
            </a>{" "}
            leaves your nails looking clean, polished, and professionally
            groomed. The application of{" "}
            <a href="https://scentlifestyle.com/ombre-gel-nail-polish">
              high-quality nail polish
            </a>
            adds a touch of elegance and sophistication to your overall
            appearance.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Stress Relief:{" "}
          </span>{" "}
          <p>
            {" "}
            The massage included in our{" "}
            <a href="https://scentlifestyle.com/classic-manicure">
              Classic Manicure service
            </a>{" "}
            provides relaxation and stress relief. This can improve circulation
            in your hands and promote overall well-being.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Prevention of Nail Issues:{" "}
          </span>{" "}
          <p>
            {" "}
            Regular manicures help to identify and prevent common nail issues
            such as hangnails, brittle nails, and infections. Early detection
            allows for prompt treatment, maintaining your nail health.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ClassicManiBenefits;
