import React, { useEffect, useState } from "react";
import "./Christmas.css";

const Christmas = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate a list of snowflakes
    const generatedSnowflakes = Array.from({ length: 30 }).map((_, index) => {
      // Randomly assign colors (red, green, or white)
      const colors = ["#d40000", "#186e32", "#FFFFFF"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: index,
        left: Math.random() * 100 + "%",
        animationDuration: Math.random() * 10 + 5 + "s",
        fontSize: Math.random() * 1.5 + 0.5 + "em",
        animationDelay: Math.random() * 5 + "s",
        color: randomColor, // Assigning the color
      };
    });
    setSnowflakes(generatedSnowflakes);
  }, []);

  return (
    <div className="christmasContainer">
      <div className="snowfall-container">
        {snowflakes.map((snowflake) => (
          <div
            key={snowflake.id}
            className="snowflake"
            style={{
              left: snowflake.left,
              animationDuration: snowflake.animationDuration,
              fontSize: snowflake.fontSize,
              animationDelay: snowflake.animationDelay,
              color: snowflake.color, // Applying the color to each snowflake
            }}
          >
            ❄
          </div>
        ))}
      </div>
    </div>
  );
};

export default Christmas;