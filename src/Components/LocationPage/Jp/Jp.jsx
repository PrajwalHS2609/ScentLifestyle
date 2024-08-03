import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationImg from "../LocationImg/LocationImg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LastComp from "../../LastComp/LastComp";
import JpLocMap from "./JpLocMap/JpLocMap";
import "./Jp.css";
import loc6 from "./../../../Images/JP Nagar.jpg";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import JpLocAbout from "./JpLocAbout/JpLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard from "../LocationCard/LocationCard";
const Jp = () => {
  return (
    <div className="jpLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in JP Nagar - Hair, Nail, Spa, Facials & Beauty Essentials
        </title>
        <meta
          name="description"
          content="Discover premium beauty and wellness services at our Jakkur Salon. Delight in expert hair care, fabulous nails, revitalizing spa treatments, indulgent facials, and flawless eyelashes."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-jpnagar"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc6} />
      <ServBreadCrumb currService="JP Nagar" />
      <LocationCard
        map={<JpLocMap />}
        head="Salon in J P Nagar"
        address="20th Main Road, Jp Nagar 2nd Phase, Bangalore - 560078, Opp Nexa Showroom "
        phone="+91 8861222700"
        PhoneLink="tel:8861222700"
      />
      <ServiceCardContain />
      <JpLocAbout />
      <TextLocReviews />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default Jp;
