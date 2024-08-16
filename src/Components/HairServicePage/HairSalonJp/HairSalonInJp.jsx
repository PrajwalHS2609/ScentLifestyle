import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import HairSalonJpImg from "./HairSalonJpImg/HairSalonJpImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairSalonJpHead from "./HairSalonJpHead/HairSalonJpHead";
import HairSalonJpWhy from "./HairSalonJpWhy/HairSalonJpWhy";
import HairSalonJpService from "./HairSalonJpService";
import HairSalonJpCustomer from "./HairSalonJpCustomer/HairSalonJpCustomer";
import HairSalonJpTips from "./HairSalonJpTips/HairSalonJpTips";
import HairSalonJpBook from "./HairSalonJpBook";

const HairSalonInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in JP Nagar, Bangalore | Hair Spa near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Hair Salon in JP Nagar, Bangalore. SCENT known for its exceptional services and warm ambiance, our salon is dedicated to making every visit a memorable experience."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <HairSalonJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Jp Nagar"
      />
      <HairSalonJpHead />
      <HairSalonJpWhy />
      <HairSalonJpService />
      <HairSalonJpCustomer />
      <HairSalonJpTips />
      <HairSalonJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInJp;
