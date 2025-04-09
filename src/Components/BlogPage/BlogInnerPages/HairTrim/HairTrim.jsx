import React from "react";
import "./HairTrim.css";
import NavBg from "../../../NavBg/NavBg";
import HairTrimFaq from "./HairTrimFaq";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import HairTrimImg from "./HairTrimImg";
import HairTrimHead from "./HairTrimHead";
import BlogSideBar from "../../BlogSideBar/BlogSideBar";
const HairTrim = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Does Trimming Hair Make It Grow Faster?</title>
        <meta
          name="description"
          content="Does Trimming Hair Make It Grow Faster? Trimming your hair regularly is key to maintaining long, healthy locks. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair/does-trimming-hair-make-it-grow-faster"
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <HairTrimImg />
          <InnerNavi link="/blog" service="Blog" currService="Hair" />
          <HairTrimHead />
          <HairTrimFaq />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default HairTrim;
