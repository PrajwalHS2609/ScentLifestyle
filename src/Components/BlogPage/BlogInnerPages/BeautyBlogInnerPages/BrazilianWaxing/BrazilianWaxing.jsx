import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../../NavBg/NavBg";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../../LastComp/LastComp";
import BrazilianWaxingImg from "./BrazilianWaxingImg";
import BrazilianWaxingHead from "./BrazilianWaxingHead";

const BrazilianWaxing = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Everything You Need to Know About Brazilian Waxing</title>
        <meta
          name="description"
          content="Everything You Need to Know About Brazilian Waxing! Most popular hair removal treatments across the globe, renowned for its ability to leave skin smooth and hair-free for weeks at a time."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/everything-you-need-to-know-about-brazilian-waxing "
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <BrazilianWaxingImg />
        <BrazilianWaxingHead />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BrazilianWaxing;
