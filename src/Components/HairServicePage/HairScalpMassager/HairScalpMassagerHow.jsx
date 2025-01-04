import React from "react";
import dot from "./../../../Images/dot.png";

const HairScalpMassagerHow = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>How to Prepare for Your Scalp Massage </h5>
      <p>
        To make the most of your scalp massage experience, consider the
        following tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Arrive Early:{" "}
          </span>
          <p>
            Arrive a few minutes before your appointment to settle in and enjoy
            the calming ambiance.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Communicate Your Preferences:{" "}
          </span>
          <p>
            Let your therapist know if you have any specific areas of concern,
            pressure preferences, or allergies.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Relax and Unwind:{" "}
          </span>
          <p>
            Allow yourself to fully immerse in the experience by leaving behind
            distractions and embracing the moment.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Post-Massage Care:{" "}
          </span>
          <p>
            If oils or treatments are used, follow any post-care instructions
            provided by your therapist to maximize the benefits.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairScalpMassagerHow;
