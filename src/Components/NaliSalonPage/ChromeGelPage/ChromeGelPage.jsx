import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import ChromePolishHead from "./ChromePolishHead";
import ChromeGelWhy from "./ChromeGelWhy";
import ChromeProcess from "./ChromeProcess";
import ChromeGelBenefits from "./ChromeGelBenefits";
import ChromeMaintain from "./ChromeMaintain";
import ChromeGelCustomer from "./ChromeGelCustomer";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ChromeGelImg from "./ChromeGelImg";

const ChromeGelPage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Chrome Gel Nail Polish in Bangalore | Gel Nail Polish Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="SCENT offers the best Chrome Gel Nail Polish in Bangalore.  Chrome gel polish has taken the nail art world by storm with its mesmerizing mirror-like finish."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/chrome-gel-nail-polish"
        />
      </Helmet>
      <NavBg />
      <ChromeGelImg/>
      <ChromePolishHead />
      <ChromeGelWhy />
      <ChromeProcess />
      <ChromeGelBenefits />
      <ChromeMaintain />
      <ChromeGelCustomer/>
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default ChromeGelPage;
