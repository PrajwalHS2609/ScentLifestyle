import React from "react";
import Cancel from "./Cancel/Cancel";
import Return from "./Return/Return";
import Payment from "./Payment/Payment";
import Pricing from "./Pricing/Pricing";
import Shipping from "./Shipping/Shipping";
import NavBgTerms from "./NavBgTerms2/NavBg2Terms";
import LastComp from "./../LastComp/LastComp";

const TermsPage = () => {
  return (
    <div>
      <NavBgTerms />
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
