import React from "react";
import ClassicPedicureHead from "./ClassicPedicureHead";
import ClassicPedicureMaintain from "./ClassicPedicureMaintain";
import ClassicPedicureXp from "./ClassicPedicureXp";
import ClassicPedicureBenefits from "./ClassicPedicureBenefits";
import ClassicPedicureBook from "./ClassicPedicureBook";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";

const ClassicPedicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Classic Manicure in Bangalore | Best Manicure Treatment Near Me
        </title>
        <meta
          name="description"
          content="SCENT Classic Pedicure in Bangalore. Designed to provide you with a rejuvenating experience that combines meticulous care with luxurious indulgence."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/classic-pedicure      "
        />
      </Helmet>
      <NavBg />
      <ClassicPedicureHead />
      <ClassicPedicureXp />
      <ClassicPedicureBenefits />
      <ClassicPedicureMaintain />
      <ClassicPedicureBook />
    </div>
  );
};

export default ClassicPedicurePage;
