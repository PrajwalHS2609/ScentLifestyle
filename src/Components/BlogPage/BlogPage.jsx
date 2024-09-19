import React from "react";
import NavBg from "../NavBg/NavBg";
import LastComp from "../LastComp/LastComp";
import NestedRoute from "./NestedRoute/NestedRoute";
import WhatsApp from './../HomePage/WhatsApp/WhatsApp';

const BlogPage = () => {
  return (
    <div className="blogPageContainer">
      <NavBg />
      <NestedRoute/>
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default BlogPage;
