import React from "react";
import "./BridalMakeUpPackage.css";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import BridalMakeUpPackageHead from "./BridalMakeUpPackageHead/BridalMakeUpPackageHead";
import BridalMakeUpPackageProcess from "./BridalMakeUpPackageProcess/BridalMakeUpPackageProcess";
import BridalMakeUpPackageWhy from "./BridalMakeUpPackageWhy/BridalMakeUpPackageWhy";
import BridalMakeUpPackageCustomize from "./BridalMakeUpPackageCustomize/BridalMakeUpPackageCustomize";
import BridalMakeUpPackageCustomer from "./BridalMakeUpPackageCustomer/BridalMakeUpPackageCustomer";
import BridalMakeUpPackageBook from './BridalMakeUpPackageBook/BridalMakeUpPackageBook';
import BridalMakeUpPackageImg from "./BridalMakeUpPackageImg/BridalMakeUpPackageImg";

const BridalMakeUpPackage = () => {
  return (
    <div className="bridalMakeUpPackage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup Packages in Bangalore | Wedding Makeup Services Near Me{" "}
        </title>
        <meta
          name="description"
          content="Bridal Makeup Packages in Bangalore. Designed to make you look and feel like a princess on your special day. Book an Appointment!  "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-packages"
        />
      </Helmet>
      <NavBg />
      <BridalMakeUpPackageImg/>
      <BridalMakeUpPackageHead />
      <BridalMakeUpPackageWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeUpPackageCustomize />
      <BridalMakeUpPackageProcess />
      <BridalMakeUpPackageCustomer />
      <BridalMakeUpPackageBook/>
            
    </div>
  );
};

export default BridalMakeUpPackage;
