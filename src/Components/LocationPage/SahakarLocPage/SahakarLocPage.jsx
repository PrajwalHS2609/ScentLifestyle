import React from "react";
import "./SahakarLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import SahakarLocMap from "./SahakarLocMap/SahakarLocMap";
import LastComp from "./../../LastComp/LastComp";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc1 from "./../../../Images/sahakaranagar.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LocationNavi from "../LocationNavi/LocationNavi";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import SahakarLocAbout from "./SahakarLocAbout/SahakarLocAbout";
import { Helmet } from "react-helmet";
const SahakarLocPage = () => {
  return (
    <div className="sahakarLocPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon in Sahakar Nagar - Hair, Nail, Facial, Spa, Eyelashes &
          Beauty Essentials
        </title>
        <meta
          name="SCENT Salon in Sahakar Nagar - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
          content="Scent sahakar nagar location"
        />
        <link
          rel="sahakar nagar"
          href="https://scentlifestyle.com/salon-in-sahakar-nagar"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc1} />
      <LocationNavi loc="Sahakar Nagar" />
      <LocationArrow leftLink={"/salon-in-jpnagar"} rightLink={"/salon-in-lavelle-road"} />
      <div className="sahakarLocPageContent">
        <LocationHead
          loc="Sahakar Nagar"
          phone="+91-9740322700"
          address="F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092"
          map={<SahakarLocMap />}
        />
        <ServiceCardContain />
        <SahakarLocAbout />
        <TextLocReviews />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
      </div>
      <LastComp />
    </div>
  );
};

export default SahakarLocPage;
