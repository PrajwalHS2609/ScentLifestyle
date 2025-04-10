import React from "react";
import SummerCareImg from "./SummerCareImg";
import SummerCareHead from "./SummerCareHead";
import SummerCareContent from "./SummerCareContent";
import { Helmet } from "react-helmet";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const SummerCare = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Revitalize Your Hair with the Magic of Shea Butter Hair Spa!
        </title>
        <meta
          name="description"
          content="Revitalize Your Hair with the Magic of Shea Butter Hair Spa! This deeply nourishing treatment is designed to hydrate, strengthen, and rejuvenate your locks, leaving them silky, soft, and radiant. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <SummerCareImg />
          <SummerCareHead />
          <br />
          <SummerCareContent />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default SummerCare;
