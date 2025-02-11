import React from "react";
import point from "./../../../../../Images/point.png";

const TrendyHairHighlightMocha = () => {
  return (
    <div className="pediManicureWhat">
      <h5>3. Mocha & Honey Blonde Highlights 🍯</h5>
      <p>
        For brunettes who want to lighten their locks without going full blonde,
        a mix of mocha and honey blonde highlights creates the perfect balance.
        This blend enhances the natural depth of your hair while adding a soft,
        glowing effect.
      </p>
      <ul>
        <h4>Why It’s Trending:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Subtle yet glamorous{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Perfect for medium and dark hair
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Adds a youthful glow
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TrendyHairHighlightMocha;
