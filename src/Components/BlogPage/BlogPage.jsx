import React from "react";
import NavBg from "../NavBg/NavBg";
import LastComp from "../LastComp/LastComp";
import NestedRoute from "./NestedRoute/NestedRoute";

const BlogPage = () => {
  return (
    <div className="blogPageContainer">
      <NavBg />
      <NestedRoute/>
      <LastComp />
    </div>
  );
};

export default BlogPage;
