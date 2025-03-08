import React from "react";
import "./About.css";
import AboutHeader from "./AboutHeader";
import AboutOwner from "./AboutOwner";
import AboutContent from "./AboutContent";
import AboutVision from "./AboutVision";
import { Helmet } from "react-helmet";
// import AboutEconomics from "./AboutEconomics";
// import AboutMarket from "./AboutMarket";
// import AboutSize from "./AboutSize";
// import AboutEnd from "./AboutEnd";
const AboutPage = () => {
  return (
    <div className="about-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Krishma Lobo - Owner of the SCENT Lifestyle</title>
        <meta
          name="description"
          content="Scent is a sanctum where life comes to beauty and beauty to life. A makeover at scent will be the crown of your looks."
        />
        <link rel="canonical" href="https://scentlifestyle.com/about-us" />
      </Helmet>
      <AboutHeader />
      <AboutOwner />
      <AboutContent />
      <AboutVision />
      {/* <AboutEconomics/>
      <AboutMarket/>
      <AboutSize/>
      <AboutEnd/> */}
    </div>
  );
};

export default AboutPage;
