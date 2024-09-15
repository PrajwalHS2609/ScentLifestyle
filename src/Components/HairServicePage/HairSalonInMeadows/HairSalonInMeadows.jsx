import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInMeadowsHead from "./HairSalonInMeadowsHead/HairSalonInMeadowsHead";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairSalonInMeadowsService from "./HairSalonInMeadowsService/HairSalonInMeadowsService";
import HairSalonInMeadowsCommit from "./HairSalonInMeadowsCommit";
import HairSalonInMeadowsCustomer from "./HairSalonInMeadowsCustomer/HairSalonInMeadowsCustomer";
import HairSalonInMeadowsSpecial from "./HairSalonInMeadowsSpecial";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import HairSalonInMeadowsImg from "./HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import hairMeadowsImg from "./../../../Images/JP_Nagar/Hair.png";

const HairSalonInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in Meadows Whitefield, Bangalore | Hair Salon near
          Whitefield{" "}
        </title>
        <meta
          name="description"
          content="Hair Salon in Meadows Whitefield, Bangalore. Whether you're looking for a fresh haircut, a complete makeover, or simply a relaxing day of pampering. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-meadows-whitefield-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairMeadowsImg} alt={hairMeadowsImg} />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Meadows"
      />
      <HairSalonInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSalonInMeadowsService />
      <HairSalonInMeadowsCommit />
      <HairSalonInMeadowsCustomer />
      <HairSalonInMeadowsSpecial />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInMeadows;
