import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import OrganicManicureHead from "../OrganicManicurePage/OrganicManicureHead";
import OrganicPedicureXp from "./OrganicPedicureXp";
import OrganicManicureBenefits from "../OrganicManicurePage/OrganicManicureBenefits";
import OrganicPedicureBenefits from './OrganicPedicureBenefits';
import OrganicPedicureMaintain from './OrganicPedicureMaintain';
import OrganicPedicureBook from './OrganicPedicureBook';

const OrganicPedicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Organic Pedicure in Bangalore | Best Organic Pedicure Near Me
        </title>
        <meta
          name="description"
          content="SCENT Organic Pedicure in Bangalore. We offer an unparalleled Organic Pedicure experience designed to provide not only aesthetic beauty but also holistic wellness."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/organic-manicure"
        />
      </Helmet>
      <NavBg />
      <OrganicManicureHead/>
      <OrganicPedicureXp/>
      <OrganicPedicureBenefits/>
      <OrganicPedicureMaintain/>
      <OrganicPedicureBook/>
    </div>
  );
};

export default OrganicPedicurePage;
