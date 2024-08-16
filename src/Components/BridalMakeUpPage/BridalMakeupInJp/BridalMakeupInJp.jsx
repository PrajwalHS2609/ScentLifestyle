import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import BridalMakeupInJpImg from "./BridalMakeupInJpImg";
import BridalMakeupInJpHead from "./BridalMakeupInJpHead";
import BridalMakeupInJpWhy from "./BridalMakeupInJpWhy";
import BridalMakeupInJpProcess from "./BridalMakeupInJpProcess";
import BridalMakeupInJpCustomer from "./BridalMakeupInJpCustomer";
import BridalMakeupInJpTrend from "./BridalMakeupInJpTrend";
import BridalMakeupInJpPrepare from "./BridalMakeupInPrepare";
import BridalMakeupInJpBook from "./BridalMakeupInJpBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";

const BridalMakeupInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in JP Nagar, Bangalore | Bridal Makeup near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Bridal Makeup in JP Nagar, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <BridalMakeupInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Bridal Makeup in Jp Nagar"
      />
      <BridalMakeupInJpHead />
      <BridalMakeupInJpWhy />
      <BridalMakeupInJpProcess />
      <BridalMakeupInJpTrend />
      <BridalMakeupInJpCustomer />
      <BridalMakeupInJpPrepare />
      <BridalMakeupInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BridalMakeupInJp;
