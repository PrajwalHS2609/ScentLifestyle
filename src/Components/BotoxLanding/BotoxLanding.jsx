import React from "react";
import "./BotoxLanding.css";
import BotoxLandingHead from "./BotoxLandingHead/BotoxLandingHead";
// import BotoxLandingCollection from "./BotoxLandingCollection/BotoxLandingCollection";
import BotoxLandingAbout from "./BotoxLandingAbout/BotoxLandingAbout";
import BotoxLandingWork from "./BotoxLandingWork/BotoxLandingWork";
import Members from './../HomePage/Members/Members';
import BotoxLandingProducts from "./BotoxLandingProducts/BotoxLandingProducts";

const BotoxLanding = () => {
  return (
    <div className="botoxLanding">
      <BotoxLandingHead />
      {/* <BotoxLandingCollection /> */}
      <BotoxLandingAbout />
      <BotoxLandingWork />
      <Members/>
      <BotoxLandingProducts/>
    </div>
  );
};

export default BotoxLanding;
 