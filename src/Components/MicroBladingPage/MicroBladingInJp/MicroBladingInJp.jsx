import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import MicroBladingInJpImg from "./MicroBladingInJpImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import MicroBladingInJpHead from "./MicroBladingInJpHead";
import MicroBladingInJpWhy from "./MicroBladingInJpWhy";
import MicroBladingInJpProcess from "./MicroBladingInJpProcess";
import MicroBladingInJpBenefits from "./MicroBladingInJpBenefits";
import MicroBladingInJpCustomer from "./MicroBladingInJpCustomer";
import MicroBladingInJpMaintain from "./MicroBladingInJpMaintain";
import MicroBladingInJpBook from "./MicroBladingInJpBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const MicroBladingInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eyebrow Microblading in JP Nagar, Bangalore | Eyebrow Microblading
          near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Eyebrow Microblading in JP Nagar, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyebrow-microblading-in-jp-nagar"
        />
      </Helmet>
      <NavBg />
      <MicroBladingInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="MicroBlading in Jp Nagar"
      />
      <MicroBladingInJpHead />
      <MicroBladingInJpWhy />
      <MicroBladingInJpProcess />
      <MicroBladingInJpBenefits />
      <MicroBladingInJpCustomer />
      <MicroBladingInJpMaintain />
      <MicroBladingInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default MicroBladingInJp;
