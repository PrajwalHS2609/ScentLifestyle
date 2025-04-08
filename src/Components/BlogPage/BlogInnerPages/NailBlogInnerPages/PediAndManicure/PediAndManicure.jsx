import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../../NavBg/NavBg";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import PediAndManicureImg from "./PediAndManicureImg/PediAndManicureImg";
import PediAndManicureHead from "./PediAndManicureHead/PediAndManicureHead";
import PediAndManicureBenefits from "./PediAndManicureBenefits/PediAndManicureBenefits";
import PediAndManicureWhat from "./PediAndManicureWhat/PediAndManicureWhat";
import pedimanicureBenefits from "./../../../../../Images/Blog/Pedi&manicureBlog/The Benefits of Professional Pedicures and Manicures.png";
import pedimanicureWhat from "./../../../../../Images/Blog/Pedi&manicureBlog/What Is a Professional Pedicure and Manicure.png";
import HairServImg from "../../HairBotox/HairServImg";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const PediAndManicure = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Exploring the Benefits of Professional Pedicures and Manicures{" "}
        </title>
        <meta
          name="description"
          content="Exploring the Benefits of Professional Pedicures and Manicures"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/why-you-should-consider-keratin-hair-treatment"
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <PediAndManicureImg />
          <InnerNavi link="/blog" service="Blog" currService="Nail Blog" />
          <PediAndManicureHead />
          <HairServImg hairBotoxImg={pedimanicureWhat} />
          <PediAndManicureWhat />
          <HairServImg hairBotoxImg={pedimanicureBenefits} />
          <PediAndManicureBenefits />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default PediAndManicure;
