import React from "react";
import HairBotoxHead from "./HairBotoxHead";
import HairBotoxWhat from "./HairBotoxWhat/HairBotoxWhat";
import { Helmet } from "react-helmet";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import HairBotoxImg from "./HairBotoxImg";
import NavBg from "../../../NavBg/NavBg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairBotox1 from "./../../../../Images/Blog/HairBotoxImgs/HairBotox1.png";
import HairBotox2 from "./../../../../Images/Blog/HairBotoxImgs/HairBotox2.png";
import HairBotox3 from "./../../../../Images/Blog/HairBotoxImgs/HairBotox3.png";
import HairBotoxHow from "./HairBotoxHow/HairBotoxHow";
import HairBotoxBenefits from "./HairBotoxBenefits";
import HairBotoxWho from "./HairBotoxWho/HairBotoxWho";
import HairBotoxXp from "./HairBotoxXp";
import HairServImg from "./HairServImg";
const HairBotox = () => {
  return (
    <div className="hairTrim">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>How Hair Botox Treatments Can Transform Your Tresses </title>
        <meta
          name="description"
          content="How Hair Botox Treatments Can Transform Your Tresses? For luscious, smooth, and youthful-looking hair, the beauty industry has introduced various treatments and solutions."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/how-hair-botox-treatments-can-transform-your-tresses"
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <HairBotoxImg />
        <InnerNavi
          link="/blog"
          service="Blog"
          currService="Hair Blog"
        />
        <HairBotoxHead />
        <HairBotoxWhat />
        <HairServImg hairBotoxImg={HairBotox1} />
        <HairBotoxHow />
        <HairServImg hairBotoxImg={HairBotox2} />
        <HairBotoxBenefits />
        <HairServImg hairBotoxImg={HairBotox3} />
        <HairBotoxWho />
        <HairBotoxXp />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairBotox;
