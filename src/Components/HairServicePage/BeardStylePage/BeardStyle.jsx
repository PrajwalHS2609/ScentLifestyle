import React from "react";
import "./BeardStyle.css";
import NavBg from "../../NavBg/NavBg";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import BeardStyleFaq from "./BeardStyleFaq.jsx/BeardStyleFaq";
import ServiceWhy from "./../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "./../../TextLocReviews/TextLocReviews";
import HelpNearYou from "./../../Help/HelpNearYou";
import InstaFeed from "./../../HomePage/InstaFeed/InstaFeed";
import Partners from "./../../HomePage/Partners/Partners";
import OurSalon from "./../../HomePage/OurSalon/OurSalon";
import Members from "./../../HomePage/Members/Members";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
const BeardStyle = () => {
  return (
    <div className="beardStyleContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beard Salon in Bangalore | Beard Styling Near Me</title>
        <meta
          name="description"
          content="SCENT Beard Salon in Bangalore. From classic to modern, our skilled professionals specialize in the art of beard grooming, using meticulous shaping techniques to create stunning styles tailored to accentuate your unique features."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/beard"
        />
      </Helmet>
      <NavBg />
      <div className="beardStyleContent">
        <InnerServiceTxt
          head="BEARD STYLING"
          para="Crafting unique beard styles that define your personality. From classic to modern, our skilled professionals specialize in the art of beard grooming, using meticulous shaping techniques to create stunning styles tailored to accentuate your unique features."
        />
        <InnerNavi
          link={"/hair-salon"}
          service="Hair Service"
          currService="Beard Styling"
        />
        <div className="beardStyleCardContainer">
          <InnerCard
            head="Mustache Colour"
            para="Enhance your facial aesthetic with a moustache color treatment that adds depth and character to your facial hair."
          />
          <InnerCard
            head="Beard Colouring"
            para="Beard coloring gives your beard a natural-looking hue, enhancing its texture and overall appearance."
          />
          <InnerCard
            head="Beard Shaping"
            para="Carve out and define the edges of your beard to accentuate the shape of your face, showcasing your finest features for a sleek and polished style."
          />
          <InnerCard
            head="Moisturising Beard Shave"
            para="Enjoy a luxurious grooming ritual that goes the extra mile beyond shaving - providing deep hydration and leaving your skin feeling incredibly soft and velvety."
          />
          <InnerCard
            head="Signature Beard Styling"
            para="Sculpt your neckline, define your sideburns, and eliminate any stray hairs above your beard line on your cheeks."
          />
          <InnerCard
            head="Nourishing Beard Spa"
            para="Spoil yourself with a deluxe beard spa session for a rejuvenating experience filled with treatments that boost hair health and soothe the skin."
          />
        </div>
        <InnerServiceTxt
          head="BEARD STYLING SERVICES IN BANGALORE"
          para="Experience the artistry of flawless grooming with SCENT's exceptional beard styling services! Unleash your style and uncover the closest haven for beard grooming near you to revolutionize your appearance right now!"
        />
        <BeardStyleFaq />
      </div>
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

export default BeardStyle;
