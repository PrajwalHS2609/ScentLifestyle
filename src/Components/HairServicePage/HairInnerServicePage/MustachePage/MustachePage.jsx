import React from "react";
import MustacheHead from "./MustacheHead";
import MustacheWhy from "./MustacheWhy";
import MustacheBook from "./MustacheBook";
import MustacheXp from "./MustacheXp";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import MustacheImg from "./MustacheImg";

const MustachePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mustache Styling in Bangalore | Mustache Salon Near Me </title>
        <meta
          name="description"
          content="Mustache Styling in Bangalore. Whether you prefer a classic handlebar, a sleek chevron, or a bold pencil mustache, our skilled stylists are here to cater to your unique preferences."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/mustache-styling "
        />
      </Helmet>
      <NavBg />
      <MustacheImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Mustache"
      />
      <MustacheHead />
      <MustacheWhy />
      <MustacheXp />
      <MustacheBook />

            
    </div>
  );
};

export default MustachePage;
