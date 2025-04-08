import React from "react";
import point from "./../../../../../Images/point.png";

const TrendyHairHighlightPeekaboo = () => {
  return (
    <div className="blogWhat-content">
      <h5>9. Peekaboo Highlights for a Pop of Color 🌈</h5>
      <p>
        Want a hidden surprise in your hair? Peekaboo highlights allow you to
        add vibrant colors like blue, purple, or red underneath the top layers
        of your hair. Perfect for those who want a mix of professional and
        playful!
      </p>
      <ul>
        <h4>Why It’s Trending:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Fun yet discreet{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Great for experimenting with color
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Perfect for all hair types
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TrendyHairHighlightPeekaboo;
