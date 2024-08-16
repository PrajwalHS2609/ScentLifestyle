import React from "react";
import { Helmet } from "react-helmet";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../NavBg/NavBg";
import FacialInJpImg from "./FacialInJpImg";
import FacialInJpHead from "./FacialInJpHead";
import FacialInJpWhy from "./FacialInJpWhy";
import FacialInJpTypes from "./FacialInJpTypes";
import FacialInJpCustomer from "./FacialInJpCustomer";
import FacialInJpTips from "./FacialInJpTips";
import FacialInJpBook from './FacialInJpBook';

function FacialInJp() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in JP Nagar, Bangalore | Facials Treatment near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Facials in JP Nagar, Bangalore. Whether you're preparing for a special occasion or simply want to indulge in some self-care, our facials offer the perfect solution to refresh and revitalize your skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <FacialInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Facial in Jp Nagar"
      />
      <FacialInJpHead />
      <FacialInJpWhy />
      <FacialInJpTypes />
      <FacialInJpCustomer />
      <FacialInJpTips />
      <FacialInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
}

export default FacialInJp;
