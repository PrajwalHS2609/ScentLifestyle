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
      <BotoxLandingWorkCard
        vid={botoxWork1}
        head="Revive Your Radiance with Our Hair Botoxx Magic!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork2}
        head="Say Goodbye to Frizz and Hello to Lush, Smooth Locks!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork3}
        head="Unlock the Secret to Shiny, Strong Hair with Hair Botoxx!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork4}
        head="Embrace the Smooth - Your Hair’s Best Friend Awaits!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork5}
        head="From Dull to Dazzling - Revitalize Your Hair with Botoxx!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork6}
        head="Get Ready for Gorgeous - Hair Botoxx for Luscious, Flawless Hair!"
      />
      <BotoxLandingWorkCard
        vid={botoxWork7}
        head="Transform Your Tresses - The Ultimate Hair Botoxx Experience!"
      />
    </div>
  );
};

export default BotoxLandingWorkMain;
