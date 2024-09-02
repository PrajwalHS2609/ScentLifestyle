import React from "react";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";

const MicroBladingInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Lavelle Road, Bangalore | Facials Treatment near Lavelle
          Road{" "}
        </title>
        <meta
          name="description"
          content="Facials in JP Nagar, Bangalore. We specialize in a range of facial treatments that not only enhance your natural beauty but also promote the overall health of your skin"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-lavelle-road  "
        />
      </Helmet>
      <NavBg />
      <HairSalonInLavelleImg />
      <InnerNavi
        link="/facial"
        service="Hair Salon"
        currService="Hair salon in Lavelle"
      />
      <FacialInLavelleHead />
      <FacialInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInLavelleService />
      <FacialInLavelleXp />
      <FacialInLavelleDiff />
      <FacialInLavelleCustomer />
      <FacialInLavelleBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default MicroBladingInLavelle;
