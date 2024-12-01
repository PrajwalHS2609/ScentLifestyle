import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../../NavBg/NavBg";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import Top5SpaHead from "./Top5SpaHead";
import Top5SpaImg from "./Top5SpaImg";
import HairServImg from "../../HairBotox/HairServImg";
import Top5SpaNourishment from "./Top5SpaNourishment";
import Top5SpaStrengthening from "./Top5SpaStrengthening";
import Top5SpaImproving from "./Top5SpaImproving";
import Top5SpaRelaxation from "./Top5SpaRelaxation";
import Top5SpaReviving from "./Top5SpaReviving";
import Top5SpaBouns from "./Top5SpaBouns";
import Top5SpaYour from "./Top5SpaYour";
import Top5SpaWhy from "./Top5SpaWhy";
import Top5SpaNourishmentImg from "./../../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Deep Nourishment and Hydration.png";
import Top5SpaStrengthImg from "./../../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Strengthening Hair from Root to Tip.png";
import Top5SpaRelaxImg from "./../../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Relax.png";
import Top5SpaImprovingImg from "./../../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Improving Scalp Health and Reducing Dandruff.png";
import Top5SpaReviveImg from "./../../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Revive.png";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";

const Top5Spa = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>The Top 5 Reasons to Book a Hair Spa Today! </title>
        <meta
          name="description"
          content="The Top 5 Reasons to Book a Hair Spa Today! Hair care is more than just shampooing and conditioning—it’s about deep nourishment, revitalization, and maintaining the health of your scalp and hair."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/the-top-5-reasons-to-book-a-hair-spa-today"
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <Top5SpaImg />
        <InnerNavi link="/blog" service="Blog" currService="Spa Blog" />
        <Top5SpaHead />
        <HairServImg hairBotoxImg={Top5SpaNourishmentImg} />
        <Top5SpaNourishment />
        <HairServImg hairBotoxImg={Top5SpaStrengthImg} />
        <Top5SpaStrengthening />
        <HairServImg hairBotoxImg={Top5SpaImprovingImg} />
        <Top5SpaImproving />
        <HairServImg hairBotoxImg={Top5SpaRelaxImg} />
        <Top5SpaRelaxation />
        <HairServImg hairBotoxImg={Top5SpaReviveImg} />
        <Top5SpaReviving />
        <Top5SpaBouns />
        <Top5SpaWhy />
        <Top5SpaYour />{" "}
      </div>
            
    </div>
  );
};

export default Top5Spa;
