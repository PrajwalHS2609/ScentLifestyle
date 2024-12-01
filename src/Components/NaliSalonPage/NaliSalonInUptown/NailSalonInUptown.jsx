import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import NailSalonInUptownHead from "./NailSalonInUptownHead";
import NailSalonInUptownWhyChoose from "./NailSalonInUptownWhyChoose";
import NailSalonInUptownService from "./NailSalonInUptownService";
import NailSalonInUptownWhy from "./NailSalonInUptownWhy";
import { Helmet } from "react-helmet";
import NailSalonInLavelleImg from "../NailSalonInLavelle/NailSalonInLavelleImg";

const NailSalonInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Salon in Uptown Whitefield, Bangalore | Nail Extensions near
          Uptown Whitefield
        </title>
        <meta
          name="description"
          content="Nail Salon in Uptown Whitefield, Bangalore. Scent offers a perfect blend of luxury, comfort, and exceptional services to cater to all your nail care needs."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-salon-in-uptown-whitefield"
        />
      </Helmet>
      <NailSalonInLavelleImg />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail salon in Uptown "
      />
      <NailSalonInUptownHead/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailSalonInUptownWhyChoose/>
      <NailSalonInUptownService/>
      <NailSalonInUptownWhy/>
            
    </div>
  );
};

export default NailSalonInUptown;
