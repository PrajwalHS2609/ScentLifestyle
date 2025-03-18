import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import { Helmet } from "react-helmet";
import HairBotoxNearJakkurHead from './HairBotoxNearJakkurHead';
import HairBotoxNearJakkurWhyChoose from './HairBotoxNearJakkurWhyChoose';
import HairBotoxNearJakkurBest from './HairBotoxNearJakkurBest';
import HairBotoxNearJakkurProcess from './HairBotoxNearJakkurProcess';
import HairBotoxNearJakkurHowLong from './HairBotoxNearJakkurHowLong';
import HairBotoxNearJakkurWho from './HairBotoxNearJakkurWho';
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const HairBotoxNearJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Botox Treatments near Jakkur – SCENT Lifestyle </title>
        <meta
          name="description"
          content="Hair Botox Treatments near Jakkur from SCENT. This non-invasive treatment is designed to rejuvenate your hair, leaving it looking healthier, shinier, and more manageable."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatments-near-jakkur"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Jakkur"
      />
      <HairBotoxNearJakkurHead/>

      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxNearJakkurWhyChoose/>
      <HairBotoxNearJakkurBest/>
      <HairBotoxNearJakkurProcess/>
      <HairBotoxNearJakkurHowLong/>
      <HairBotoxNearJakkurWho/>
    </div>
  );
};

export default HairBotoxNearJakkur;
