import React from "react";
import point from "./../../../Images/point.png";

const GelNailExtensionNearMeHow = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>How to Care for Your Gel Nails Extensions</h5>
      <p>
        To maintain the longevity and beauty of your gel nail extensions, follow
        these simple tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Avoid Harsh Chemicals{" "}
          </span>
          <p>
            Wear gloves while cleaning or handling chemicals to prevent damage
            to your extensions.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Moisturize Regularly{" "}
          </span>
          <p>Apply cuticle oil daily to keep your nails and skin hydrated.</p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Schedule Maintenance
          </span>
          <p>
            Avoid using your nails as tools to open packages or scrape surfaces.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Schedule Maintenance
          </span>
          <p>
            Visit SCENT every two to three weeks for a touch-up or refill to
            keep your extensions looking fresh.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Follow Technician Advice
          </span>
          <p>
            Listen to your nail technician’s recommendations for the best care
            practices.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default GelNailExtensionNearMeHow;
