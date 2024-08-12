import React from "react";
import "./BotoxLandingWork.css";
import BotoxLandingWorkCard from "./BotoxLandingWorkCard";
import BotoxWorkCardStatic from "./BotoxWorkCardStatic";
import botoxWork1 from "./../../../video/botoxWork1.mp4";
import botoxWork2 from "./../../../video/botoxWork2.mp4";
import botoxWork3 from "./../../../video/botoxWork3.mp4";
import botoxWork4 from "./../../../video/botoxWork4.mp4";
import botoxWork5 from "./../../../video/botoxWork5.mp4";
import botoxWork6 from "./../../../video/botoxWork6.mp4";
import botoxWork7 from "./../../../video/botoxWork7.mp4";

const BotoxLandingWorkMain = () => {
  return (
    <div className="botoxLandingWorkMain">
      <BotoxWorkCardStatic />
      <BotoxLandingWorkCard vid={botoxWork1} />
      <BotoxLandingWorkCard vid={botoxWork2} />
      <BotoxLandingWorkCard vid={botoxWork3} />
      <BotoxLandingWorkCard vid={botoxWork4} />
      <BotoxLandingWorkCard vid={botoxWork5} />
      <BotoxLandingWorkCard vid={botoxWork6} />
      <BotoxLandingWorkCard vid={botoxWork7} />
    </div>
  );
};

export default BotoxLandingWorkMain;
