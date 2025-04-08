import React from "react";
import checked from "./../../../../../Images/checked.png";

const StepByStepUnderstand = () => {
  return (
    <div className="blogWhat-content">
      <h5>2. Understand the Bangalore Market</h5>
      <p>
        Before setting up your salon franchise, it's crucial to conduct thorough
        market research. Bangalore is home to a wide range of customers, from
        young professionals and students to working women and families.
        Understanding the local demographics, beauty trends, and consumer
        preferences will help you tailor your salon services to meet the demands
        of your target audience.
      </p>
      <ul>
        <h4>Key Market Insights:</h4>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Target Audience:{" "}
          </span>
          <p>
            Bangalore has a large population of beauty-conscious individuals who
            seek premium grooming services.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Service Demand:{" "}
          </span>
          <p>
            Popular services in Bangalore include hair styling, hair coloring,
            facials, manicures, pedicures, and bridal makeup.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Pricing Strategy:{" "}
          </span>
          <p>
            Bangalore’s customers are price-sensitive but willing to pay for
            high-quality services. A tiered pricing strategy can appeal to
            different customer segments.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Location Preferences:{" "}
          </span>
          <p>
            Areas like Koramangala, Indiranagar, Whitefield, and Jayanagar are
            prime locations for salon franchises due to their dense population
            and high foot traffic.
          </p>
        </li>
        <p>
          By understanding these market dynamics, you can better position your
          salon franchise to meet the needs of Bangalore's diverse clientele.
        </p>
      </ul>
      <br />
    </div>
  );
};

export default StepByStepUnderstand;
