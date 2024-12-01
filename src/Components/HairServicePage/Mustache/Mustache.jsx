import React from "react";
import "./Mustache.css";
import MustacheFaq from "./MustacheFaq/MustacheFaq";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "./../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";
import MustacheImg from "./MustacheImg";
const Mustache = () => {
  return (
    <div className="mustacheContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mustache Styling Salon in Bangalore - Mustache Styling Near Me
        </title>
        <meta
          name="description"
          content="SCENT Mustache Styling Salon in Bangalore. Crafting unique mustache styles that define your personality. Book an Appointment!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/mustache-styling"
        />
      </Helmet>
      <NavBg />
      <MustacheImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Mustache Styling"
      />
      <div className="mustacheContent">
        <InnerServiceTxt
          head="Mustache Styling"
          para="Crafting unique mustache styles that define your personality. From classic to modern, our skilled professionals specialize in the art of beard grooming, using meticulous shaping techniques to create stunning styles tailored to accentuate your unique features."
        />

        <div className="mustacheCardContainer">
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
        <div className="innerServiceTxtContainer">
          <div className="innerServiceTxtHeadContainer">
            <h1>Mustache Styling in Bangalore at SCENT</h1>
            <div className="innerServiceTxtUnderline"></div>
          </div>
          <div className="innerServiceTxtParaContainer">
            <p>
              Elevate Your Look with Expert Mustache Styling At SCENT , we
              understand that a well-groomed mustache can make a powerful
              statement. Our mustache styling services in Bangalore are designed
              to help you achieve the perfect look that complements your
              personality and style.
            </p>
          </div>
        </div>
        {/* <InnerServiceTxt
          head="Mustache Styling in Bangalore at SCENT "
          para="Elevate Your Look with Expert Mustache Styling At SCENT , we understand that a well-groomed mustache can make a powerful statement. Our mustache styling services in Bangalore are designed to help you achieve the perfect look that complements your personality and style."
        /> */}
        <MustacheFaq />
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

export default Mustache;
