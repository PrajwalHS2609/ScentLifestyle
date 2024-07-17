import React from "react";
import CutFileHead from "./CutFileHead";
import CutFileBenefits from "./CutFileBenefits";
import CutFileWhat from "./CutFileWhat";
import CutFileWhy from "./CutFileWhy";
import CutFileBook from "./CutFileBook";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";

const CutFilePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nails Cut & File in Bangalore | Best Nails Cut & File Salon Near Me
        </title>
        <meta
          name="description"
          content="Nails Cut & File in Bangalore. SCENT expert technicians ensure your nails are perfectly trimmed, shaped, and filed, leaving them looking neat and healthy."
        />
        <link
          rel="canonical"
          href=" https://scentlifestyle.com/nails-cut-and-file"
        />
      </Helmet>
      <NavBg />

      <CutFileHead />
      <CutFileBenefits />
      <CutFileWhat />
      <CutFileWhy />
      <CutFileBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default CutFilePage;
