import React from "react";
import point from "./../../../../../Images/point.png";

const TipsPedicureTreatment = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Tips to Prevent Dry and Cracked Heels </h5>
      <p>
        While a good pedicure treatment can work wonders, prevention is always
        better than cure. Here are some tips to keep your heels smooth and
        healthy:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hydrate Regularly:{" "}
          </span>
          <p> Apply a moisturizing foot cream daily, focusing on the heels.</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Wear Comfortable Shoes:
          </span>
          <p>Opt for shoes that provide adequate support and cushioning.</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Avoid Walking Barefoot:
          </span>
          <p>
            Walking barefoot, especially on hard surfaces, can increase the risk
            of cracked heels.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Stay Hydrated:
          </span>
          <p>
            Drinking plenty of water helps maintain skin elasticity and prevents
            dryness.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Exfoliate Weekly:
          </span>
          <p>
            Regular exfoliation removes dead skin and keeps your feet smooth.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TipsPedicureTreatment;
