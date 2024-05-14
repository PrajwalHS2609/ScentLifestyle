import React from "react";
import "./ContactPage.css";
import LocationNavBg from "./../LocationPage/LocationNavBg/LocationNavBg";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import ContactMain from "./ContactMain";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact SCENT Salon for Services, Membership & Franchise</title>
        <meta
          name="Contact SCENT Salon for all your beauty needs, including services, membership benefits, and franchise opportunities. We're here to help you look and feel your best!"
          content="Scent application"
        />
      </Helmet>
      <LocationNavBg />
      <ContactMain />
      <HelpNearYou />
      <LastComp />
    </div>
  );
};

export default ContactPage;
