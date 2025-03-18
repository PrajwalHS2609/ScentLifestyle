import React from "react";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import FacialInLavelleHead from "./FacialInLavelleHead";
import FacialInLavelleWhy from "./FacialInLavelleWhy";
import FacialInLavelleService from "./FacialInLavelleService";
import FacialInLavelleXp from "./FacialInLavelleXp";
import FacialInLavelleDiff from "./FacialInLavelleDiff";
import FacialInLavelleCustomer from "./FacialInLavelleCustomer";
import FacialInLavelleBook from "./FacialInLavelleBook";
import FacialLocationImg from "../FacialLocationImg";
import facialLavelleImg from "./../../../Images/SahakarNagar/Facials.png";

const FacialInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Lavelle Road, Bangalore | Facials Treatment near Lavelle
          Road{" "}
        </title>
        <meta
          name="description"
          content="Facials in JP Nagar, Bangalore. We specialize in a range of facial treatments that not only enhance your natural beauty but also promote the overall health of your skin"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-lavelle-road  "
        />
      </Helmet>
      <NavBg />
      <FacialLocationImg img={facialLavelleImg} alt="facialLavelleImg" />
      <InnerNavi
        link="/facial"
        service="Hair Salon"
        currService="Hair salon in Lavelle"
      />
      <FacialInLavelleHead />
      <FacialInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInLavelleService />
      <FacialInLavelleXp />
      <FacialInLavelleDiff />
      <FacialInLavelleCustomer />
      <FacialInLavelleBook />
            
    </div>
  );
};

export default FacialInLavelle;
