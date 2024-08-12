import React from "react";
import "./BotoxLandingProducts.css";
import Typewriter from "typewriter-effect"
const TypeWriter = () => {
  return (
    <div className="typeWriterContainer">
      <Typewriter
        options={{
          strings: ["Paint your Hair!", "Paint it Red & Blue"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
