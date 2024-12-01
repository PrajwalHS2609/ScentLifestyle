import React from "react";
import "./NailExtensionPage.css";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import NailExtensionHead from "./NailExtensionHead/NailExtensionHead";
import NailExtensionMaintain from "./NailExtensionMaintain/NailExtensionMaintain";
import NailExtensionWhy from "./NailExtensionWhy/NailExtensionWhy";
import NailSalonBook from "./NailSalonBook/NailSalonBook";
import SalonXp from "./SalonXp/SalonXp";
import NailArtDesign from "./NailArtDesign/NailArtDesign";
import NailExtensionImg from "./NailExtensionImg/NailExtensionImg";

const NailExtensionPage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extension in Bangalore | Nail Extension Salon Near Me
        </title>
        <meta
          name="description"
          content="Experience the Best Nail Extension in Bangalore, offering top-notch nail services that combine creativity, precision, and high-quality products. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nails-extension "
        />
      </Helmet>
      <NavBg />
      <NailExtensionImg />
      <NailExtensionHead />
      <NailExtensionMaintain />
      <NailExtensionWhy />
      <SalonXp />
      <NailArtDesign />
      <NailSalonBook />
            
    </div>
  );
};

export default NailExtensionPage;
