import React from "react";
import BeautyGarage from "./BeautyGarage/BeautyGarage";
import  "./ShopPage.css"
import NavBgShop from "./NavBgShop/NavBgShop";
import Olaplex from "./Olaplex/Olaplex";
import Schw from "./Schw/Schw";
import { Helmet } from "react-helmet";
const ShopPage = () => {
  return (
    <div className="shopPageContainer">
           <Helmet>
        <meta charSet="utf-8" />
        <title>
        Buy Hair Treatment Products Online at Best Price		        </title>
        <meta
          name="Buy Hair Treatment Products Online at Best Price. Olaplex, Beauty Garage, Casamara, Estee Lauder, Kerastase and more at SCENT. 							"
          content="scent application"
        />
      </Helmet>
      <NavBgShop/>
      <BeautyGarage />
      <Olaplex/>
      <Schw/>
    </div>
  );
};

export default ShopPage;
