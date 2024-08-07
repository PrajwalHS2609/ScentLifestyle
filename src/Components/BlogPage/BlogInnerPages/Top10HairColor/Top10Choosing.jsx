import React from "react";
import checked from "./../../../../Images/checked.png";

const Top10Choosing = () => {
  return (
    <div className="hairBotoxWho">
      <h5>Choosing the Right Hair Colour and Highlights for You</h5>
      <p>
        With so many beautiful options in the Top 10 Trending Women Hair Colours
        & Highlights for 2024, choosing the right shade and style can be
        overwhelming. Here are a few tips to help you make the best decision:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Consider Your Skin Tone:{" "}
          </span>
          <p>
            Your skin tone plays a crucial role in determining which hair color
            will suit you best. Warmer skin tones often look great with warm
            shades like cinnamon spice and golden honey blonde, while cooler
            skin tones can rock cool tones like cool platinum blonde and ash
            brown balayage.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Think About Maintenance:{" "}
          </span>
          <p>
            Some hair colors require more maintenance than others. For example,
            cool platinum blonde and fiery red may require regular touch-ups to
            keep the color vibrant, while balayage and soft caramel highlights
            are more low-maintenance options.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personal Style and Preference:{" "}
          </span>
          <p>
            Your hair is an expression of your personality and style. Choose a
            color that makes you feel confident and reflects your unique taste.
            Whether you prefer classic and timeless shades or bold and
            unconventional colors, there's a trend in the Top 10 Trending Women
            Hair Colours & Highlights for 2024 that will suit you.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Consult with a Professional:{" "}
          </span>
          <p>
            If you're unsure about which color to choose, consider consulting
            with a professional hairstylist. At SCENT, our experienced stylists
            can help you select the perfect shade and style based on your skin
            tone, hair type, and personal preferences.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Top10Choosing;
