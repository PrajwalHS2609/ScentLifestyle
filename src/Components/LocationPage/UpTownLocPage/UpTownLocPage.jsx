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
// import UptownLocMap from "./UptownLocMap/UptownLocMap";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import UpTownLocAbout from "./UpTownLocAbout/UpTownLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
// import LocationCard from "../LocationCard/LocationCard";
import LocationCard1 from "../LocationCard/LocationCard1";
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
      {/* <LocationCard
        map={<UptownLocMap />}
        head="Salon in Uptown Square"
        address="Uptown square, State Highway 35, Seegehalli, Whitefield - Hoskote
    Rd, Bengaluru, Karnataka 560067"
        phone="+91 9148122700"
        PhoneLink="tel:9148122700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="Uptown"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1708574507916!2d77.75878327454745!3d13.024789313710967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fce933eb01f%3A0xda0f87b8b4cf7e2f!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1722662561968!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in Uptown Square "
        address="Uptown square, State Highway 35, Seegehalli, Whitefield - Hoskote Rd, Bengaluru, Karnataka 560067"
        phone="+91 9148122700"
        phoneLink="tel:9148122700"
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
