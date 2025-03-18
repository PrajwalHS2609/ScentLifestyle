import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import hairAntiDandruffSpaImg from "./../../../Images/HairSalonInnerPage/HAIR SPA SERVICES.png";
import HairAntiDandruffSpaHead from './HairAntiDandruffSpaHead';
import HairAntiDandruffSpaProcess from './HairAntiDandruffSpaProcess';
import HairAntiDandruffSpaBenefits from './HairAntiDandruffSpaBenefits';
import HairAntiDandruffSpaWhy from './HairAntiDandruffSpaWhy';
import HairAntiDandruffSpaBook from './HairAntiDandruffSpaBook';
import HairSalonInMeadowsImg from "../../LocationServices/Meadows/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";

const HairAntiDandruffSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Anti-Dandruff Spa in Bangalore | Hair Anti-Dandruff Spa Price
          Near Me
        </title>
        <meta
          name="description"
          content="Hair Anti-Dandruff Spa in Bangalore —a sanctuary where you can rejuvenate your scalp, get rid of dandruff, and restore vitality to your hair. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-anti-dandruff-spa-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairAntiDandruffSpaImg} alt={hairAntiDandruffSpaImg} />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair AntiDandruff "
      />
      <HairAntiDandruffSpaHead/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairAntiDandruffSpaProcess/>
      <HairAntiDandruffSpaBenefits/>
      <HairAntiDandruffSpaWhy/>
      <HairAntiDandruffSpaBook/>
            
    </div>
  );
};

export default HairAntiDandruffSpa;
