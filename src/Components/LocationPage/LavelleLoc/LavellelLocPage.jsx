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
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import LavelleLocAbout from "./LavelleLocAbout/LavelleLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
const LavellelLocPage = () => {
  return (
    <div className="lavellelLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in Lavelle Road- Hair, Nail, Spa, Facials & Beauty Essentials
        </title>
        <meta
          name="description"
          content="Experience top beauty and wellness at our Salon in Lavelle Road. Enjoy expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and perfect eyelashes."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-lavelle-road"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc2} />
<ServBreadCrumb currService="Lavelle"/>
      <LocationArrow
        leftLink={"/salon-in-sahakar-nagar"}
        rightLink={"/salon-in-jakkur"}
      />
      <div className="lavellelLocPageContent">
        <LocationHead
          loc="Lavelle Road"
          phone="+91-9740222700"
          address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
          map={<LavellelLocMap />}
        />
        <ServiceCardContain />
        <LavelleLocAbout />
        <TextLocReviews />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <ServiceWhy />
        <WhatsApp/>

      </div>
      <LastComp />
    </div>
  );
};

export default LavellelLocPage;
