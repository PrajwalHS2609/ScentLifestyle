import React from "react";
import "./BotoxLandingWork.css";
import BotoxLandingWorkCard from "./BotoxLandingWorkCard";
import BotoxWorkCardStatic from "./BotoxWorkCardStatic";

const BotoxLandingWorkMain = () => {
  return (
    <div className="botoxLandingWorkMain">
      <BotoxWorkCardStatic />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
      <BotoxLandingWorkCard />
    </div>
  );
};

export default BotoxLandingWorkMain;
