import React from "react";
import "./ContactPage.css";
import LocationNavBg from "./../LocationPage/LocationNavBg/LocationNavBg";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import ContactMain from "./ContactMain";
import { Helmet } from "react-helmet";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact SCENT Salon for Services, Membership & Franchise</title>
        <meta
          name="description of Contact"
          content="Contact SCENT Salon for all your beauty needs, including services, membership benefits, and franchise opportunities. We're here to help you look and feel your best!"
        />
      </Helmet>
      <LocationNavBg />
      <ContactMain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default ContactPage;
