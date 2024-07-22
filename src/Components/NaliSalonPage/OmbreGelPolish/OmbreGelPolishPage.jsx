import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import OmbreGelPolishHead from "./OmbreGelPolishHead";
import SalonXp from "./SalonXp";
import OmbreProcess from "./OmbreProcess";
import OmbreGelPolishMaintain from "./OmbreGelPolishMaintain";
import OmbreGelPolishBook from "./OmbreGelPolishBook";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import OmbreGelPolishImg from "./OmbreGelPolishImg";

const OmbreGelPolishPage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ombre Gel Nail Polish in Bangalore | Ombre Nail Polish Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="SCENT offers the best Ombre Gel Nail Polish in Bangalore.  Where we redefine beauty with our exquisite range of nail treatments. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/ombre-gel-nail-polish"
        />
      </Helmet>
      <NavBg />
      <OmbreGelPolishImg/>
     <OmbreGelPolishHead/>
     <SalonXp/>
     <OmbreProcess/>
     <OmbreGelPolishMaintain/>
     <OmbreGelPolishBook/>
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

export default OmbreGelPolishPage;
