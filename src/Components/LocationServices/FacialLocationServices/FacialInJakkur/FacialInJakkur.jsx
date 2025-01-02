import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import FacialInJakkurImg from "./FacialInJakkurImg";
import FacialInJakkurHead from "./FacialInJakkurHead";
import FacialInJakkurBenefits from "./FacialInJakkurBenefits";
import FacialInJakkurTypes from "./FacialInJakkurTypes";
import FacialInJakkurCustomer from "./FacialInJakkurCustomer";
import FacialInJakkurWhy from "./FacialInJakkurWhy";
import FacialInJakkurBook from "./FacialInJakkurBook";
import FacialInJakkurTips from "./FacialInJakkurTips";
import facialJakkurImg from "./../../../../Images/SahakarNagar/Facials.png";
import FacialLocationImg from "../FacialLocationImg";

const FacialInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Jakkur, Bangalore | Facials Treatment near Jakkur{" "}
        </title>
        <meta
          name="description"
          content="acials in Jakkur, Bangalore. Whether you're preparing for a special occasion or simply want to indulge in some self-care, our facials offer the perfect solution to refresh and revitalize your skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-jakkur"
        />
      </Helmet>
      <FacialLocationImg img={facialJakkurImg} alt={facialJakkurImg} />
      <InnerNavi
        link="/facial"
        service="Hair Salon"
        currService="Facial salon in Jakkur"
      />
      <FacialInJakkurHead />
      <FacialInJakkurBenefits />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInJakkurTypes />
      <FacialInJakkurWhy />
      <FacialInJakkurCustomer />
      <FacialInJakkurTips />
      <FacialInJakkurBook />
    </div>
  );
};

export default FacialInJakkur;
