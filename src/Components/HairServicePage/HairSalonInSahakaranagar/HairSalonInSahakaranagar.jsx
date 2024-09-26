import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInSahakaranagarHead from "./HairSalonInSahakaranagarHead/HairSalonInSahakaranagarHead";
import HairSalonInSahakaranagarWhy from './HairSalonInSahakaranagarWhy/HairSalonInSahakaranagarWhy';
import HairSalonInSahakaranagarService from "./HairSalonInSahakaranagarService";
import HairSalonInSahakaranagarWhat from "./HairSalonInSahakaranagarWhat/HairSalonInSahakaranagarWhat";
import HairSalonInSahakaranagarBook from "./HairSalonInSahakaranagarBook";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairSalonJpImg from "../HairSalonJp/HairSalonJpImg/HairSalonJpImg";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const HairSalonInSahakaranagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in Sahakara Nagar, Bangalore | Hair Salon near Sahakara
          Nagar{" "}
        </title>
        <meta
          name="description"
          content="Hair Salon in Sahakara Nagar, Bangalore. Whether you're looking for a fresh haircut, a complete makeover, or simply a relaxing day of pampering. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <HairSalonJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Sahakara Nagar"
      />
      <HairSalonInSahakaranagarHead />
      <HairSalonInSahakaranagarWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSalonInSahakaranagarService />
      <HairSalonInSahakaranagarWhat />
      <HairSalonInSahakaranagarBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInSahakaranagar;
