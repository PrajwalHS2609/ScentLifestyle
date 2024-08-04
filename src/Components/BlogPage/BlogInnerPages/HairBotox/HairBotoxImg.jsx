import React from "react";
import botoxVid from "./../../../../video/How Hair Botox Treatments Can Transform Your Tresses.mp4"
import "./HairBotoxImg.css"
const HairBotoxImg = () => {
  return (
    <div className="hairBotoxVid">
      <video  src={botoxVid} autoPlay loop muted />
      </div>
  );
};

export default HairBotoxImg;
