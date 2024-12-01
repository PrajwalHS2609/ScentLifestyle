import React from "react";
import "./OrganicFacial.css"
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import OrganicFacialHead from "./OrganicFacialHead/OrganicFacialHead";
import OrganicFacialWhy from "./OrganicFacialWhy/OrganicFacialWhy";
import OrganicFacialDiff from "./OrganicFacialDiff/OrganicFacialDiff";
import OrganicFacialProcess from "./OrganicFacialProcess/OrganicFacialProcess";
import OrganicFacialCustomer from "./OrganicFacialCustomer/OrganicFacialCustomer";
import OrganicFacialBook from "./OrganicFacialBook/OrganicFacialBook";
import OrganicFacialImg from "./OrganicFacialImg/OrganicFacialImg";

const OrganicFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Organic Facial Services in Bangalore | Best Facials Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Organic Facial Services in Bangalore. Our treatments are designed to rejuvenate your skin using the finest organic ingredients, providing a holistic approach to skincare that is both effective and gentle."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/organic-facial-services"
        />
      </Helmet>
      <NavBg />
      <OrganicFacialImg/>
      <OrganicFacialHead />
      <OrganicFacialWhy />
      <OrganicFacialDiff />
      <OrganicFacialProcess />
      <OrganicFacialCustomer />
      <OrganicFacialBook />
            
    </div>
  );
};

export default OrganicFacial;
