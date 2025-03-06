import React from "react";
import kevin from "./../../Images/Kevin - Top Stylist.jpg";

const AboutEconomics = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutOwner-content">
        <h2>
          the <span>economics</span> of a salon unit
        </h2>
        <h4>opex</h4>
        <p>
          <span>rentals</span> - 150 to 200k
        </p>
        <p>
          <span>salaries</span> - 350 to 500k
        </p>
        <p>
          <span>miscalleneous</span> - 150 k
        </p>
        <p>
          {" "}
          <span>miscalleneous</span> - 50 k
        </p>
        <p>
          {" "}
          <span>marketing</span> - 25k
        </p>
        <br />
        <p>the average turnover 1400 k to 2100k EBITA - 40 % </p>
      </div>
      <img src={kevin} alt="kevin" />
    </div>
  );
};

export default AboutEconomics;
