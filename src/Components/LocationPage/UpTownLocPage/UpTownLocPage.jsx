import React from "react";
import LastComp from "../../LastComp/LastComp";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import "./UpTownLocPage.css";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc4 from "./../../../Images/Varthur - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import UptownLocMap from "./UptownLocMap/UptownLocMap";
import LocationNavi from "../LocationNavi/LocationNavi";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import UpTownLocAbout from "./UpTownLocAbout/UpTownLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
const UpTownLocPage = () => {
  return (
    <div className="uptownLocPageContainer">
       <Helmet>
        <meta charSet="utf-8" />
        <title>
        SCENT Salon in Uptown, Whitefield - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials					
        </title>
        <meta
          name="description on Uptown"
          content="SCENT Salon in Uptown, Whitefield - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
        />
        <link
          rel="uptown whitefield"
          href="https://scentlifestyle.com/salon-in-uptown-whitefield"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc4} />
      <LocationNavi loc="UpTown Square" />
      <LocationArrow leftLink={"/salon-in-jakkur"} rightLink={"/salon-in-whitefield"} />
      <div className="uptownLocPageContent">
        <LocationHead
          loc="Uptown Square"
          phone="+91-9148122700"
          address=" Uptown square, State Highway 35, Seegehalli, Whitefield - Hoskote
    Rd, Bengaluru, Karnataka 560067"
          map={<UptownLocMap />}
        />
        <ServiceCardContain />
        <UpTownLocAbout />
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

export default UpTownLocPage;
