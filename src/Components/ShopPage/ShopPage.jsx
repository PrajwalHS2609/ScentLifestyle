import React from "react";
import BeautyGarage from "./BeautyGarage/BeautyGarage";
import  "./ShopPage.css"
import NavBgShop from "./NavBgShop/NavBgShop";
import Olaplex from "./Olaplex/Olaplex";
import Schw from "./Schw/Schw";
const ShopPage = () => {
  return (
    <div className="shopPageContainer">
      <NavBgShop/>
      <BeautyGarage />
      <Olaplex/>
      <Schw/>
    </div>
  );
};

export default ShopPage;
