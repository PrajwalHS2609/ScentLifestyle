import React from "react";
import point from "./../../../../../Images/point.png";

const AromaBodySpaChoosing = () => {
  return (
    <div className="blogWhat-content">
      <h5>Choosing the Right Essential Oils for Your Aroma Body Spa</h5>
      <p>
        Each essential oil has unique properties that contribute to different
        aspects of wellness. Here are some common essential oils used in an
        Aroma Body Spa and their benefits:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Lavender:
          </span>
          <p> Reduces stress and promotes deep relaxation</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Avoid Heavy Meals:
          </span>
          <p>Relieves muscle tension and enhances energy levels</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Rosemary
          </span>
          <p> Improves circulation and reduces joint pain</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Chamomile
          </span>
          <p> Soothes the skin and calms the nervous system</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Eucalyptus{" "}
          </span>
          <p> Boosts immunity and clears respiratory pathways</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Jasmine{" "}
          </span>
          <p> Hydrates and rejuvenates the skin while uplifting mood</p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Lemon{" "}
          </span>
          <p> Detoxifies the body and improves focus</p>
        </li>
      </ul>
    </div>
  );
};

export default AromaBodySpaChoosing;
