import React from "react";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import NailSalonInMeadowsService from "./NailSalonInMeadowsService";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import NailSalonInMeadowsHead from "./NailSalonInMeadowsHead";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import LastComp from "../../LastComp/LastComp";
import NailSalonInMeadowsWhy from "./NailSalonInMeadowsWhy";
import NailSalonInMeadowsSpecial from "./NailSalonInMeadowsSpecial";
import NailSalonInMeadowsCustomer from "./NailSalonInMeadowsCustomer";
import NailSalonInMeadowsLoc from "./NailSalonInMeadowsLoc";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import nailMeadowsImg from "./../../../Images/JP_Nagar/Nail.png";

const NailSalonInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Salon in Meadows Whitefield, Bangalore | Nail Extensions near
          Whitefield
        </title>
        <meta
          name="description"
          content="Nail Salon in Meadows Whitefield, Bangalore. Scent offers a perfect blend of luxury, comfort, and exceptional services to cater to all your nail care needs."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-salon-in-meadows-whitefield"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={nailMeadowsImg} alt={nailMeadowsImg} />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail salon in Meadows"
      />
      <NailSalonInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailSalonInMeadowsService />
      <NailSalonInMeadowsWhy />
      <NailSalonInMeadowsSpecial />
      <NailSalonInMeadowsCustomer />
      <NailSalonInMeadowsLoc />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailSalonInMeadows;
