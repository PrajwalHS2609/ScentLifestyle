import React from "react";
import dot from "./../../../../../Images/dot.png";

const HairBleachSigns = () => {
  return (
    <div className="blogWhat-content">
      <h5>Signs Your Hair Is Ready for Bleaching Again</h5>
      <p>
        Before scheduling your next bleaching session, check for these signs
        that your hair is healthy enough to undergo the process:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Elasticity Test:{" "}
          </span>
          <p>
            Gently stretch a strand of hair. If it stretches and returns to its
            original shape without breaking, it’s in good condition.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            No Excessive Breakage:{" "}
          </span>
          <p>
            If your hair isn’t snapping or shedding excessively, it may be ready
            for bleaching.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Moisture Levels:{" "}
          </span>
          <p>
            Well-hydrated hair feels soft and doesn’t have a straw-like texture.
          </p>
        </li>
      </ul>
      <p>
        If your hair fails these tests, focus on repairing it before applying
        more bleach.
      </p>
    </div>
  );
};

export default HairBleachSigns;
