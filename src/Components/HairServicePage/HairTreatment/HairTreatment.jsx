import React from "react";
import NavBg from "../../NavBg/NavBg";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import "./HairTreatment.css";
import HairTreatmentFaq from "./HairTreatmentFaq/HairTreatmentFaq";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import HairTreatmentImg from "./HairTreatmentImg";
const HairTreatment = () => {
  return (
    <div className="hairTreatmentContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Salon Hair Treatments in Bangalore | Women's Salon for Hair Treatment
        </title>
        <meta
          name="description"
          content="Salon Hair Treatments in Bangalore. Select from a variety of hair treatments tailored to your hair type and needs at a SCENT  near you. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-treatments"
        />
      </Helmet>
      <NavBg />
      <HairTreatmentImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Hair Treatment"
      />
      <div className="hairTreatmentContent">
        <InnerServiceTxt
          head="HAIR TREATMENT SERVICES"
          para="Select from a variety of hair  treatments tailored to your hair type and needs at a SCENT  near you. These treatments can be customized to address various hair concerns, including oiliness, frizz, dryness, and an itchy scalp. Indulge in an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment, specially designed for chemically treated hair. It helps prevent breakage, reverse damage, and promote healthier hair."
        />

        <div className="hairTreatmentCardContainer">
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
            para="Tailored for fragile hair, the Liquid Hair spa treatment reconstructs and reinforces hair fibers through heat activation, restoring vitality. Ideal for damaged hair, it's a recommended rejuvenation solution."
          />
          <InnerCard
            head="Shampeeling (anti-dandruff)"
            para="Shampeeling addresses persistent dandruff and oily, irritated scalps. It reduces excess skin cell production and transforms the scalp, leaving it healthy and rejuvenated."
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
            <h1>
              Your Hair with SCENT's Expert Protein Treatments In Bangalore
            </h1>
            <div className="innerServiceTxtUnderline"></div>
          </div>
          <div className="innerServiceTxtParaContainer">
            <p>
              Are you looking to boost your hair's strength, elasticity, and
              shine? At SCENT , we're specialists in protein treatments, having
              successfully performed over 5,000 treatments in Bangalore. We use
              only the highest quality products and techniques, ensuring you
              won't find a better price or service anywhere in the city.
            </p>
          </div>
        </div>
        {/* <InnerServiceTxt
          head="Your Hair with SCENT's Expert Protein Treatments"
          para="Are you looking to boost your hair's strength, elasticity, and shine? At SCENT , we're specialists in protein treatments, having successfully performed over 5,000 treatments in Bangalore. We use only the highest quality products and techniques, ensuring you won't find a better price or service anywhere in the city."
        /> */}
        <HairTreatmentFaq />
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

export default HairTreatment;
