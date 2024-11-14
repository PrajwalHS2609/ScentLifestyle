import React from "react";
import dot from "./../../../Images/dot.png";

const HairColouredSpaMaintain = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Why Maintenance is Essential for Color-Treated Hair</h5>
      <p>
        If you’ve recently colored your hair, regular maintenance is essential
        to keep it looking its best. Color-treated hair requires extra care to
        maintain its vibrancy and health, and our{" "}
        <a href="https://scentlifestyle.com/hair-salon">
          Hair Spa for Colored Hair in Bangalore
        </a>{" "}
        provides the targeted support that your colored hair needs.
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Protecting Color:{" "}
          </span>
          <p>
            Our hair spa prevents fading by using advanced color-lock
            treatments.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Hydration:{" "}
          </span>
          <p>
            Moisture loss is common in colored hair, and our spa sessions
            replenish hydration to prevent dryness.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Nourishment:{" "}
          </span>
          <p>
            Infusing hair with essential nutrients keeps it healthy and
            minimizes damage from coloring.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairColouredSpaMaintain;
