import React from "react";
import point from "./../../../../../Images/point.png";

const BestEyelashExtensionTips = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Eyelash Extension Care Tips for Brides</h5>
      <p>
        To ensure your Eyelash Extensions for Brides last beautifully through
        your special event and beyond, follow these essential care tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Get a Trial Session{" "}
          </span>
          <p>
            Have your eyelash extensions applied a few weeks before the wedding
            to ensure you love the look and feel.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Avoid Water & Steam for 24 Hours
          </span>
          <p>
            Let the adhesive fully cure before exposing your lashes to moisture.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Use Oil-Free Products
          </span>
          <p>
            Oil-based removers and skincare products can weaken the lash glue.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Regular Touch-Ups
          </span>
          <p>
            Schedule a fill session before your big day to ensure a full and
            fresh lash look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Be Gentle{" "}
          </span>
          <p>Avoid rubbing or pulling at your lashes to maintain longevity.</p>
        </li>
      </ul>
    </div>
  );
};

export default BestEyelashExtensionTips;
