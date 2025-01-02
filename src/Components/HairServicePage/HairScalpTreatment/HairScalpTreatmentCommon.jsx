import React from "react";
import dot from "./../../../Images/dot.png";

const HairScalpTreatmentCommon = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Common Scalp Issues We Treat </h5>
      <p>
        At SCENT, our comprehensive hair scalp treatment in Bangalore covers a
        wide range of scalp problems, including:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Dandruff:{" "}
          </span>
          <p>Flaky, itchy scalp caused by dryness or fungal infections.</p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Seborrheic Dermatitis:{" "}
          </span>
          <p> Oily scalp with yellowish flakes.</p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Hair Thinning:{" "}
          </span>
          <p> Reduced hair density due to poor scalp health.</p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Psoriasis:{" "}
          </span>
          <p> Red patches and scales on the scalp.</p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Itchy Scalp:{" "}
          </span>
          <p> Caused by irritants, allergies, or infections.</p>
        </li>
      </ul>
    </div>
  );
};

export default HairScalpTreatmentCommon;
