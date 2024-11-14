import React from "react";
import dot from "./../../../Images/dot.png";

const HairStraighteningTips = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Aftercare Tips for Maintaining Your Straightened Hair</h5>
      <p>
        Once you’ve achieved your desired straight look, following a proper
        aftercare routine is essential. Here are some tips to help you maintain
        your straightened hair after visiting our hair straightening salon in
        Bangalore:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Avoid Washing for 48 Hours:{" "}
          </span>
          <p>
            For treatments like rebonding, avoid washing your hair for at least
            48 hours to allow the treatment to settle.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Use Sulfate-Free Shampoos:{" "}
          </span>
          <p>
            Sulfates can strip your hair of moisture, which can make
            straightened hair frizzy or brittle. Use a sulfate-free shampoo to
            maintain the health of your hair.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Limit Heat Styling:{" "}
          </span>
          <p>
            Overusing heat styling tools can reduce the longevity of your
            straightened look. When possible, let your hair air dry and avoid
            using high-temperature tools.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Regular Conditioning:{" "}
          </span>
          <p>
            Keep your hair hydrated with regular deep conditioning treatments or
            hair masks. This will help maintain the smoothness and shine
            achieved at our hair straightening salon in Bangalore.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Schedule Regular Touch-Ups:{" "}
          </span>
          <p>
            For long-lasting straightness, consider scheduling touch-ups every
            few months, especially if you’ve undergone treatments like
            rebonding.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairStraighteningTips;
