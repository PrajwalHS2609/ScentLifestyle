import React from "react";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import nailExtensionSahakaraImg from "./../../../Images/NailSalonInnerPages/Nail Extension.png";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import NailExtensionInSahakaraHead from "./NailExtensionInSahakaraHead";
import NailExtensionInSahakaraWhy from "./NailExtensionInSahakaraWhy";
import NailExtensionInSahakaraExpertise from "./NailExtensionInSahakaraExpertise";
import NailExtensionInSahakaraHigh from "./NailExtensionInSahakaraHigh";
import NailExtensionInSahakaraDesign from "./NailExtensionInSahakaraDesign";
import NailExtensionInSahakaraXp from "./NailExtensionInSahakaraXp";
import NailExtensionInSahakaraMaintain from "./NailExtensionInSahakaraMaintain";
import NailExtensionInSahakaraLuxury from "./NailExtensionInSahakaraLuxury";
import NailExtensionInSahakaraWhyChoose from "./NailExtensionInSahakaraWhyChoose";
import NailExtensionInSahakaraBook from "./NailExtensionInSahakaraBook";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";

const NailExtensionInSahakaraNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extensions near Sahakara Nagar | Nail Extension Price in Sahakara
          Nagar
        </title>
        <meta
          name="description"
          content="Nail Extensions near Sahakara Nagar. We understand that your nails are an essential part of your style, and they deserve to be pampered and enhanced. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-near-sahakaranagar"
        />
      </Helmet>
      <HairSalonInMeadowsImg
        img={nailExtensionSahakaraImg}
        alt={nailExtensionSahakaraImg}
      />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail Extension in Sahakara Nagar"
      />
      <NailExtensionInSahakaraHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionInSahakaraWhy />
      <NailExtensionInSahakaraExpertise />
      <NailExtensionInSahakaraHigh />
      <NailExtensionInSahakaraDesign />
      <NailExtensionInSahakaraXp />
      <NailExtensionInSahakaraMaintain />
      <NailExtensionInSahakaraLuxury />
      <NailExtensionInSahakaraWhyChoose />
      <NailExtensionInSahakaraBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailExtensionInSahakaraNagar;
