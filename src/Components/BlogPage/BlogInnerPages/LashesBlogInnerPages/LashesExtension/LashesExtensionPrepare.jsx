import React from "react";
import point from "./../../../../../Images/point.png";

const LashesExtensionPrepare = () => {
  return (
    <div className="blogWhat-content">
      <h5>Preparing for Your Eyelash Extension Appointment</h5>
      <p>
        To ensure the best results for your special occasion, proper preparation
        is key. Follow these steps before your appointment:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Do Your Research:{" "}
          </span>
          <p>
            Choose a reputable salon with certified lash technicians. Check
            reviews and portfolios to ensure quality and safety.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Clean Your Lashes:{" "}
          </span>
          <p>
            Arrive with clean, makeup-free eyes. Avoid using oil-based products
            before your appointment, as they can interfere with the adhesive.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Communicate Your Preferences:{" "}
          </span>
          <p>
            Discuss your desired look, event type, and any concerns with your
            lash technician. Clear communication ensures you get the results you
            want.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Schedule Wisely:{" "}
          </span>
          <p>
            Book your appointment 1-2 days before the occasion to allow time for
            minor adjustments, if necessary.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LashesExtensionPrepare;
