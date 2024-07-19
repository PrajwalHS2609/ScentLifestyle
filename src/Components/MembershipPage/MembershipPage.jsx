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
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import HelpNearYou from "../Help/HelpNearYou";
const MembershipPage = () => {
  return (
    <div className="membershipPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Salon Memberships in Bangalore with Big Discounts 10% to 30%
        </title>
        <meta
          name="description"
          content="Premium Salon Membership in Bangalore in all 6 Outlets, exclusive discounts on from 10% to 30% for Men & Women. Buy Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/salon-membership"
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
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default MembershipPage;
