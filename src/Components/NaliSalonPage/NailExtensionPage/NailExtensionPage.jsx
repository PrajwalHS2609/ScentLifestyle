import React from "react";
import "./NailExtensionPage.css";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import NailExtensionHead from "./NailExtensionHead/NailExtensionHead";
import NailExtensionType from "./NailExtensionType/NailExtensionType";
import NailExtensionMaintain from "./NailExtensionMaintain/NailExtensionMaintain";

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
      <NavBg/>
      <NailExtensionHead />
      <NailExtensionType/>
      <NailExtensionMaintain/>
    </div>
  );
};

export default NailExtensionPage;
