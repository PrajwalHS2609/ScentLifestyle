import React from "react";
import "./JakkuruLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LastComp from "../../LastComp/LastComp";
// import JakkuruLocMap from "./JakkuruLocMap/JakkuruLocMap";
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
// import LocationCard from "../LocationCard/LocationCard";
import LocationCard1 from "../LocationCard/LocationCard1";
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
      {/* <LocationCard
        map={<JakkuruLocMap />}
        head="Salon in Jakkur"
        address="Dr.Shivaram Karanth Nagar, Jakkur, Bengaluru, Karnataka 560077"
        phone="+91 9742212700"
        PhoneLink="tel:9742212700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="jakkur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502.127500845567!2d77.61488794627367!3d13.070329479965107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19b0bc294e17%3A0x59d3e3c737b6eb93!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312794077!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in Jakkur"
        address="Dr.Shivaram Karanth Nagar, Jakkur, Bengaluru, Karnataka 560077"
        phone="+91 9742212700"
        phoneLink="tel:9742212700"
      />
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
