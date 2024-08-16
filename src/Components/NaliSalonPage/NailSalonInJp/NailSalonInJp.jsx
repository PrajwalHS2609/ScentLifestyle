import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import NailSalonInJpImg from "./NailSalonInJpImg";
import NailSalonInJpHead from "./NailSalonInJpHead";
import NailSalonInJpWhy from "./NailSalonInJpWhy";
import NailSalonInJpService from "./NailSalonInJpService";
import NailSalonInJpCustomer from "./NailSalonInJpCustomer";
import NailSalonInJpTips from "./NailSalonInJpTips";
import NailSalonInJpBook from "./NailSalonInJpBook";

const NailSalonInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Salon in JP Nagar, Bangalore | Hair Spa near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Nail Salon in JP Nagar, Bangalore is the perfect destination for anyone looking to indulge in top-notch nail care. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-salon-in-jp-nagar  "
        />
      </Helmet>
      <NavBg />
      <NailSalonInJpImg />
      <InnerNavi
        link="/nail-salon"
        service="nail Salon"
        currService="Nail Salon In JP nagar"
      />
      <NailSalonInJpHead />
      <NailSalonInJpWhy />
      <NailSalonInJpService />
      <NailSalonInJpCustomer />
      <NailSalonInJpTips />
      <NailSalonInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailSalonInJp;
