import React from "react";
import point from "./../../../../../Images/point.png";

const HairBleachHow = () => {
  return (
    <div className="pediAndMainCureBenefits">
      <h3>How Often Can You Bleach Your Hair?</h3>
      <p>
        The general rule of thumb is to wait at least 6 to 8 weeks between
        bleaching sessions. This allows your hair time to recover from the
        previous treatment and regain some of its natural moisture and strength.
        However, this timeline can vary depending on several factors:
      </p>
      <li>
        <h6>1. Hair Type and Condition</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />
              Healthy Hair:{" "}
            </span>
            <p>
              If your hair is strong and in good condition, it can handle
              bleaching better than damaged or brittle hair. You may be able to
              bleach again within the 6-8 week window.
            </p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Damaged Hair:{" "}
            </span>
            <p>
              If your hair is already dry, brittle, or has split ends, you'll
              need a longer recovery period-sometimes 10-12 weeks or more.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h6>2. Natural Hair Color</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />
              Dark Hair:{" "}
            </span>
            <p>
              If you have naturally dark hair, achieving a light blonde or
              platinum shade may require multiple bleaching sessions. It’s
              essential to space these out to avoid over-processing.
            </p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Light Hair:{" "}
            </span>
            <p>
              If your hair is already light, a single bleaching session might be
              enough, meaning you won’t need to bleach again as frequently.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h6>3. Desired Results</h6>
        <p>
          If you’re transitioning to a significantly lighter shade, you’ll
          likely need multiple sessions. Be patient—rushing the process can
          result in severe damage.
        </p>
        <p>
          For touch-ups on regrowth, you can bleach smaller sections of hair
          after 4-6 weeks, as this is less damaging than bleaching your entire
          head.
        </p>
      </li>
      <br />
    </div>
  );
};

export default HairBleachHow;
