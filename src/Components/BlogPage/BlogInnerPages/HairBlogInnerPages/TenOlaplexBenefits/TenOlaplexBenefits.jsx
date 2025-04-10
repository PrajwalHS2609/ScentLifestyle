import React from "react";
import { Helmet } from "react-helmet";
import TenOlaplexBenefitsImg from "./TenOlaplexBenefitsImg";
import TenOlaplexBenefitsHead from "./TenOlaplexBenefitsHead";
import TenOlaplexTreatmentBenefits from "./TenOlaplexTreatmentBenefits";
import TenOlaplexBenefitsFinal from "./TenOlaplexBenefitsFinal";
import HairServImg from "../../HairBotox/HairServImg";
import olaplexBenefitsImg from "./../../../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Repairs Damaged Hair from Within.png";
import olaplexBenefitsFinalImg from "./../../../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/final thoughts.png";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";
const TenOlaplexBenefits = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>10 Amazing Benefits of Olaplex Hair Treatment </title>
        <meta
          name="description"
          content="10 Amazing Benefits of Olaplex Hair Treatments has emerged as a revolutionary haircare solution, trusted by professionals and beauty lovers alike."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/10-amazing-benefits-of-olaplex-hair-treatment"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <TenOlaplexBenefitsImg />
          <TenOlaplexBenefitsHead />
          <br />
          <HairServImg hairBotoxImg={olaplexBenefitsImg} />
          <TenOlaplexTreatmentBenefits />
          <br />
          <HairServImg hairBotoxImg={olaplexBenefitsFinalImg} />
          <TenOlaplexBenefitsFinal />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default TenOlaplexBenefits;
