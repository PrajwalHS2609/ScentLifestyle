import React from "react";
import "./BotoxImg.css";
const BotoxImg = (props) => {
  return (
    <div className="botoxImgContainer">
      <img src={props.img} alt="headSpaImg" />
    </div>
  );
};

export default BotoxImg;
