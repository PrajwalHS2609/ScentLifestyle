import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import facialSahakarImg from "./../../../Images/SahakarNagar/Facials.png";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import FacialInSahakaraNagarHead from './FacialInSahakaraNagarHead';
import FacialInSahakaraNagarWhy from './FacialInSahakaraNagarWhy';
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import FacialInSahakaraNagarXp from "./FacialInSahakaraNagarXp";
import FacialInSahakaraNagarImp from './FacialInSahakaraNagarImp';
import FacialInSahakaraNagarBook from './FacialInSahakaraNagarBook';
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const FacialInSahakaraNagar = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Sahakara Nagar, Bangalore | Facials Treatment near Sahakara
          Nagar
        </title>
        <meta
          name="description"
          content="Facials in Sahakara Nagar, Bangalore. We specialize in a range of facial treatments that not only enhance your natural beauty but also promote the overall health of your skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-sahakara-nagar-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={facialSahakarImg} alt={facialSahakarImg} />
      <InnerNavi
        link="/facial"
        service="Facial"
        currService="Facial in Sahakara Nagar"
      />
      <FacialInSahakaraNagarHead />
      <FacialInSahakaraNagarWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInSahakaraNagarXp />
      <FacialInSahakaraNagarImp />
      <FacialInSahakaraNagarBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default FacialInSahakaraNagar;
