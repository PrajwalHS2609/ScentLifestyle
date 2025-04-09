import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import AcademyEnrollImg from "./AcademyEnrollImg";
import AcademyEnrollHead from "./AcademyEnrollHead";
import AcademyEnrollReasons from "./AcademyEnrollReasons";
import AcademyEnrollWhy from "./AcademyEnrollWhy";
import HairServImg from "../../HairBotox/HairServImg";
import academyEnrollWhy from "./../../../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Why Choose the Best Salon Academy of Bangalore.png";
import academyEnrollRealize from "./../../../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Realize Your Dreams Today.png";
import AcademyEnrollRealize from "./AcademyEnrollRealize";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const AcademyEnroll = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Top 10 Reasons to Enroll in Our Premier Salon Academy Today
        </title>
        <meta
          name="description"
          content="Top 10 Reasons to Enroll in Our Premier Salon Academy Today. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/top-10-reasons-to-enroll-in-our-premier-salon-academy-today"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <AcademyEnrollImg />
          <InnerNavi link="/blog" service="Blog" currService="Academy Enroll" />
          <AcademyEnrollHead />
          <br />
          <AcademyEnrollReasons />
          <br />
          <HairServImg hairBotoxImg={academyEnrollWhy} />
          <AcademyEnrollWhy />
          <br />
          <br />
          <HairServImg hairBotoxImg={academyEnrollRealize} />
          <AcademyEnrollRealize />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>
        </div>
      </div>
    </div>
  );
};

export default AcademyEnroll;
