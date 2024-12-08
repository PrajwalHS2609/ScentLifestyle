import React from "react";
import NavBg from "../NavBg/NavBg";
import NestedRoute from "./NestedRoute/NestedRoute";

const BlogPage = () => {
  return (
    <div className="blogPageContainer">
      <NavBg />
      <NestedRoute />
    </div>
  );
};

export default BlogPage;
