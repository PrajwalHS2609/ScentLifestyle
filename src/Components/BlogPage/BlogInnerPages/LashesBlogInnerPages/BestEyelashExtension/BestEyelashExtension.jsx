import React from "react";
import { Helmet } from "react-helmet";
import BestEyelashExtensionHead from "./BestEyelashExtensionHead";
import BestEyelashExtensionImg from "./BestEyelashExtensionImg";
import BestEyelashExtensionWhy from "./BestEyelashExtensionWhy";
import BestEyelashExtensionTips from "./BestEyelashExtensionTips";
import BestEyelashExtensionWhyPro from "./BestEyelashExtensionWhyPro";
import BestEyelashExtensionChoose from "./BestEyelashExtensionChoose";
import HairServImg from "../../HairBotox/HairServImg";
import whyProImg from "./../../../../../Images/Blog/The_Best_Eyelash_Extension/Why Professional Eyelash Extensions Are Worth It for Special Events.png";
import whyImg from "./../../../../../Images/Blog/The_Best_Eyelash_Extension/Why Eyelash Extensions Are a Must for Brides and Special Events.png";
import tipsImg from "./../../../../../Images/Blog/The_Best_Eyelash_Extension/Eyelash Extension Care Tips for Brides.png";
import choosingImg from "./../../../../../Images/Blog/The_Best_Eyelash_Extension/Choosing the Right Eyelash Extension Style for Brides and Events.png";

const BestEyelashExtension = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          The Best Eyelash Extension Styles for Brides and Special Events{" "}
        </title>
        <meta
          name="description"
          content="The Best Eyelash Extension Styles for Brides and Special Events. With the right Eyelash Extension, you can achieve a stunning, long-lasting, and flawless appearance that complements your makeup and attire perfectly."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/the-best-eyelash-extension-styles-for-brides-and-special-events"
        />
      </Helmet>
      <div className="hairTrimContent">
        <BestEyelashExtensionImg />
        <BestEyelashExtensionHead />
        <br />
        <HairServImg hairBotoxImg={whyImg} />
        <BestEyelashExtensionWhy />
        <br />
        <HairServImg hairBotoxImg={choosingImg} />
        <BestEyelashExtensionChoose />
        <br />
        <HairServImg hairBotoxImg={tipsImg} />
        <BestEyelashExtensionTips />
        <br />
        <HairServImg hairBotoxImg={whyProImg} />
        <BestEyelashExtensionWhyPro />
      </div>
    </div>
  );
};

export default BestEyelashExtension;
