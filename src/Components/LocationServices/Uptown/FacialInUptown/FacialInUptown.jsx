import React from "react";
import FacialInUptownHead from "./FacialInUptownHead";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import FacialInUptownWhyChoose from "./FacialInUptownWhyChoose";
import FacialInUptownBenefits from "./FacialInUptownBenefits";
import FacialInUptownTypes from "./FacialInUptownTypes";
import FacialInUptownWhat from "./FacialInUptownWhat";
import FacialInUptownSpecial from "./FacialInUptownSpecial";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import facialJpImg from "./../../../../Images/SahakarNagar/Facials.png";
import LocationServicesImg from "../../LocationServicesImg";

const FacialInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Uptown Whitefield, Bangalore | Facials Treatment near
          Uptown Whitefield
        </title>
        <meta
          name="description"
          content="Facials in Uptown Whitefield, Bangalore. We specialize in a range of facial treatments that not only enhance your natural beauty but also promote the overall health of your skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-uptown-whitefield-bangalore"
        />
      </Helmet>
      <LocationServicesImg img={facialJpImg} alt="facialJpImg" />
      <InnerNavi
        link="/facial"
        service="Facial"
        currService="Facial in Uptown "
      />
      <FacialInUptownHead />
      <FacialInUptownWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInUptownBenefits />
      <FacialInUptownTypes />
      <FacialInUptownWhat />
      <FacialInUptownSpecial /> 
            
    </div>
  );
};

export default FacialInUptown;
