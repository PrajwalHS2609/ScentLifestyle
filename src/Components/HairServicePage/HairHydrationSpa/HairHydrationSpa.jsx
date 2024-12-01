import React from "react";
import { Helmet } from "react-helmet";
import hairHydrationSpa from "./../../../Images/HairSalonInnerPage/HAIR SPA SERVICES.png";
import HairSalonInMeadowsImg from "../HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import HairHydrationSpaHead from "./HairHydrationSpaHead";
import HairHydrationSpaWhat from "./HairHydrationSpaWhat";
import HairHydrationSpaBenefits from "./HairHydrationSpaBenefits";
import HairHydrationSpaXp from "./HairHydrationSpaXp";
import HairHydrationSpaWhy from "./HairHydrationSpaWhy";
import HairHydrationSpaMen from "./HairHydrationSpaMen";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairHydrationSpaTips from "./HairHydrationSpaTips";

const HairHydrationSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Hydration Boost Spa in Bangalore | Hair Hydration Spa Price Near
          Me
        </title>
        <meta
          name="description"
          content="Hair Hydration Boost Spa in Bangalore is designed to deeply condition and rejuvenate your locks, addressing dryness, frizz, and damage with a luxurious, targeted approach."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-hydration-boost-spa-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairHydrationSpa} alt={hairHydrationSpa} />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Hydration Boost Spa "
      />
      <HairHydrationSpaHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairHydrationSpaWhat />
      <HairHydrationSpaBenefits />
      <HairHydrationSpaXp />
      <HairHydrationSpaWhy />
      <HairHydrationSpaTips/>
      <HairHydrationSpaMen />
            
    </div>
  );
};

export default HairHydrationSpa;
