import React from "react";
import point from "./../../../../Images/point.png";

const HairBotoxInSahakarNagarVerses = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Hair Botox vs. Keratin Treatment: Which One is Better?</h5>
      <p>
        Many people confuse Hair Botox with keratin treatments, but they are
        quite different:{" "}
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Hair Botox is free of harmful
            chemicals like formaldehyde, whereas keratin treatments often
            contain them.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Hair Botox deeply conditions and
            repairs, while keratin primarily focuses on straightening.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Hair Botox is suitable for all hair
            types, including chemically treated hair, while keratin can be too
            harsh for some.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Hair Botox does not alter your
            natural hair texture but enhances it, whereas keratin straightens
            and flattens curls.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HairBotoxInSahakarNagarVerses;
