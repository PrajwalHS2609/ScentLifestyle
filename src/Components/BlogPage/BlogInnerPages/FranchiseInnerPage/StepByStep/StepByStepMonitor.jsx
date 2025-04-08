import React from "react";
import checked from "./../../../../../Images/checked.png";

const StepByStepMonitor = () => {
  return (
    <div className="blogWhat-content">
      <h5>9. Monitor Performance and Adapt</h5>
      <p>
        Once your salon franchise is up and running, it’s important to
        continually monitor its performance and adapt to market changes.
        Regularly review your financials, customer feedback, and staff
        performance to identify areas for improvement.
      </p>
      <ul>
        <h4>Key Metrics to Track:</h4>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customer Satisfaction:{" "}
          </span>
          <p>
            Use client feedback to improve services and address any concerns
            promptly.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Revenue and Expenses:{" "}
          </span>
          <p>
            Track revenue and expenses to ensure profitability and identify
            areas to cut costs or increase income.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Staff Performance:{" "}
          </span>
          <p>
            Evaluate staff performance to ensure they are meeting the brand’s
            standards for service quality.{" "}
          </p>
        </li>

        <p>
          Staying flexible and responsive to feedback will help you grow your
          salon franchise in Bangalore and maintain long-term success.
        </p>
      </ul>

      <br />
    </div>
  );
};

export default StepByStepMonitor;
