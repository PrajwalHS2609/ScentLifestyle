import React from "react";
import CandlePedicureHead from "./CandlePedicureHead";
import CandlePedicureWhy from "./CandlePedicureWhy";
import CandleManicureBenefits from "../CandleManicurePage/CandleManicureBenefits";
import CandlePedicureWhat from "./CandlePedicureWhat";
import CandlePedicureCustomer from "./CandlePedicureCustomer";
import CandlePedicureBook from "./CandlePedicureBook";

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
      <CandleManicureBenefits />
      <CandlePedicureWhat />
      <CandlePedicureWhy />
      <CandlePedicureCustomer />
      <CandlePedicureBook />
    </div>
  );
};

export default CandlePedicurePage;
