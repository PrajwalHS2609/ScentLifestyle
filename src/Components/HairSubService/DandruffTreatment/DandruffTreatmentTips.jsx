import React from "react";
import dot from "./../../../Images/dot.png";

const DandruffTreatmentTips = () => {
  return (
    <div className="hairSubServiceWhy">
      <h5>Tips to Prevent Dandruff</h5>
      <p>
        While our dandruff treatments in Bangalore are highly effective,
        maintaining a healthy scalp requires consistent care. Here are some tips
        to prevent dandruff:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Maintain Scalp Hygiene:{" "}
          </span>
          <p>Wash your hair regularly with a gentle, anti-dandruff shampoo.</p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Avoid Overuse of Products:{" "}
          </span>
          <p>Limit the use of styling products that can cause build-up.</p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Manage Stress:{" "}
          </span>
          <p>
            Practice relaxation techniques like yoga or meditation to reduce
            stress levels.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Stay Hydrated:{" "}
          </span>
          <p>Drink plenty of water to keep your scalp and body hydrated.</p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Balanced Diet:{" "}
          </span>
          <p>
            Include foods rich in zinc, omega-3 fatty acids, and biotin for a
            healthy scalp.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DandruffTreatmentTips;
