import React from "react";
import "./LavellelLocPage.css";
import LocationNavBg from "./../LocationNavBg/LocationNavBg";
import LastComp from "../../LastComp/LastComp";
// import LavellelLocMap from "./LavellelLocMap/LavellelLocMap";
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
// import LocationCard from "../LocationCard/LocationCard";
import LocationCard1 from "../LocationCard/LocationCard1";
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
      <ServBreadCrumb currService="Lavelle" />
      {/* <LocationCard
        map={<LavellelLocMap />}
        head="Salon in Lavelle Road"
        address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
        phone="+91 9740222700"
        PhoneLink="tel:9740222700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="Lavellel Road"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.089389074394!2d77.58917068346508!3d12.968991900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16783d04e593%3A0xe3f71f656659211!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312832928!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in Lavelle Road "
        address="No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru, Karnataka 560001"
        phone="+91 9740222700"
        phoneLink="tel:9740222700"
      />
      {/* <LocationArrow
        leftLink={"/salon-in-sahakar-nagar"}
        rightLink={"/salon-in-jakkur"}
      />
        <LocationHead
          loc="Lavelle Road"
          phone="+91-9740222700"
          address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
          map={<LavellelLocMap />}
        /> */}
      <ServiceCardContain />
      <LavelleLocAbout />
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

export default LavellelLocPage;
