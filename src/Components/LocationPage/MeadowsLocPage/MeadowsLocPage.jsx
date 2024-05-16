import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LastComp from "../../LastComp/LastComp";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc5 from "./../../../Images/seegehalli - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import MeadowsLocMap from "./MeadowsLocMap/MeadowsLocMap";
import "./MeadowsLocPage.css";
import LocationNavi from "../LocationNavi/LocationNavi";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import MeadowsLocAbout from "./MeadowsLocAbout/MeadowsLocAbout";
import { Helmet } from "react-helmet";
const MeadowsLocPage = () => {
  return (
    <div className="meadowsLocPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        SCENT Salon in Whitefield - Hair, Nail, Facial, Spa, Eyelashes &
          Beauty Essentials
        </title>
        <meta
          name="SCENT Salon in Whitefield - Hair, Nail, Facial, Spa, Eyelashes & Beauty Essentials. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
          content="Scent palm meadows whitefield location"
        />
        <link
          rel="palm meadows whitefield"
          href="https://scentlifestyle.com/salon-in-whitefield		"
        />
      </Helmet>
      <LocationNavBg />
      <LocationImg img={loc5} />
      <LocationNavi loc="Palm Meadows Whitefield" />

      <LocationArrow leftLink={"/salon-in-uptown-whitefield"} rightLink={"/salon-in-jpnagar"} />
      <div className="meadowsLocPageContent">
        <LocationHead
          loc="Palm Meadows Whitefield"
          phone="+91-9686221700"
          address=" Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard
Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka
560066"
          map={<MeadowsLocMap />}
        />
        <ServiceCardContain />
        <MeadowsLocAbout />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <TextLocReviews />
      </div>
      <LastComp />
    </div>
  );
};

export default MeadowsLocPage;
