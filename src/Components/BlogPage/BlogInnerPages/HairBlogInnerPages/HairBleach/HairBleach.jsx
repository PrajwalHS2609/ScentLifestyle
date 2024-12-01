import React from "react";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import { Helmet } from "react-helmet";
import HairBleachImg from "./HairBleachImg";
import HairBleachHead from "./HairBleachHead";
import HairServImg from "../../HairBotox/HairServImg";
import HairBleachCommon from "./HairBleachCommon";
import HairBleachHow from "./HairBleachHow";
import HairBleachWhy from "./HairBleachWhy";
import HairBleachSigns from "./HairBleachSigns";
import HairBleachHowTo from "./HairBleachHowTo";
import HairBleachAlternate from "./HairBleachAlternate";
import HairBleachExpert from "./HairBleachExpert";
import HairBleachUnderstand from "./HairBleachUnderstand";
import hairBleachCommonImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/Common Mistakes to Avoid.png";
import hairBleachUnderstandImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/Understanding Hair Bleaching.png"
import hairBleachHowImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/How Often Can You Bleach Your Hair.png";
import hairBleachSignsImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/Signs Your Hair Is Ready for Bleaching Again.png";
import hairBleachHowToImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/How to Care for Your Hair between Bleaching Sessions.png";
import hairBleachExpertImg from "./../../../../../Images/Blog/How Often Should You Bleach Your Hair/Expert Tips for Your Next Bleaching Session.png";

const HairBleach = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>How Often Should You Bleach Your Hair? Expert Advice</title>
        <meta
          name="description"
          content="How Often Should You Bleach Your Hair? We’ll cover everything you need to know about safely spacing out your bleaching sessions, maintaining hair health, and achieving your dream. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/how-often-should-you-bleach-your-hair"
        />
      </Helmet>
      <div className="hairTrimContent">
        <HairBleachImg />
        <HairBleachHead />
        <br />
        <HairServImg hairBotoxImg={hairBleachUnderstandImg} />
        <HairBleachUnderstand />
        <br />
        <HairServImg hairBotoxImg={hairBleachHowImg} />
        <HairBleachHow />
        <br />
        <HairBleachWhy />
        <br />
        <HairServImg hairBotoxImg={hairBleachSignsImg} />
        <HairBleachSigns />
        <br />
        <HairServImg hairBotoxImg={hairBleachHowToImg} />
        <HairBleachHowTo />
        <br />
        <HairBleachAlternate />
        <br />
        <HairServImg hairBotoxImg={hairBleachExpertImg} />
        <HairBleachExpert />
        <br />
        <HairServImg hairBotoxImg={hairBleachCommonImg} />
        <HairBleachCommon />
      </div>
            
    </div>
  );
};

export default HairBleach;
