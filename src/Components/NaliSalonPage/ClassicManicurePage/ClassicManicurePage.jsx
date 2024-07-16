import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import ClassicManicureHead from "./ClassicManicureHead";
import ClassicManicureWhy from "./ClassicManicureWhy";
import ClassicManiBenefits from "./ClassicManicureBenefits";
import ClassicManicureProcess from "./ClassicManicureProcess";
import ClassicManiMaintain from "./ClassicManicureMaintain";
import ClassicManiBook from "./ClassicManicureBook";

const ClassicManicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Classic Manicure in Bangalore | Best Manicure Treatment Near Me
        </title>
        <meta
          name="description"
          content="SCENT Classic Manicure in Bangalore, service combines expert care with luxurious pampering to deliver results that are both beautiful and long-lasting."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/classic-manicure"
        />
      </Helmet>
      <NavBg />
      <ClassicManicureHead/>
      <ClassicManicureWhy/>
      <ClassicManiBenefits/>
      <ClassicManicureProcess/>
      <ClassicManiMaintain/>
      <ClassicManiBook/>
    </div>
  );
};

export default ClassicManicurePage;
