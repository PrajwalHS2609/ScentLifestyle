import React from "react";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import NavBg from "./../../NavBg/NavBg";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import "./Haircut.css";
import HaircutFaq from "./HaircutFaq/HaircutFaq";
const Haircut = () => {
  return (
    <div className="haircutContainer">
      <NavBg />
      <div className="haircutContent">
        <InnerServiceTxt
          head="SCENT Hair Cut & Stylist Services"
          para="Experience the latest in fashion-forward haircuts for women and precise trims for men at SCENT Hair Cutting Salon. Our skilled stylists provide stunning hair transformations, including professional blow dries that will leave you looking your best. We offer trending haircuts, stylish hairdos, and refreshing hair washes for both women and men, perfect for any occasion. As a unisex salon, we cater to all your hairstyling needs using premium Dyson tools to ensure each strand is expertly styled. Discover our latest offers on haircuts and hairstyles in Bangalore today at SCENT Hair Cutting Salon."
        />
        <InnerNavi
          link={"/hair-salon"}
          service="Hair Service"
          currService="Haircut & Styling"
        />
        <div className="haircutCardContainer">
          <InnerCard
            head="Tonging and Iron Curls"
            para="Transform your look with tonging and iron curls."
          />
          <InnerCard
            head="Rough-set paddle brush blow-dry"
            para="Achieve stunning, picture-perfect hair with our paddle brush blow-dry."
          />
          <InnerCard
            head="Haircut Add-On: Undercut and artwork"
            para="Looking for a bold and funky look? Get the coolest haircut with an undercut and artistic designs from our skilled hairdresser."
          />
          <InnerCard
            head="Head Shave (for Adults and Kids)"
            para="Experience the cleanest and smoothest head shave performed by our salon experts. Step in for a precision shave that leaves your scalp feeling refreshed and impeccably smooth."
          />
          <InnerCard
            head="Women’s Haircut"
            para="Receive the best professional haircut for women from our Sassoon-trained stylists, including a hair wash, conditioning, product application, and styling."
          />
          <InnerCard
            head="Men’s Haircut"
            para="Transform your look with our trained stylists, who provide a hair wash, conditioning, haircut, product application, and styling."
          />
          <InnerCard
            head="Fringe Haircut"
            para="Discover the perfect fringe haircut to elevate your style—a small change that makes a big difference. Please note, wash and blow dry are not included."
          />
          <InnerCard
            head="Baby Boy Haircut"
            para="Find the perfect haircut to match your child's personality, for boys up to 8 years old."
          />
          <InnerCard
            head="Baby girl Haircut"
            para="For girls up to 8 years, give your child the perfect haircut and hairstyle to suit her personality."
          />
          <InnerCard
            head="Toddler’s Haircut"
            para="Enhance your baby's style with a haircut from our experts, suitable for children up to 1.5 years old."
          />
          <InnerCard
            head="Blow dry"
            para="Achieve stunning, picture-perfect hair with the Sebastian Professional blow-dry, offering heat protection, conditioning, shine, or damage control tailored to your hair's needs."
          />
          <InnerCard
            head="Shampoo"
            para="Pamper your locks with a luxurious wash that provides dramatic fortification."
          />
          <InnerCard
            head="Conditioning"
            para="Infuse your hair with moisture and shine for a rejuvenated feel."
          />
          <InnerCard
            head="Crimping"
            para="Add texture to your hair and enhance your style with this striking look."
          />
          <InnerCard
            head="Ironing"
            para="Achieve sleek and silky-smooth hair that you'll love to run your fingers through."
          />
          <InnerCard
            head="Roller-setting"
            para="Achieve durable, no-burn curls that will leave you feeling fabulous when you set your hair."
          />
          <InnerCard
            head="Put up"
            para="Whether it's a special event or just another day, get the perfect up-do to complement your dressed-up look"
          />
        </div>
        <InnerServiceTxt
          head="SCENT HAIRCUT & STYLING SALON IN BANGALORE"
          para="Welcome to SCENT Haircut & Styling Salon in Bangalore, where we bring your hair dreams to life! Our salon offers a unique experience tailored to your individual style and preferences. From trendy haircuts to professional styling, our skilled team of stylists is dedicated to providing you with the perfect look. Whether you're looking for a sleek and sophisticated style or something bold and daring, we have the expertise to make it happen. Step into our salon and let us pamper you with top-notch services, luxurious treatments, and a warm, welcoming atmosphere. Experience the difference at SCENT Haircut & Styling Salon today!"
        />
        <HaircutFaq />
      </div>
    </div>
  );
};

export default Haircut;