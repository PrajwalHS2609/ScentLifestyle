import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NailSalonInJakkurImg from "./NailSalonInJakkurImg";
import NavBg from "../../NavBg/NavBg";
import NailSalonInJakkurHead from "./NailSalonInJakkurHead";
import NailSalonInJakkurWhy from "./NailSalonInJakkurWhy";
import NailSalonInJakkurCustomer from "./NailSalonInJakkurCustomer";
import NailSalonInJakkurTips from "./NailSalonInJakkurTips";
import NailSalonInJakkurBook from "./NailSalonInJakkurBook";
import NailSalonInJakkurService from "./NailSalonInJakkurService";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const NailSalonInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Salon in Jakkur, Bangalore | Nail Extensions near Jakkur{" "}
        </title>
        <meta
          name="description"
          content="Nail Salon in Jakkur, Bangalore is the perfect destination for anyone looking to indulge in top-notch nail care. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-salon-in-jakkur"
        />
      </Helmet>
      <NavBg />
      <NailSalonInJakkurImg />
      <InnerNavi
        link="/nail-salon"
        service="Hair Salon"
        currService="Nail salon in Jakkur"
      />
      <NailSalonInJakkurHead />
      <NailSalonInJakkurWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailSalonInJakkurService />
      <NailSalonInJakkurCustomer />
      <NailSalonInJakkurTips />
      <NailSalonInJakkurBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailSalonInJakkur;