import React from "react";
import point from "./../../../../../Images/point.png";

const PerfectPreDatePerfect = () => {
  return (
    <div className="blogWhat-content">
      <h5>The Perfect Outfit & Accessories</h5>
      <p>
        Your outfit should reflect your personal style while making you feel
        comfortable and confident.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Dress for the Occasion:{" "}
          </span>
          <p>
            Whether it's a chic dress, a stylish jumpsuit, or a casual yet
            elegant ensemble, choose something that makes you feel amazing.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Accessorize Thoughtfully:{" "}
          </span>
          <p>
            Add subtle jewelry, a statement handbag, and stylish heels or
            comfortable flats to complete your look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Confidence is Key:{" "}
          </span>
          <p>
            The best accessory you can wear is confidence! Stand tall, smile,
            and enjoy your special night.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PerfectPreDatePerfect;
