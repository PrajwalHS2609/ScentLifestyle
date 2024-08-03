import React from "react";
import "./SahakarLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LastComp from "./../../LastComp/LastComp";
import LocationImg from "../LocationImg/LocationImg";
import loc1 from "./../../../Images/sahakaranagar.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import SahakarLocAbout from "./SahakarLocAbout/SahakarLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard from "../LocationCard/LocationCard";
import SahakarLocMap from "./SahakarLocMap/SahakarLocMap";
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
          content="Salon in Sahakar Nagar - Get Hair, Nail, Spa, Facials, Eyelashes & Beauty Essential Services. Book an Appointment!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-sahakar-nagar"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc1} />
      <ServBreadCrumb currService="Sahakar Nagar" />
      <LocationCard
        map={<SahakarLocMap />}
        head="Salon in Sahakar Nagar"
        address="F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092"
        phone="+91 9740322700"
        PhoneLink="tel:9740322700"
      />
      <ServiceCardContain />
      <SahakarLocAbout />
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

export default SahakarLocPage;
