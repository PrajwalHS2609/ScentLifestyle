import React from "react";
import ReasonsToTreatFeetImg from "./ReasonsToTreatFeetImg";
import ReasonsToTreatFeetHead from "./ReasonsToTreatFeetHead";
import ReasonsToTreatFeetFooterContent from "./ReasonsToTreatFeetFooterContent";
import reasonsToTreatFeetMiddle from "./../../../../../Images/Blog/top_reasons_treat_feet/Middle of the content.png";
import HairServImg from "../../HairBotox/HairServImg";
import { Helmet } from "react-helmet";

const ReasonsToTreatFeet = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Top Reasons to Treat Your Feet to a Pedicalm-Glyco Foot Facial
        </title>
        <meta
          name="description"
          content="Top Reasons to Treat Your Feet to a Pedicalm-Glyco Foot Facial. Your feet endure a lot every day, from standing and walking to enduring different weather conditions and footwear choices."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/top-reasons-to-treat-your-feet-to-a-pedicalm-glyco-foot-facial"
        />
      </Helmet>
      <div className="hairTrimContent">
        <ReasonsToTreatFeetImg />
        <ReasonsToTreatFeetHead />
        <br />
        <HairServImg hairBotoxImg={reasonsToTreatFeetMiddle} />
        <br />
        <ReasonsToTreatFeetFooterContent />
      </div>
    </div>
  );
};

export default ReasonsToTreatFeet;
