import React from "react";
import BeautyGarage from "./BeautyGarage/BeautyGarage";
import NavBgBeauty from "./NavBgBeauty/NavBgBeauty";
import  "./ShopPage.css"
const ShopPage = () => {
  return (
    <div className="shopPageContainer">
      <NavBgBeauty />
      <BeautyGarage />
    </div>
  );
};

export default ShopPage;
