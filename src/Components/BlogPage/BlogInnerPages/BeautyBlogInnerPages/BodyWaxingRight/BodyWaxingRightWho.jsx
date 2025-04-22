import React from "react";
import point from "./../../../../../Images/point.png";

const BodyWaxingRightWho = () => {
  return (
    <div className="blogWhat-content">
      <h5>Who Should Avoid Body Waxing?</h5>
      <p>Waxing is not suitable for everyone. You should avoid waxing if:</p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            You have sunburned or irritated skin
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            You’re on medications like Retin-A, Accutane, or certain antibiotics
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="checked" />
            You have diabetes or poor circulation
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="checked" />
            You have varicose veins in the waxing area
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="checked" />
            You’re prone to allergic reactions from waxing products
          </span>
        </li>{" "}
      </ul>
      <p>
        If you fall into any of these categories, consult a medical professional
        before scheduling a waxing appointment.
      </p>
    </div>
  );
};

export default BodyWaxingRightWho;
