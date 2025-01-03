import React from "react";
import NailSalonInMeadowsService from "./NailSalonInMeadowsService";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import NailSalonInMeadowsHead from "./NailSalonInMeadowsHead";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import NailSalonInMeadowsWhy from "./NailSalonInMeadowsWhy";
import NailSalonInMeadowsSpecial from "./NailSalonInMeadowsSpecial";
import NailSalonInMeadowsCustomer from "./NailSalonInMeadowsCustomer";
import NailSalonInMeadowsLoc from "./NailSalonInMeadowsLoc";
import nailMeadowsImg from "./../../../../Images/SahakarNagar/Nail.png";
import NailLocationImg from "../NailLocationImg";

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
      <NailLocationImg img={nailMeadowsImg} alt="nailMeadowsImg" />
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
            
    </div>
  );
};

export default NailSalonInMeadows;
