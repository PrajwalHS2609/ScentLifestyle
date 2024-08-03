import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LastComp from "../../LastComp/LastComp";
import LocationImg from "../LocationImg/LocationImg";
import loc5 from "./../../../Images/seegehalli - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import MeadowsLocMap from "./MeadowsLocMap/MeadowsLocMap";
import "./MeadowsLocPage.css";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import MeadowsLocAbout from "./MeadowsLocAbout/MeadowsLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard from "../LocationCard/LocationCard";
const MeadowsLocPage = () => {
  return (
    <div className="meadowsLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in Whitefield - Hair, Nail, Spa, Facials & Beauty Essentials
        </title>
        <meta
          name="description"
          content="Experience top-tier beauty and wellness at our Salon in Whitefield. Enjoy expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and flawless eyelash extensions."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-whitefield"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc5} />
      <ServBreadCrumb currService="Meadows" />
      <LocationCard
        map={<MeadowsLocMap />}
        head="Salon in Meadows"
        address="Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka 560066"
        phone="+91 9686221700"
        PhoneLink="tel:9686221700"
      />
      <ServiceCardContain />
      <MeadowsLocAbout />
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

export default MeadowsLocPage;
