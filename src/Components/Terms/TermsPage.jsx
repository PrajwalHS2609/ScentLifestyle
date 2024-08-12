import React from "react";
import Cancel from "./Cancel/Cancel";
import Return from "./Return/Return";
import Payment from "./Payment/Payment";
import Pricing from "./Pricing/Pricing";
import Shipping from "./Shipping/Shipping";
import NavBg from "../NavBg/NavBg";
import { Helmet } from "react-helmet";
import LastComp from "../LastComp/LastComp";

const TermsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Terms & Condition | Returns & Refund Policy | Cancellation Policy
        </title>
        <meta
          name="description"
          content="SCENT Terms & Condition, Returns & Refund Policy, Cancellation Policy, Payment Modes, Pricing Policy & Shipping terms."
        />
        <link rel="canonical" href="https://scentlifestyle.com/terms" />
      </Helmet>
      <NavBg />
      <Return />
      <Cancel />
      <Payment />
      <Pricing />
      <Shipping />
      <LastComp />
    </div>
  );
};

export default TermsPage;
