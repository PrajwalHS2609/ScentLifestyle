import React from "react";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import NavBg from "./../../NavBg/NavBg";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import "./Haircut.css";
import HaircutFaq from "./HaircutFaq/HaircutFaq";
import Members from "./../../HomePage/Members/Members";
import OurSalon from "./../../HomePage/OurSalon/OurSalon";
import Partners from "./../../HomePage/Partners/Partners";
import InstaFeed from "./../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "./../../Help/HelpNearYou";
import TextLocReviews from "./../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import HaircutImg from "./HaircutImg/HaircutImg";
const Haircut = () => {
  return (
    <div className="haircutContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Cuts in Bangalore | Hair Cuts Salon for Men & Women</title>
        <meta
          name="description"
          content="SCENT Hair Cuts in Bangalore. Experience the latest in fashion-forward haircuts for women and precise trims for men at SCENT Hair Cutting Salon."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/haircut-and-styling"
        />
      </Helmet>
      <NavBg />
      <HaircutImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Haircut & Styling"
      />
      <div className="haircutContent">
        <InnerServiceTxt
          head="SCENT Hair Cut & Stylist Services"
          para="Experience the latest in fashion-forward haircuts for women and precise trims for men at SCENT Hair Cutting Salon. Our skilled stylists provide stunning hair transformations, including professional blow dries that will leave you looking your best. We offer trending haircuts, stylish hairdos, and refreshing hair washes for both women and men, perfect for any occasion. As a unisex salon, we cater to all your hairstyling needs using premium Dyson tools to ensure each strand is expertly styled. Discover our latest offers on haircuts and hairstyles in Bangalore today at SCENT Hair Cutting Salon."
        />
        <div className="innerServiceTxtContainer">
          <div className="innerServiceTxtHeadContainer">
            <h1>SCENT HAIRCUT & STYLING SALON IN BANGALORE</h1>
            <div className="innerServiceTxtUnderline"></div>
          </div>
          <div className="innerServiceTxtParaContainer">
            <p>
              Welcome to SCENT Haircut & Styling Salon in Bangalore, where we
              bring your hair dreams to life! Our salon offers a unique
              experience tailored to your individual style and preferences. From
              trendy haircuts to professional styling, our skilled team of
              stylists is dedicated to providing you with the perfect look.
              Whether you're looking for a sleek and sophisticated style or
              something bold and daring, we have the expertise to make it
              happen. Step into our salon and let us pamper you with top-notch
              services, luxurious treatments, and a warm, welcoming atmosphere.
              Experience the difference at SCENT Haircut & Styling Salon today!
            </p>
          </div>
          
        </div>
        {/* <InnerServiceTxt
          head="SCENT HAIRCUT & STYLING SALON IN BANGALORE"
          para="Welcome to SCENT Haircut & Styling Salon in Bangalore, where we bring your hair dreams to life! Our salon offers a unique experience tailored to your individual style and preferences. From trendy haircuts to professional styling, our skilled team of stylists is dedicated to providing you with the perfect look. Whether you're looking for a sleek and sophisticated style or something bold and daring, we have the expertise to make it happen. Step into our salon and let us pamper you with top-notch services, luxurious treatments, and a warm, welcoming atmosphere. Experience the difference at SCENT Haircut & Styling Salon today!"
        /> */}
        <HaircutFaq />
      </div>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default Haircut;
