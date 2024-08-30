import React from "react";

const HairServImg = (props) => {
  return (
    <div className="hairTrimServImg">
      <img src={props.hairBotoxImg} alt="" loading="lazy" />
    </div>
  );
};

export default HairServImg;
