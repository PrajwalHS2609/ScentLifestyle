import React from "react";
import CandlePedicureHead from "./CandlePedicureHead";
import CandlePedicureWhy from "./CandlePedicureWhy";
import CandlePedicureWhat from "./CandlePedicureWhat";
import CandlePedicureCustomer from "./CandlePedicureCustomer";
import CandlePedicureBook from "./CandlePedicureBook";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";

const CandlePedicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Candle Spa Pedicure in Bangalore | Best Candle Spa Pedicure Near Me{" "}
        </title>
        <meta
          name="description"
          content=" Candle Spa Pedicure in Bangalore. This indulgent treatment not only pampers your feet but also soothes your senses with the calming ambiance of candles."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/candle-spa-pedicure"
        />
      </Helmet>
      <NavBg />
      <CandlePedicureHead />
      <CandlePedicureWhy />
      <CandlePedicureWhat />
      <CandlePedicureWhy />
      <CandlePedicureCustomer />
      <CandlePedicureBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default CandlePedicurePage;
