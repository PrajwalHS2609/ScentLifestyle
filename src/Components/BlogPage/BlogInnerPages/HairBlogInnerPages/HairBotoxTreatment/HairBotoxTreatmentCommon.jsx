import React from "react";
import dot from "./../../../../../Images/dot.png";

const HairBotoxTreatmentCommon = () => {
  return (
    <div className="blogWhat-content">
      <h5>Common Hair Issues Addressed by Hair Botox</h5>
      <p>
        Hair Botox is suitable for various hair types and concerns. It can help
        improve:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Split ends{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Damaged or brittle hair{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Frizz and dryness{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" /> Lack of volume or shine{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Unmanageable or coarse hair{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HairBotoxTreatmentCommon;
