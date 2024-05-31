import React from "react";
import MembershipHead from "./MembershipHead";
import MembershipPara from "./MembershipPara";
import "./MembershipPage.css";
import LastComp from "../LastComp/LastComp";
import MembershipImg from "./MembershipImg";
import MembershipPrice from "./MembershipPrice";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
const MembershipPage = () => {
  return (
    <div className="membershipPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCENT Salon Membership - Save 10% to 30% </title>
        <meta
          name="description on membership"
          content="Unlock exclusive benefits with SCENT Salon Membership and save 10% to 30% on all services. Join now for discounts on hair, nails, spa, and more!"
        />
      </Helmet>
      <NavBg />
      <MembershipImg />
      <MembershipHead />
      <MembershipPara />
      <MembershipPrice />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <LastComp />
    </div>
  );
};

export default MembershipPage;
