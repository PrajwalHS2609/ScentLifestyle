import React from "react";
import "./HairColor.css";
import NavBg from "../../NavBg/NavBg";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import HairColorFaq from "./HairColorFaq/HairColorFaq";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import HairColorImg from "./HairColorImg";
const HairColor = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Colour in Bangalore | Hair Salon for Highlights Near Me
        </title>
        <meta
          name="description"
          content="SCENT Hair Colour in Bangalore. Elevate your style with expertly crafted hues, ranging from vibrant global hair colors to subtle highlights."
        />
        <link rel="canonical" href="https://scentlifestyle.com/hair-highlights-and-streaks" />
      </Helmet>
      <NavBg />
      <HairColorImg/>
      <InnerNavi
          link={"/hair-salon"}
          service="Hair Service"
          currService="Highlights & Streaks"
        />
      <div className="hairColorContent">
        <InnerServiceTxt
          head2="SCENT HAIR COLOUR & HIGHLIGHTS SERVICES"
          para="Experience the magic of transformation with our Hair Colour & Highlights services. Elevate your style with expertly crafted hues, ranging from vibrant global hair colors to subtle highlights. Our skilled stylists customize each color to suit your unique style, guaranteeing a personalized and stunning result that captivates from every angle."
        />
        <div className="hairColorCardContainer">
          <InnerCard
            head="Milk Shake Argan Cocktail Service"
            para="Treat your hair to the nourishing benefits of argan oil with Milkshake's Whipped Cream. Restore your hair's health and enhance its lustrous shine."
          />
          <InnerCard
            head="Milk Shake Direct Color Cocktail Service"
            para="Enhance your hair with vibrancy and depth while treating it with care using our direct color technique with Milkshake’s hair products."
          />
          <InnerCard
            head="Creative Hair Colour"
            para="Allow our trained stylists to create a personalized and innovative color that perfectly complements your individual style."
          />
          <InnerCard
            head="Creative colour flashes"
            para="Enhance your appearance with artistic flashes of color strategically placed for a unique and bold statement."
          />
          <InnerCard
            head="Colour toning using RUSK COLOUR"
            para="Attain your desired shade and enrich the color of your hair with our professional RUSK COLOR treatments."
          />
          <InnerCard
            head="Global Pre lightening"
            para="Get ready for your new look with an all-over hair brightening service, setting the stage for your chosen global hair color or highlights."
          />
          <InnerCard
            head="3D colour service/shine lines"
            para="Enhance your hair with strategically placed color accents that add gorgeous dimension, depth, and shine."
          />
          <InnerCard
            head="Highlights/streaks"
            para="Elevate your natural beauty with carefully placed lighter strands or streaks for added dimension."
          />
          <InnerCard
            head="Global hair colour"
            para="Embrace a complete transformation or refresh your current look with our global hair colors by Wella."
          />
          <InnerCard
            head="Additional Treatment"
            para="Customized services crafted to meet your specific hair needs, ensuring your locks receive the care they deserve."
          />
        </div>
        <InnerServiceTxt
          head="SCENT HAIR COLOUR SALON IN BANGALORE "
          para="Explore a range of color options at SCENT, from bold hues to subtle highlights, tailored to match your personality and preferences. With 6 outlets across Bengaluru, we provide a serene salon experience. Whether you're after a dramatic change with global hair color or a subtle enhancement with highlights, our commitment to excellence ensures a flawless outcome. Book your appointment today and step into a world of personalized beauty at SCENT. Contact our team to understand the pricing of global hair color in Bangalore based on your hair length."
        />
        <HairColorFaq />
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

export default HairColor;
