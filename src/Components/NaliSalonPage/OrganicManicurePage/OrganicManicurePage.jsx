import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import OrganicManicureHead from "./OrganicManicureHead";
import OrganicManicureBenefits from "./OrganicManicureBenefits";
import OrganicManicureProcess from "./OrganicManicureProcess";
import OrganicProducts from "./OrganicProducts";
import OrganicManicureMaintain from "./OrganicManicureMaintain";
import OrganicManicureBook from "./OrganicManicureBook";

const OrganicManicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Organic Manicure in Bangalore | Best Organic Manicure Near Me
        </title>
        <meta
          name="description"
          content="SCENT Organic Manicure in Bangalore. This treatment combines the finest natural and organic ingredients with expert techniques to deliver beautiful, healthy nails while minimizing environmental impact. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/organic-manicure"
        />
      </Helmet>
      <NavBg />
      <OrganicManicureHead />
      <OrganicManicureBenefits />
      <OrganicManicureProcess />
      <OrganicProducts />
      <OrganicManicureMaintain />
      <OrganicManicureBook />
    </div>
  );
};

export default OrganicManicurePage;
