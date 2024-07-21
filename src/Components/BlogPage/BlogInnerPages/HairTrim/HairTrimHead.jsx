import React from "react";
import "./HairTrim.css";
const HairTrimHead = () => {
  return (
    <div className="hairTrimHead">
      <h1>Does Trimming Hair Make It Grow Faster?</h1>
      <p>
        Trimming your hair regularly is key to maintaining long, healthy locks.
        The frequency of trims depends on your hair type and style. Cutting
        split ends and damaged hair helps your hair appear thicker and prevents
        damage from traveling up the hair shaft.
      </p>
      <div className="hairTrimHeadContent">
        <p>
          <span> Textured Hair Trimming Frequency :</span> For textured hair,
          opt for a trim every 2-3 months to keep the ends soft and healthy,
          promoting voluminous growth.
        </p>
      </div>
      <div className="hairTrimHeadContent">
        <h3>Non-Textured Hair Trimming Frequency:</h3>
        <ul>
          <li>
            <span>Short Styles (Crop or Pixie):</span> Trim every 3-4 weeks to
            maintain a sleek look.
          </li>
          <li>
            {" "}
            <span>Bobs:</span> Trim every few months to maintain a clean
            appearance.
          </li>
          <li>
            <span>Longer Hair:</span> Trim every 4 months to keep it healthy and
            prevent split ends.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HairTrimHead;
