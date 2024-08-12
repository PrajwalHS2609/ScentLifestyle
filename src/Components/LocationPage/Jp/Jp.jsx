import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationImg from "../LocationImg/LocationImg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LastComp from "../../LastComp/LastComp";
// import JpLocMap from "./JpLocMap/JpLocMap";
import "./Jp.css";
import loc6 from "./../../../Images/JP Nagar.jpg";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import JpLocAbout from "./JpLocAbout/JpLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
// import LocationCard from "../LocationCard/LocationCard";
import LocationCard1 from "../LocationCard/LocationCard1";
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
          content="Discover premium beauty and wellness services at our Jp Nagar Salon. Delight in expert hair care, fabulous nails, revitalizing spa treatments, indulgent facials, and flawless eyelashes."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-in-jpnagar"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc6} />
      <ServBreadCrumb currService="JP Nagar" />
      {/* <LocationCard
        map={<JpLocMap />}
        head="Salon in J P Nagar"
        address="20th Main Road, Jp Nagar 2nd Phase, Bangalore - 560078, Opp Nexa Showroom "
        phone="+91 8861222700"
        PhoneLink="tel:8861222700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="jp Nagar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.037649213272!2d77.5785832935791!3d12.906511000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15855ce4af89%3A0x4d3b6ca298802841!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312872491!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in J P Nagar"
        address="20th Main Road, Jp Nagar 2nd Phase, Bangalore - 560078, Opp Nexa Showroom"
        phone="+91 8861222700"
        phoneLink="tel:8861222700"
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
