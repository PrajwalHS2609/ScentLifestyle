import React from "react";
import point from "./../../../../../../Images/point.png";
import "./PediAndManicureWhat.css";

const PediAndManicureWhat = () => {
  return (
    <div className="pediManicureWhat">
      <h5>What Is a Professional Pedicure and Manicure?</h5>
      <p>
        Before diving into the benefits, it's essential to understand what
        constitutes a professional pedicure and manicure. Both services involve
        a series of treatments aimed at enhancing the appearance and health of
        your nails and skin.
      </p>
      <ul>
        <p>
          <span>Professional Pedicure:</span> A professional pedicure typically
          includes the following steps:
        </p>
        <li>
          <span>
            <img src={point} alt="checked" />
            Soaking:
          </span>
          <p>
            Your feet are soaked in a warm, soothing bath to soften the skin and
            nails.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Exfoliation:
          </span>
          <p>
            Dead skin cells are removed using scrubs or exfoliating tools, which
            helps to smoothen the feet
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Cutting and Shaping:
          </span>
          <p>
            {" "}
            Toenails are trimmed and shaped to prevent ingrown nails and other
            issues.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Callus Removal:
          </span>
          <p>
            {" "}
            Hard skin on the feet is treated to prevent discomfort and maintain
            smooth skin.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Massage:
          </span>
          <p>
            {" "}
            A relaxing foot massage improves circulation and helps relieve
            tension.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Polish:
          </span>
          <p>
            {" "}
            A relaxing foot massage improves circulation and helps relieve
            tension.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          <span>Professional Manicure:</span> A professional manicure involves similar steps
          but focuses on the hands and fingernails:
        </p>
        <li>
          <span>
            <img src={point} alt="checked" />
            Soaking:
          </span>
          <p>
            Hands are soaked in a warm solution to soften cuticles and nails.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Exfoliation:
          </span>
          <p> Dead skin is removed to reveal fresh, healthy skin.</p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Cuticle Care:
          </span>
          <p>
            {" "}
            Cuticles are pushed back or removed to ensure a clean nail bed.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Nail Shaping:
          </span>
          <p>
            {" "}
            Fingernails are trimmed and shaped according to your preference.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Massage:
          </span>
          <p>A hand massage nourishes the skin and improves circulation.</p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Polish:
          </span>
          <p> Nails are polished with a chosen color or left natural.</p>
        </li>
      </ul>
    </div>
  );
};

export default PediAndManicureWhat;
