import React from "react";
import KeratinTreatment from "./../../../Images/Hair Treatments/Keratin.png";
import KeratinHead from "./KeratinHead";
import KeratinBenefits from "./KeratinBenefits";
import KeratinProcess from "./KeratinProcess";
import KeratinWhy from "./KeratinWhy";
import KeratinMaintain from "./KeratinMaintain";
import KeratinBook from "./KeratinBook";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import BotoxImg from "../Botox/BotoxImg/BotoxImg";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";

const Keratin = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Keratin Hair Treatments in Bangalore | Keratin Hair Spa near Me{" "}
        </title>
        <meta
          name="description"
          content="Keratin Hair Treatments in Bangalore. At SCENT, we offer top-quality treatments that leaves your hair smooth, shiny, and frizz-free for months."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/keratin-hair-treatments-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BotoxImg img={KeratinTreatment} />
      {/* <InnerNavi link="/spa" service="Spa" currService="Head Massage" /> */}
      <KeratinHead />
      <KeratinBenefits />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <KeratinProcess />
      <KeratinWhy />
      <KeratinMaintain />
      <KeratinBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default Keratin;
