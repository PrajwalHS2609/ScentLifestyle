import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairKeratinHead from "./HairKeratinHead";
import HairKeratinBenefits from "./HairKeratinBenefits";
import HairKeratinProcess from "./HairKeratinProcess";
import HairKeratinRight from "./HairKeratinRight";
import HairKeratinMisconception from "./HairKeratinMisconception";
import HairKeratinMaintain from "./HairKeratinMaintain";
import HairKeratinImg from "./HairKeratinImg";
import HairServImg from "../HairBotox/HairServImg";
import hairKeratinBenefits from "./../../../../Images/Blog/Keratin_Hair_Treatment/Benefits of Keratin Hair Treatment.png";
import hairKeratinProcess from "./../../../../Images/Blog/Keratin_Hair_Treatment/The Keratin Hair Treatment Process.png";
import hairKeratinMaintain from "./../../../../Images/Blog/Keratin_Hair_Treatment/Post-Treatment Care and Maintenance.png";
import hairKeratinMisconception from "./../../../../Images/Blog/Keratin_Hair_Treatment/Common Misconceptions About Keratin Hair Treatment.png";
import hairKeratinRight from "./../../../../Images/Blog/Keratin_Hair_Treatment/Is Keratin Hair Treatment Right for You.png";
import BlogSideBar from "../../BlogSideBar/BlogSideBar";

const HairKeratin = () => {
  return (
    <div className="hairTrim">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Why You Should Consider Keratin Hair Treatment? </title>
        <meta
          name="description"
          content="Why You Should Consider Keratin Hair Treatment? It's essential to understand what keratin is and its role in maintaining healthy hair."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/why-you-should-consider-keratin-hair-treatment"
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <HairKeratinImg />
          <InnerNavi link="/blog" service="Blog" currService="Hair Blog" />
          <HairKeratinHead />
          <HairServImg hairBotoxImg={hairKeratinBenefits} />
          <HairKeratinBenefits />
          <HairServImg hairBotoxImg={hairKeratinProcess} />
          <HairKeratinProcess />
          <HairServImg hairBotoxImg={hairKeratinMaintain} />
          <HairKeratinMaintain />
          <HairServImg hairBotoxImg={hairKeratinMisconception} />
          <HairKeratinMisconception />
          <HairServImg hairBotoxImg={hairKeratinRight} />
          <HairKeratinRight />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>

        </div>
      </div>
    </div>
  );
};

export default HairKeratin;
