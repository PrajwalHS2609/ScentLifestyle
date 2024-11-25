import React from "react";
import checked from "./../../../Images/checked.png";

const GelNailExtensionNearMeTrend = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Trends in Gel Nails Extensions</h5>
      <p>
        Gel nail extensions are versatile, allowing you to experiment with
        various designs and styles. Here are some popular trends to try at
        SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Minimalist Nails{" "}
          </span>
          <p>
            Opt for soft nude shades or pastel colors for a chic and understated
            look.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Bold Nail Art{" "}
          </span>
          <p>
            Experiment with geometric patterns, floral designs, or abstract art
            to make a statement.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Glitter and Glam{" "}
          </span>
          <p>
            Add some sparkle with glitter accents or metallic finishes for a
            glamorous touch.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Seasonal Themes
          </span>
          <p>
            Celebrate holidays or seasons with themed nail art, such as
            snowflakes for winter or florals for spring.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Ombré Nails
          </span>
          <p>
            Blend two or more colors seamlessly for a trendy ombré effect that’s
            perfect for any occasion.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default GelNailExtensionNearMeTrend;
