import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import OrganicManicureHead from "../OrganicManicurePage/OrganicManicureHead";
import OrganicPedicureXp from "./OrganicPedicureXp";
import OrganicPedicureBenefits from "./OrganicPedicureBenefits";
import OrganicPedicureMaintain from "./OrganicPedicureMaintain";
import OrganicPedicureBook from "./OrganicPedicureBook";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

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
      <OrganicManicureHead />
      <OrganicPedicureXp />
      <OrganicPedicureBenefits />
      <OrganicPedicureMaintain />
      <OrganicPedicureBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default OrganicPedicurePage;
