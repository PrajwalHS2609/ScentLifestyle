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
// import LocationCard from "../LocationCard/LocationCard";
// import SahakarLocMap from "./SahakarLocMap/SahakarLocMap";
import LocationCard1 from "../LocationCard/LocationCard1";
import NavBg from "../../NavBg/NavBg";
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
      <NavBg />
      <LocationImg img={loc1} />
      <ServBreadCrumb currService="Sahakar Nagar" />
      {/* <LocationCard
        map={<SahakarLocMap />}
        head="Salon in Sahakar Nagar"
        address="F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092"
        phone="+91 9740322700"
        PhoneLink="tel:9740322700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="sahakarNagar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66959.84890698246!2d77.4936506181404!3d13.061355082635192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1823e4ecedf1%3A0xa274b078aaa444c4!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312603323!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in Sahakar Nagar"
        address="F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092"
        phone="+91 9740322700"
        phoneLink="tel:9740322700"
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
