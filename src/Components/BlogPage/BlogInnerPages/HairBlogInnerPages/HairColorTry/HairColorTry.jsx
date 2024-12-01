import React from "react";
import { Helmet } from "react-helmet";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import HairColorTryImg from "./HairColorTryImg";
import HairColorTryIntro from "./HairColorTryIntro";
import HairColorTryColors from "./HairColorTryColors";
import HairServImg from "../../HairBotox/HairServImg";
import HairColorTryMaintain from "./HairColorTryMaintain";
import HairColorTryHow from "./HairColorTryHow";
import HairColorTryWhy from "./HairColorTryWhy";
import HairColorTryColorsBanner from "./../../../../../Images/Blog/25+ Hair Colors/25+ Hair Colors Every Woman Should Try.png";
import HairColorTryChooseBanner from "./../../../../../Images/Blog/25+ Hair Colors/Choosing the Perfect Hair Color.png";
import HairColorTryMaintainBanner from "./../../../../../Images/Blog/25+ Hair Colors/Styling and Maintenance Tips for Colored Hair.png";
import HairColorTryWhyBanner from "./../../../../../Images/Blog/25+ Hair Colors/Why Hair Color is a Powerful Form of Self-Expression.png";
import HairColorTryHowBanner from "./../../../../../Images/Blog/25+ Hair Colors/How to Choose from the 25+ Hair Colors Every Woman Should Try.png";
import HairColorTryChoosing from "./HairColorTryChoosing";

const HairColorTry = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>25+ Hair Colors Every Woman Should Try </title>
        <meta
          name="description"
          content="25+ Hair Colors Every Woman Should Try, we’ll explore an array of options—from subtle tones to bold shades—that suit all skin tones, preferences, and styles"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/25-hair-colors-every-woman-should-try"
        />
      </Helmet>
      <div className="hairTrimContent">
        <HairColorTryImg />
        <HairColorTryIntro />
        <br />
        <HairServImg hairBotoxImg={HairColorTryChooseBanner} />
        <HairColorTryChoosing />
        <br />
        <HairServImg hairBotoxImg={HairColorTryColorsBanner} />
        <HairColorTryColors />
        <br />
        <HairServImg hairBotoxImg={HairColorTryMaintainBanner} />
        <HairColorTryMaintain />
        <br />
        <HairServImg hairBotoxImg={HairColorTryHowBanner} />
        <HairColorTryHow />
        <br />
        <HairServImg hairBotoxImg={HairColorTryWhyBanner} />
        <HairColorTryWhy />
      </div>
            
    </div>
  );
};

export default HairColorTry;
