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
import "./MeadowsLocPage.css";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import MeadowsLocAbout from "./MeadowsLocAbout/MeadowsLocAbout";
import { Helmet } from "react-helmet";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../../InnerServicePage/InnerNavi/ServBreadCrumb";
import LocationCard1 from "../LocationCard/LocationCard1";
import NavBg from "../../NavBg/NavBg";
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
      <NavBg />
      <LocationImg img={loc5} />
      <ServBreadCrumb currService="Meadows" />
      {/* <LocationCard
        map={<MeadowsLocMap />}
        head="Salon in Meadows"
        address="Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka 560066"
        phone="+91 9686221700"
        PhoneLink="tel:9686221700"
      /> */}
      <LocationCard1
        map={
          <iframe
            title="Palm Meadows"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.395796668868!2d77.7310943935791!3d12.959185000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12093c173e17%3A0xa0dc4058f7c31adc!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312952267!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
        locAddress="Salon in Meadows"
        address="Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka 560066"
        phone="+91 9686221700"
        phoneLink="tel:9686221700"
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
