import React from "react";
import { Helmet } from "react-helmet";
import HairServImg from "../../HairBotox/HairServImg";
import WhyKeratinImg from "./WhyKeratinImg";
import WhyKeratinHead from "./WhyKeratinHead";
import WhyKeratinHow from "./WhyKeratinHow";
import WhyKeratinBenefits from "./WhyKeratinBenefits";
import whyKeratinBanner2 from "./../../../../../Images/Blog/Why_Keratin_Hair/2.png";
import whyKeratinBanner3 from "./../../../../../Images/Blog/Why_Keratin_Hair/3.png";
import whyKeratinBanner4 from "./../../../../../Images/Blog/Why_Keratin_Hair/4.png";
import whyKeratinBanner5 from "./../../../../../Images/Blog/Why_Keratin_Hair/5.png";
import WhyKeratinRight from "./WhyKeratinRight";
import WhyKeratinWhat from "./WhyKeratinWhat";

const WhyKeratin = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Why Keratin Hair Treatment is the Ultimate Solution for Damaged Hair?{" "}
        </title>
        <meta
          name="description"
          content="Why Keratin Hair Treatment is the Ultimate Solution for Damaged Hair?  Unfortunately, due to frequent styling, chemical treatments, pollution, and improper hair care habits, many of us face the frustration of damaged, dry, and frizzy hair. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/why-keratin-hair-treatment-is-the-ultimate-solution-for-damaged-hair"
        />
      </Helmet>
      <div className="hairTrimContent">
        <WhyKeratinImg />
        <WhyKeratinHead />
        <HairServImg hairBotoxImg={whyKeratinBanner2} />
        <WhyKeratinWhat />
        <HairServImg hairBotoxImg={whyKeratinBanner3} />
        <WhyKeratinHow />
        <HairServImg hairBotoxImg={whyKeratinBanner4} />
        <WhyKeratinBenefits />
        <HairServImg hairBotoxImg={whyKeratinBanner5} />
        <WhyKeratinRight />
      </div>
            
    </div>
  );
};

export default WhyKeratin;
