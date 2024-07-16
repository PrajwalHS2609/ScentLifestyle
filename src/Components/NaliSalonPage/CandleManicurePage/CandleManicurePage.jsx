import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import CandleManicureBenefits from "./CandleManicureBenefits";
import CandleManicureXp from "./CandleManicureXp";
import CandleManicureHead from './CandleManicureHead';
import CandleManicureWhy from './CandleManicureWhy';
import CandleManicureBook from './CandleManicureBook';


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
      <CandleManicureHead />
      <CandleManicureXp />
      <CandleManicureBenefits />
      <CandleManicureWhy />
      <CandleManicureBook />
    </div>
  );
};

export default CandleManicurePage;
