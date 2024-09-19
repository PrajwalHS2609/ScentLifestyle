import React from "react";
import { Helmet } from "react-helmet";
import HairServImg from "../../HairBotox/HairServImg";
import StepByStepHead from "./StepByStepHead";
import StepByStepResearch from "./StepByStepResearch";
import StepByStepUnderstand from "./StepByStepUnderstand";
import StepByStepImg from "./StepByStepImg";
import research from "./../../../../../Images/Blog/Step-by-Step Guide/Research and Choose the Right Salon Franchise Brand.png";
import understand from "./../../../../../Images/Blog/Step-by-Step Guide/Understand the Bangalore Market.png";
import secure from "./../../../../../Images/Blog/Step-by-Step Guide/Secure the Ideal Location.png";
import obtain from "./../../../../../Images/Blog/Step-by-Step Guide/Obtain the Necessary Licenses and Permits.png";
import design from "./../../../../../Images/Blog/Step-by-Step Guide/Design Your Salon Layout and Interior.png";
import hire from "./../../../../../Images/Blog/Step-by-Step Guide/Hire and Train a Skilled Team.png";
import launch from "./../../../../../Images/Blog/Step-by-Step Guide/Launch a Strong Marketing Campaign.png";
import focus from "./../../../../../Images/Blog/Step-by-Step Guide/Focus on Customer Experience.png";
import monitor from "./../../../../../Images/Blog/Step-by-Step Guide/Monitor Performance and Adapt.png";

import StepByStepSecure from "./StepByStepSecure";
import StepByStepObtain from "./StepByStepObtain";
import StepByStepDesign from "./StepByStepDesign";
import StepByStepHier from "./StepByStepHier";
import StepByStepLaunch from "./StepByStepLaunch";
import StepByStepFocus from "./StepByStepFocus";
import StepByStepMonitor from "./StepByStepMonitor";
import StepByStepFinal from "./StepByStepFinal";

const StepByStep = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Step-by-Step Guide to Setting up a Successful Salon Franchise in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Step-by-Step Guide to Setting up a Successful Salon Franchise in Bangalore. Whether you're looking to fill in sparse areas or completely redefine your brow shape, our skilled technicians are here to help you achieve stunning results."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/step-by-step-guide-to-setting-up-a-successful-salon-franchise-in-bangalore"
        />
      </Helmet>
      <div className="hairTrimContent">
        <StepByStepImg />
        <StepByStepHead />
        <HairServImg hairBotoxImg={research} />
        <StepByStepResearch />
        <HairServImg hairBotoxImg={understand} />
        <StepByStepUnderstand />
        <HairServImg hairBotoxImg={secure} />
        <StepByStepSecure />
        <HairServImg hairBotoxImg={obtain} />
        <StepByStepObtain />
        <HairServImg hairBotoxImg={design} />
        <StepByStepDesign />
        <HairServImg hairBotoxImg={hire} />
        <StepByStepHier />
        <HairServImg hairBotoxImg={launch} />
        <StepByStepLaunch />
        <HairServImg hairBotoxImg={focus} />
        <StepByStepFocus />
        <HairServImg hairBotoxImg={monitor} />
        <StepByStepMonitor />
        <StepByStepFinal />
      </div>
    </div>
  );
};

export default StepByStep;
