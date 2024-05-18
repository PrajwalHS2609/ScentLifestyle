import React from "react";
import BeautyGarage from "./BeautyGarage/BeautyGarage";
import Olaplex from "./Olaplex/Olaplex";
import Schw from "./Schw/Schw";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import LastComp from "../LastComp/LastComp";
const ShopPage = () => {
  return (
    <div className="shopPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buy Hair Treatment Products Online at Best Price </title>
        <meta
          name="Buy Hair Treatment Products Online at Best Price. Olaplex, Beauty Garage, Casamara, Estee Lauder, Kerastase and more at SCENT. 							"
          content="scent application"
        />
      </Helmet>
      <NavBg />
      <BeautyGarage />
      <Olaplex />
      <Schw />
      <LastComp/>
    </div>
  );
};

export default ShopPage;
