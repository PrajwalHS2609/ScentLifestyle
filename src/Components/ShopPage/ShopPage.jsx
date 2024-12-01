import React from "react";
import BeautyGarage from "./BeautyGarage/BeautyGarage";
import Olaplex from "./Olaplex/Olaplex";
import Schw from "./Schw/Schw";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import ShopPageHead from "./ShopPageHead";
const ShopPage = () => {
  return (
    <div className="shopPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Treatments Product in Bangalore for Men & Women at SCENT
        </title>
        <meta
          name="description on scent shop"
          content="Buy best Hair Treatments Product in Bangalore for Women & Men at SCENT Salon. 100% High Quality Products with Free Shipping."
        />
        <link rel="canonical" href="https://scentlifestyle.com/shop" />
      </Helmet>
      <NavBg />
      <ShopPageHead />
      <BeautyGarage />
      <Olaplex />
      <Schw />
      
    </div>
  );
};

export default ShopPage;
