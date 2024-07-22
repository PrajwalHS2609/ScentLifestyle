import React from "react";
import "./OrganicFacial.css"
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import OrganicFacialHead from "./OrganicFacialHead/OrganicFacialHead";
import OrganicFacialService from "./OrganicFacialService/OrganicFacialService";
import OrganicFacialWhy from "./OrganicFacialWhy/OrganicFacialWhy";
import OrganicFacialDiff from "./OrganicFacialDiff/OrganicFacialDiff";
import OrganicFacialProcess from "./OrganicFacialProcess/OrganicFacialProcess";
import OrganicFacialCustomer from "./OrganicFacialCustomer/OrganicFacialCustomer";
import OrganicFacialBook from "./OrganicFacialBook/OrganicFacialBook";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";

const OrganicFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Organic Facial Services in Bangalore | Best Facials Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Organic Facial Services in Bangalore. Our treatments are designed to rejuvenate your skin using the finest organic ingredients, providing a holistic approach to skincare that is both effective and gentle."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/organic-facial-services"
        />
      </Helmet>
      <NavBg />
      <OrganicFacialHead />
      <OrganicFacialService />
      <OrganicFacialWhy />
      <OrganicFacialDiff />
      <OrganicFacialProcess />
      <OrganicFacialCustomer />
      <OrganicFacialBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default OrganicFacial;
