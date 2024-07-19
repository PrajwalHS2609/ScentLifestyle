import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import ChromePolishHead from "./ChromePolishHead";
import ChromeGelWhy from "./ChromeGelWhy";
import ChromeProcess from "./ChromeProcess";
import ChromeGelBenefits from "./ChromeGelBenefits";
import ChromeMaintain from "./ChromeMaintain";
import ChromeGelCustomer from "./ChromeGelCustomer";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

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
      <ChromePolishHead />
      <ChromeGelWhy />
      <ChromeProcess />
      <ChromeGelBenefits />
      <ChromeMaintain />
      <ChromeGelCustomer/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default ChromeGelPage;
