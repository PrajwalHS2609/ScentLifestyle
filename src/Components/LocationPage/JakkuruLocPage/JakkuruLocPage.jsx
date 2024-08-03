import React from "react";
import "./JakkuruLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LastComp from "../../LastComp/LastComp";
import JakkuruLocMap from "./JakkuruLocMap/JakkuruLocMap";
import LocationImg from "../LocationImg/LocationImg";
import loc3 from "./../../../Images/jakkur.jpg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import JakkuruLocAbout from "./JakkuruLocAbout/JakkuruLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard from "../LocationCard/LocationCard";
const JakkuruLocPage = () => {
  return (
    <div className="jakkuruLocPageContainer">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Salon in Jakkur - Hair, Nail, Spa, Facials & Beauty Essentials
        </title>
        <meta
          name="description"
          content="Experience premier beauty and wellness at our Salon in Jakkur. Indulge in expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and flawless eyelash extensions."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-jakkur"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc3} />
      <ServBreadCrumb currService="Jakkur" />
      <LocationCard
        map={<JakkuruLocMap />}
        head="Salon in Jakkur"
        address="Dr.Shivaram Karanth Nagar, Jakkuru, Bengaluru, Karnataka 560077"
        phone="+91 9742212700"
        PhoneLink="tel:9742212700"
      />
      {/* <LocationArrow
        leftLink={"/salon-in-lavelle-road"}
        rightLink={"/salon-in-uptown-whitefield"}
      />
        <LocationHead
          loc="Jakkur"
          phone="+91-9742212700"
          address="Dr.Shivaram Karanth Nagar, Jakkuru, Bengaluru, Karnataka 560077"
          map={<JakkuruLocMap />}
        /> */}
      <ServiceCardContain />
      <JakkuruLocAbout />
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

export default JakkuruLocPage;
