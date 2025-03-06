import React from "react";
import homeaboutus from "./../../Images/homeAboutUs.png";

const AboutSize = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutOwner-content" id="aboutSize-content">
        <h2>
          the <span>market</span> size
        </h2>
        <ul>
          <li>
            <p>
              The Indian salon industry was valued at approximately INR 90,000
              crore in 2020 and is expected to reach INR 1.75 trillion by 2026,
              growing at a CAGR of 15% from 2021 to 2026
            </p>
          </li>
          <li>
            <p>
              The market size was USD 10.8 billion in 2023 and is projected to
              reach USD 22.99 billion by 2033, with a CAGR of 7.85%
            </p>
          </li>
        </ul>
      </div>
      <img src={homeaboutus} alt="home about us" />
    </div>
  );
};

export default AboutSize;
