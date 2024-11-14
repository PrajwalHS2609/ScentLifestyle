import React from "react";
import dot from "./../../../Images/dot.png";

const HairHydrationSpaTips = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Hair Hydration Tips for Men and Women</h5>
      <p>
        To extend the benefits of your Hair Hydration Boost Spa treatment, here
        are some tips to maintain healthy, moisturized hair:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Regular Hydration Treatments:{" "}
          </span>
          <p>
            Schedule hydration treatments every 4–6 weeks for ongoing
            nourishment.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Use Quality Hair Products:{" "}
          </span>
          <p>
            Avoid harsh shampoos and use sulfate-free products that lock in
            moisture. If possible, use a leave-in hair moisturizer for men and
            women for daily hydration.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Avoid Heat Damage:{" "}
          </span>
          <p>
            Limit your use of heat styling tools or use a heat protectant if you
            do use them.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Stay Hydrated:{" "}
          </span>
          <p>
            Your hair’s moisture also depends on your body’s hydration level.
            Drink plenty of water daily to support scalp and hair health.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairHydrationSpaTips;
