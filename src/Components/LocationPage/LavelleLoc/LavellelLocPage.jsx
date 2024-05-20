import React from "react";
import "./LavellelLocPage.css";
import LocationNavBg from "./../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LastComp from "../../LastComp/LastComp";
import LavellelLocMap from "./LavellelLocMap/LavellelLocMap";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc2 from "./../../../Images/lavelle road.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LocationNavi from "../LocationNavi/LocationNavi";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import LavelleLocAbout from "./LavelleLocAbout/LavelleLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
const LavellelLocPage = () => {
  return (
    <div className="lavellelLocPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        SCENT Salon in Lavelle Road - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials</title>
        <meta
          name="SCENT Salon in Lavelle Road - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
          content="Scent lavelle road location"
        />
        <link
          rel="lavelle road"
          href="https://scentlifestyle.com/salon-in-lavelle-road		"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc2} />
      <LocationNavi loc="Lavelle Road"/>
      <LocationArrow leftLink={"/salon-in-sahakar-nagar"} rightLink={"/salon-in-jakkur"} />
      <div className="lavellelLocPageContent">
        <LocationHead
          loc="Lavelle Road"
          phone="+91-9740222700"
          address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
        map={<LavellelLocMap/>}
        />
        <ServiceCardContain />
        <LavelleLocAbout />
        <TextLocReviews />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <ServiceWhy/>
      </div>
      <LastComp />
    </div>
  );
};

export default LavellelLocPage;
