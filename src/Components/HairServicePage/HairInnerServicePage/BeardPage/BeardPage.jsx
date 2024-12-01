import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import BeardHead from "./BeardHead";
import BeardXp from "./BeardXp";
import BeardWhy from "./BeardWhy";
import BeardBook from "./BeardBook";
import NavBg from "../../../NavBg/NavBg";
import BeardImg from "./BeardImg";

const BeardPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beard Stylist in Bangalore | Beard Salon Near Me</title>
        <meta
          name="description"
          content="Beard Stylist in Bangalore. A well-groomed beard can transform a man's appearance, adding a touch of elegance and confidence."
        />
        <link rel="canonical" href="https://scentlifestyle.com/beard" />
      </Helmet>
      <NavBg />
      <BeardImg />
      <InnerNavi link="/hair-salon" service="Hair Salon" currService="Beard" />
      <BeardHead />
      <BeardXp />
      <BeardWhy />
      <BeardBook />
            
    </div>
  );
};

export default BeardPage;
