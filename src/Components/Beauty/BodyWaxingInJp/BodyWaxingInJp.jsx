import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingInJpImg from "./BodyWaxingInJpImg";
import BodyWaxingInJpHead from "./BodyWaxingInJpHead";
import BodyWaxingInJpWhy from "./BodyWaxingInJpWhy";
import BodyWaxingInJpService from "./BodyWaxingInJpService";
import BodyWaxingInJpCustomer from "./BodyWaxingInJpCustomer";
import BodyWaxingInJpTips from "./BodyWaxingInJpTips";
import BodyWaxingInJpBook from "./BodyWaxingInJpBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const BodyWaxingInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Waxing, Threading & D-Tan in JP Nagar, Bangalore</title>
        <meta
          name="description"
          content="Body Waxing, Threading & D-Tan in JP Nagar, Bangalore. At SCENT, we are dedicated to providing exceptional care and results that leave you looking and feeling your best."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-waxing-threading-and-d-tan-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <BodyWaxingInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Body Waxing in Jp Nagar"
      />
      <BodyWaxingInJpHead />
      <BodyWaxingInJpWhy />
      <BodyWaxingInJpService />
      <BodyWaxingInJpCustomer />
      <BodyWaxingInJpTips />
      <BodyWaxingInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BodyWaxingInJp;
