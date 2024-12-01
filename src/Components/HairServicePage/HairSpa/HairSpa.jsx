import React from "react";
import NavBg from "../../NavBg/NavBg";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import "./HairSpa.css";
import InnerNavi from "./../../InnerServicePage/InnerNavi/InnerNavi";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import HairSpaFaq from "./HairSpaFaq/HairSpaFaq";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import HairSpaImg from "./HairSpaImg";
const HairSpa = () => {
  return (
    <div className="hairSpaContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Spa in Bangalore | Hair Spa Salon Near Me</title>
        <meta
          name="description"
          content="SCENT Hair Spa in Bangalore. Select from a variety of hair spa treatments tailored to your hair type and needs at a SCENT  near you."
        />
        <link rel="canonical" href="https://scentlifestyle.com/hair-spa" />
      </Helmet>
      <NavBg />
      <HairSpaImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Hair Spa"
      />
      <div className="hairSpaContent">
        <InnerServiceTxt
          head="HAIR SPA SERVICES"
          para="Select from a variety of hair spa treatments tailored to your hair type and needs at a SCENT  near you. These treatments can be customized to address various hair concerns, including oiliness, frizz, dryness, and an itchy scalp. Indulge in an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment, specially designed for chemically treated hair. It helps prevent breakage, reverse damage, and promote healthier hair."
        />

        <div className="hairSpaCardContainer">
          <InnerCard
            head="CHELATING OLAPLEX BROAD SPECTRUM HAIR INSURANCE TREATMENT"
            para="Experience a professional-only, high-potency purifying treatment that deeply cleans down to the cortex without stripping hair of moisture and essential proteins."
          />
          <InnerCard
            head="K18 PEPTIDE INTENSE THERAPHY"
            para="Experience a truly revolutionary molecular repair service, clinically proven to reverse hair damage."
          />
          <InnerCard
            head="Root Deep Anti Hair Loss Therapy"
            para="Root Deep Anti Hair Loss Therapy is a targeted treatment designed to combat hair loss by nourishing the roots and stimulating healthy hair growth from within."
          />
          <InnerCard
            head="QOD Max Prime Semi Permanent Smoothning"
            para="Achieve long-lasting smoothness and manageability with our treatment that harnesses nanotechnology, free from harmful ingredients."
          />
          <InnerCard
            head="Tanino Hair Botox-One Day Wonder Treatment"
            para="Restore your locks in just one day with our intensive hydration and repair treatment, enriched with tannin and keratin protein, leaving your hair feeling rejuvenated."
          />
          <InnerCard
            head="Essential Hair Spa"
            para="For those short on time, experience the express version of our Intense Hair Spa treatment for silky, luscious, perfect-looking hair and energized locks."
          />
          <InnerCard
            head="Intense Hair Spa (Reborn)"
            para="Experience a personalized hair spa treatment customized according to your hair needs. Let our expert stylists transform your tresses, providing hair and scalp benefits in a single treatment."
          />
          <InnerCard
            head="Liquid hair treatment (molecular refillers)"
            para="Tailored for sensitized and fragile hair, the Liquid Hair spa treatment reconstructs and reinforces the hair fiber through thermo activation, restoring vitality. Ideal for damaged hair, it's a recommended solution for rejuvenation."
          />
          <InnerCard
            head="Shampeeling (anti-dandruff)"
            para="Here to address all your dandruff concerns, Shampeeling treats intense, persistent dandruff and oily/irritated scalps. It helps reduce the overproduction of skin cells and transforms the scalp environment, leaving you with a healthy and rejuvenated scalp."
          />
          <InnerCard
            head="Balance energy serum (Anti-hair loss treatment)"
            para="This spa treatment strengthens hair and anchors, fortifying thin hair for improved strength and resilience against hair fall."
          />
          <InnerCard
            head="Anti Lice treatment"
            para="Eliminate irksome pests from your hair with this treatment."
          />
          <InnerCard
            head="Olaplex Stand Alone Intense treatment"
            para="Give your hair a new lease of life with the Olaplex Stand Alone Intense treatment, nourishing and repairing severely damaged hair."
          />
          <InnerCard
            head="Olaplex 4 in 1 Express Treatment"
            para="For those on the go, the Stand Alone Express treatment is a quick fix that revitalizes damaged hair."
          />
          <InnerCard
            head="Permanent Hair smoothening"
            para="Say goodbye to the daily straightener routine and achieve sleek, straight hair that lasts with our long-lasting smoothing treatment."
          />
          <InnerCard
            head="Semi permanent smoothening"
            para="Make every day a good hair day with our effective hair smoothening treatment, offering a touch of straightness without a permanent change."
          />
          <InnerCard
            head="Fringe Semi-permanent smoothening"
            para="Achieve a polished look by focusing on smoothening and straightening your fringe or bangs."
          />
          <InnerCard
            head="Fringe smoothening"
            para="Our specialized treatment is dedicated to perfectly straightening and smoothing your fringe or bangs, beautifully framing your face."
          />
        </div>
        <div className="innerServiceTxtContainer">
          <div className="innerServiceTxtHeadContainer">
            <h1>HAIR SPA SERVICES IN BANGALORE</h1>
            <div className="innerServiceTxtUnderline"></div>
          </div>
          <div className="innerServiceTxtParaContainer">
            <p>
              SCENT is your friendly neighborhood salon. Enjoy a safe salon
              experience at any of our 6 outlets across Bengaluru city.
            </p>
          </div>
        </div>
        {/* <InnerServiceTxt
          head="HAIR SPA SERVICES IN BANGALORE"
          para="SCENT is your friendly neighborhood salon. Enjoy a safe salon experience at any of our 6 outlets across Bengaluru city."
        /> */}
        <HairSpaFaq />
      </div>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
            
    </div>
  );
};

export default HairSpa;
