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
        <title>Contact Us for Salon Franchise & Memberships in India</title>
        <meta
          name="description"
          content="Contact SCENT for Salon Franchise & Memberships in Bangalore, India. Reach us at +91 9742232700 or Email: franchisee@scentlifestyle.com"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/contact-us"
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
