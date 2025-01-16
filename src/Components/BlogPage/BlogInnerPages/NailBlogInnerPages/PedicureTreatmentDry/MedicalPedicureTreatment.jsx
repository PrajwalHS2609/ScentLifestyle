import React from "react";
import checked from "./../../../../../Images/checked.png";

const MedicalPedicureTreatment = () => {
  return (
    <div className="pediManicureHead">
      <h2>3. Medical Pedicure for Severely Cracked Heels</h2>
      <p>
        A medical pedicure is a specialized treatment designed for individuals
        with severely cracked heels or foot conditions. Performed by trained
        professionals, this treatment not only addresses aesthetic concerns but
        also provides therapeutic benefits.
      </p>
      <ul>
        <h4>Steps in a Medical Pedicure:</h4>
        <li>
          {" "}
          <span> 1. Assessment:</span>
          <p>
            The practitioner assesses the condition of your feet and identifies
            problem areas.
          </p>
        </li>
        <li>
          <span>2. Deep Cleaning:</span>
          <p>
            Advanced tools are used to clean and exfoliate the feet thoroughly.
          </p>
        </li>
        <li>
          <span>3. Treatment of Cracks:</span>
          <p>
            Special medicated creams or balms are applied to heal deep cracks.{" "}
          </p>
        </li>
        <li>
          <span> 4. Nail Care:</span>
          <p>The nails are trimmed and treated to prevent fungal infections.</p>
        </li>
        <li>
          <span>5. Follow-Up Advice:</span>
          <p> Guidance on at-home care and preventive measures is provided.</p>
        </li>
      </ul>
      <ul>
        <h4>Advantages of a Medical Pedicure:</h4>

        <li>
          <span>
            <img src={checked} alt="checked" /> Ideal for individuals with
            chronic foot issues.
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Ensures professional and
            hygienic care.
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Promotes long-term foot health
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MedicalPedicureTreatment;
