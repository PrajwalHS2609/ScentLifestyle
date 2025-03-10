import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import GelNailArtHead from "./GelNailArtHead";
import GelNailArtBenefits from "./GelNailArtBenefits";
import GelNailArtPageMaintain from "./GelNailArtPageMaintain";
import GelNailArtBook from "./GelNailArtBook";
import GelNailArtCustomer from "./GelNailArtCustomer";
import GelNailArtPageImg from "./GelNailArtPageImg";

const GelNailArtPage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gel Nail Art in Bangalore | Gel Nail Art Salon Near Me </title>
        <meta
          name="description"
          content="Experience the Best Nail Extension in Bangalore, top-notch gel nail art services, ensuring your nails look stunning and stay durable for weeks.  "
        />
        <link rel="canonical" href="https://scentlifestyle.com/gel-nail-art" />
      </Helmet>
      <NavBg />
      <GelNailArtPageImg/>
      <GelNailArtHead />
      <GelNailArtBenefits/>
      <GelNailArtPageMaintain/>
      <GelNailArtBook/>
      <GelNailArtCustomer/>
      
    </div>
  );
};

export default GelNailArtPage;
