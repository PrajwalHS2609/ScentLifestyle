import React from "react";
import Cancel from "./Cancel/Cancel";
import Return from "./Return/Return";
import Payment from "./Payment/Payment";
import Pricing from "./Pricing/Pricing";
import Shipping from "./Shipping/Shipping";
import LastComp from "./../LastComp/LastComp";
import NavBg from "../NavBg/NavBg";

const TermsPage = () => {
  return (
    <div>
      <NavBg/>
      <Return />
      <Cancel />
      <Payment />
      <Pricing />
      <Shipping />
      <LastComp/>
    </div>
  );
};

export default TermsPage;
