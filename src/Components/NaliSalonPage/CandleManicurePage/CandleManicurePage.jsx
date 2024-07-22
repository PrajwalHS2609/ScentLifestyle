import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import CandleManicureBenefits from "./CandleManicureBenefits";
import CandleManicureXp from "./CandleManicureXp";
import CandleManicureHead from './CandleManicureHead';
import CandleManicureWhy from './CandleManicureWhy';
import CandleManicureBook from './CandleManicureBook';
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import CandleManicureImg from "./CandleManicureImg";


const CandleManicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Candle Spa Manicure in Bangalore | Best Candle Spa Manicure Near Me{" "}
        </title>
        <meta
          name="description"
          content="Candle Spa Manicure in Bangalore. At SCENT, we offer a sanctuary of relaxation and rejuvenation with our exquisite Candle Spa Manicure."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/candle-spa-manicure"
        />
      </Helmet>
      <NavBg />
      <CandleManicureImg/>
      <CandleManicureHead />
      <CandleManicureXp />
      <CandleManicureBenefits />
      <CandleManicureWhy />
      <CandleManicureBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default CandleManicurePage;
