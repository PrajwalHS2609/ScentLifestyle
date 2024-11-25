import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import HairSalonInUptownExpert from "./HairSalonInUptownExpert";
import HairSalonInUptownBook from "./HairSalonInUptownBook";
import HairsalonInUptownWhyChoose from "./HairsalonInUptownWhyChoose/HairsalonInUptownWhyChoose";
import HairsalonInUptownService from "./HairsalonInUptownService/HairsalonInUptownService";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairSalonInUptownHead from "./HairSalonInUptownHead/HairSalonInUptownHead";
import HairSalonInLavelleImg from "../HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import hairUptownImg from "./../../../Images/SahakarNagar/Hair.png";

const HairSalonInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in Uptown Whitefield, Bangalore | Hair Salon near
          Whitefield
        </title>
        <meta
          name="description"
          content="Hair Salon in Uptown Whitefield, Bangalore. Whether you're looking for a fresh haircut, a complete makeover, or simply a relaxing day of pampering. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairUptownImg} alt={hairUptownImg} />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Uptown"
      />
      <HairSalonInUptownHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSalonInUptownExpert />
      <HairsalonInUptownWhyChoose />
      <HairsalonInUptownService />
      <HairSalonInUptownBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInUptown;
