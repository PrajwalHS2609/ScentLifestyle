import React from "react";
import point from "./../../../Images/point.png";

const HairColouredSpaTips = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Maintenance Tips for Colored Hair Between Spa Treatments</h5>
      <p>
        To keep your hair looking vibrant between visits to our Hair Spa for
        Colored Hair in Bangalore, here are some expert tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Use Color-Safe Shampoos and Conditioners{" "}
          </span>
          <p>
            Stick to products specifically designed for color-treated hair to
            prevent fading and protect vibrancy.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Limit Washing Frequency{" "}
          </span>
          <p>
            Washing too frequently can strip your color. Try to wash your hair
            only two to three times a week and use dry shampoo as needed.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Avoid Excessive Heat Styling{" "}
          </span>
          <p>
            Heat styling can cause color to fade faster and lead to dryness.
            When using heat, always apply a heat protectant and keep the
            temperature as low as possible.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Protect Hair from Sun Exposure{" "}
          </span>
          <p>
            UV rays can fade color-treated hair. If you’re spending time
            outdoors, wear a hat or use a UV-protectant spray to shield your
            hair.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Regular Hair Spa Treatments{" "}
          </span>
          <p>
            A monthly visit to our Hair Spa for Colored Hair in Bangalore
            ensures your color stays vibrant and your hair stays healthy. These
            treatments are designed to address the unique needs of colored hair,
            providing the care it deserves.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairColouredSpaTips;
