import React from "react";
import LastComp from "../../LastComp/LastComp";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import "./UpTownLocPage.css";
import LocationImg from "../LocationImg/LocationImg";
import loc4 from "./../../../Images/Varthur - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import UptownLocMap from "./UptownLocMap/UptownLocMap";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import UpTownLocAbout from "./UpTownLocAbout/UpTownLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard from "../LocationCard/LocationCard";
const UpTownLocPage = () => {
  return (
    <div className="uptownLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in Uptown Whitefield- Hair, Nail, Spa, Facials & Beauty
          Essentials
        </title>
        <meta
          name="description"
          content="Experience premier beauty and wellness at our Salon in Uptown, Whitefield. Indulge in expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and flawless eyelash extensions."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-uptown-whitefield"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc4} />
      <ServBreadCrumb currService="UpTown Square" />
      <LocationCard
        map={<UptownLocMap />}
        head="Salon in Uptown Square"
        address="Uptown square, State Highway 35, Seegehalli, Whitefield - Hoskote
    Rd, Bengaluru, Karnataka 560067"
        phone="+91 9148122700"
        PhoneLink="tel:9148122700"
      />
      <ServiceCardContain />
      <UpTownLocAbout />
      <TextLocReviews />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <ServiceWhy />
      <WhatsApp />

      <LastComp />
    </div>
  );
};

export default UpTownLocPage;
