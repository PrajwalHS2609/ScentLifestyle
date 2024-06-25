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
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
const SahakarLocPage = () => {
  return (
    <div className="sahakarLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in Sahakar Nagar - Hair, Nail, Spa, Facials & Beauty Essentials
        </title>
        <meta
          name="description"
          content="Salon in Sahakar Nagar - Get Hair, Nail, Spa, Facials, Eyelashes & Beauty Essential Services. Book an Appointment!" />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-sahakar-nagar
"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc1} />
      <LocationNavi loc="Sahakar Nagar" />
      <LocationArrow
        leftLink={"/salon-in-jpnagar"}
        rightLink={"/salon-in-lavelle-road"}
      />
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
        <ServiceWhy />
      </div>
      <LastComp />
    </div>
  );
};

export default SahakarLocPage;
