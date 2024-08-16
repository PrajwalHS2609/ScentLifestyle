import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import SpaInJpHead from "./SpaInJpHead";
import SpaInJpWhy from "./SpaInJpWhy";
import SpaInJpService from "./SpaInJpService";
import SpaInJpCustomer from "./SpaInJpCustomer";
import SpaInJpTips from "./SpaInJpTips";
import SpaInJpBook from "./SpaInJpBook";
import SpaInJpImg from './SpaInJpImg';
import SpaInJpBenefits from './SpaInJpBenefits';

const SpaInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spa in JP Nagar, Bangalore | Best Spa near JP Nagar </title>
        <meta
          name="description"
          content="Spa in JP Nagar, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <SpaInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Spa in Jp Nagar"
      />
      <SpaInJpHead />
      <SpaInJpWhy />
      <SpaInJpService />
      <SpaInJpBenefits/>
      <SpaInJpCustomer />
      <SpaInJpTips />
      <SpaInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SpaInJp;
