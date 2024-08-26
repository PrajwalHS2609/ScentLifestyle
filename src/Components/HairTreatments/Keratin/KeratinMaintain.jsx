import React from "react";
import checked from "./../../../Images/checked.png";

const KeratinMaintain = () => {
  return (
    <div className="headSpaWhyContainer">
      <h5>Maintaining Your Keratin Hair Treatment in Bangalore</h5>
      <p>
        To prolong the results of your keratin hair treatment in Bangalore, it’s
        essential to follow the aftercare instructions provided by your stylist.
        Here are some tips to help you maintain your smooth, frizz-free hair:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Use Sulfate-Free Shampoo:{" "}
          </span>
          <p>
            Sulfates can strip the keratin from your hair, reducing the
            effectiveness of the treatment. Opt for a sulfate-free shampoo and
            conditioner to keep your hair looking its best.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Avoid Washing Your Hair Too Frequently:{" "}
          </span>
          <p>
            Washing your hair too often can shorten the lifespan of the
            treatment. Try to limit washing your hair to two or three times a
            week.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Protect Your Hair from Heat:{" "}
          </span>
          <p>
            While keratin hair treatment in Bangalore makes your hair more
            resilient to heat, it’s still a good idea to use a heat protectant
            when styling your hair with hot tools.
          </p>
        </li>

        <li>
          <span>
            <img src={checked} alt="checked" />
            Schedule Regular Touch-Ups:{" "}
          </span>
          <p>
            Depending on your hair type and how well you care for your hair, you
            may need to schedule touch-up treatments every few months to
            maintain the results.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KeratinMaintain;
