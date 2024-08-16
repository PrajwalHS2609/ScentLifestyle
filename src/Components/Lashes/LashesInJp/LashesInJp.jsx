import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import LashesInJpHead from "./LashesInJpHead";
import LashesInJpImg from "./LashesInJpImg";
import NavBg from "../../NavBg/NavBg";
import LashesInJpWhy from "./LashesInJpWhy";
import LashesInJpService from "./LashesInJpService";
import LashesInJpCustomer from "./LashesInJpCustomer";
import LashesInJpMaintain from "./LashesInJpMaintain";
import LashesInJpBook from "./LashesInJpBook";
import LashesInJpBenefits from './LashesInJpBenefits';

const LashesInJp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in JP Nagar, Bangalore | Eye Lash Extensions near JP Nagar{" "}
        </title>
        <meta
          name="description"
          content="Eye Lashes in JP Nagar, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-jp-nagar "
        />
      </Helmet>
      <NavBg />
      <LashesInJpImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Facial in Jp Nagar"
      />
      <LashesInJpHead />
      <LashesInJpWhy />
      <LashesInJpService />
      <LashesInJpBenefits/>
      <LashesInJpCustomer />
      <LashesInJpMaintain />
      <LashesInJpBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default LashesInJp;
