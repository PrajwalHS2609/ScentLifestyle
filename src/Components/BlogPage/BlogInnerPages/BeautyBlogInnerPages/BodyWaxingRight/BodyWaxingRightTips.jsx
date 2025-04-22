import React from "react";
import checked from "./../../../../../Images/checked.png";

const BodyWaxingRightTips = () => {
  return (
    <div className="blogWhat-content">
      <h3>Tips for a Successful Waxing Experience</h3>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Let Hair Grow to the Right Length:{" "}
          </span>
          <p>
            For the wax to grip effectively, hair should be at least ¼ inch long
            (about the length of a grain of rice). Avoid waxing hair that's too
            short or too long.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Exfoliate Before Your Apcheckedment:{" "}
          </span>
          <p>
            Gently exfoliating a day before your wax helps remove dead skin
            cells and allows for a smoother waxing experience. However, avoid
            harsh scrubs right before your apcheckedment.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Avoid Moisturizers on the Day of Waxing:{" "}
          </span>
          <p>
            Skip applying lotion or oil before your apcheckedment as it can
            interfere with wax adhesion.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Take a Pain Reliever (If Needed):{" "}
          </span>
          <p>
            If you’re sensitive to pain, consider taking an over-the-counter
            pain reliever 30 minutes before your session to minimize discomfort.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Wear Loose Clothing Afterward:
          </span>
          <p>
            {" "}
            To avoid irritation, wear breathable and loose-fitting clothes after
            waxing. Tight clothing can rub against freshly waxed skin and cause
            bumps or redness.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Avoid Heat and Sweating Post-Wax:
          </span>
          <p>
            {" "}
            For at least 24 hours, skip saunas, hot baths, sunbathing, and
            intense workouts. Freshly waxed skin is more prone to irritation and
            infection.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Stick to a Schedule:{" "}
          </span>
          <p>
            Consistency is key. Waxing every 4 to 6 weeks helps maintain
            smoother skin and can make the process less painful over time.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BodyWaxingRightTips;
