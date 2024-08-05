import React from "react";
import CinnamonImg from "./../../../../Images/Blog/Top 10 hairColor/Cinnamon Spice.png";
import HairServImg from "../HairBotox/HairServImg";

const CinnamonSpice = () => {
  return (
    <div className="hairTrimHead">
      <HairServImg hairBotoxImg={CinnamonImg} />
      <h2>1. Cinnamon Spice</h2>
      <p>
        One of the{" "}
        <a href="https://scentlifestyle.com/top-10-trending-women-hair-colours-and-highlights-for-2024"> Top 10 Trending Women Hair Colours & Highlights for 2024</a>{" "}
        is the warm and inviting Cinnamon Spice. This rich, reddish-brown hue is
        perfect for those who want to add warmth and depth to their hair.
        Cinnamon Spice is a versatile color that complements various skin tones,
        making it a popular choice for women looking to embrace a cozy,
        autumn-inspired look. This shade pairs beautifully with soft waves or
        curls, adding a touch of elegance and sophistication.
      </p>
    </div>
  );
};

export default CinnamonSpice;
