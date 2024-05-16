import React from "react";
import "./JakkuruLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LastComp from "../../LastComp/LastComp";
import JakkuruLocMap from "./JakkuruLocMap/JakkuruLocMap";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc3 from "./../../../Images/jakkur.jpg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import LocationNavi from "./../LocationNavi/LocationNavi";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import JakkuruLocAbout from "./JakkuruLocAbout/JakkuruLocAbout";
import { Helmet } from "react-helmet";
const JakkuruLocPage = () => {
  return (
    <div className="jakkuruLocPageContainer">
       <Helmet>
        <meta charSet="utf-8" />
        <title>
        SCENT Salon in Jakkuru - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials
        </title>
        <meta
          name="SCENT Salon in Jakkuru - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
          content="Scent jakkuru location"
        />
        <link
          rel="jakkuru"
          href="https://scentlifestyle.com/salon-in-jakkuru	"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc3} />
      <LocationNavi loc="Jakkuru" />
      <LocationArrow leftLink={"/salon-in-lavelle-road"} rightLink={"/salon-in-uptown-whitefield"} />
      <div className="jakkuruLocPageContent">
        <LocationHead
          loc="Jakkuru"
          phone="+91-9742212700"
          address="Dr.Shivaram Karanth Nagar, Jakkuru, Bengaluru, Karnataka 560077"
          map={<JakkuruLocMap />}
        />
        <ServiceCardContain />
        <JakkuruLocAbout />
        <TextLocReviews />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
      </div>
      <LastComp />
    </div>
  );
};

export default JakkuruLocPage;
