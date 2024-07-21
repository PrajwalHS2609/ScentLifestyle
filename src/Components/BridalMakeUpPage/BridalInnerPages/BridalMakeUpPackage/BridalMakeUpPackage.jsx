import React from "react";
import "./BridalMakeUpPackage.css";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import BridalMakeUpPackageHead from "./BridalMakeUpPackageHead/BridalMakeUpPackageHead";
import BridalMakeUpPackageProcess from "./BridalMakeUpPackageProcess/BridalMakeUpPackageProcess";
import BridalMakeUpPackageWhy from "./BridalMakeUpPackageWhy/BridalMakeUpPackageWhy";
import BridalMakeUpPackageCustomize from "./BridalMakeUpPackageCustomize/BridalMakeUpPackageCustomize";
import BridalMakeUpPackageCustomer from "./BridalMakeUpPackageCustomer/BridalMakeUpPackageCustomer";
import BridalMakeUpPackageBook from './BridalMakeUpPackageBook/BridalMakeUpPackageBook';

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
      <BridalMakeUpPackageHead />
      <BridalMakeUpPackageWhy />
      <BridalMakeUpPackageCustomize />
      <BridalMakeUpPackageProcess />
      <BridalMakeUpPackageCustomer />
      <BridalMakeUpPackageBook/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BridalMakeUpPackage;
