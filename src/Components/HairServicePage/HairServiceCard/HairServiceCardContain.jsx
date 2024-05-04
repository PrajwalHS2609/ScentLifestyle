import React from "react";
import HairServiceCard from "./HairServiceCard";
import "./HairServiceCard.css";

const HairServiceCardContain = () => {
  return (
    <div className="hairCardContainer">
      <HairServiceCard
        heading="Haircut & Styling"
        // para="Avail fashion-forward women’s haircuts and trims for men at Bodycraft’s hair cutting salon. Offered by Sassoon Trained stylists, along with a mind ‘blowing’ hair boost with Sebastian Professional blow dry, we bring to you some trending women's and men's haircut, hair styling, and hair wash options. The unisex salon offers hairstyles for women and men for any occasion. Get a hair transformation with professional Dyson tools to ensure your locks are styled carefully. Check out the latest offers on haircuts and hairstyles in Bangalore today at our haircut salon."
        goto="Haircut & Styling"
        img="https://img.freepik.com/free-photo/hairdresser-taking-care-her-client_23-2149319763.jpg?t=st=1714391249~exp=1714394849~hmac=7a3369becdf02ecb20b94a284c58f7b2ec2a07d0ba28d54ed81968a84697a039&w=996"
      />
      <HairServiceCard
        heading="Highlights & Streaks"
        // para="Discover the artistry of transformation with our Hair Colour & Highlights services. Elevate your look with expertly crafted hues, from vibrant global hair colours to subtle highlights. Our skilled stylists tailor each colour to complement your style, ensuring a personalised and stunning result that captivates from every angle."
        goto="Highlights & Streaks"
        img="https://img.freepik.com/premium-photo/beauty-young-woman-portrait_200196-667.jpg?w=900"
      />
      <HairServiceCard
        heading="Hair Spa"
        // para="Choose from a range of different hair spa treatments based on your hair type and needs at a Bodycraft salon near you. They can also be customised to treat various hair concerns, such as oiliness, frizz, dryness, and an itchy scalp. Get an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment specially designed for chemically treated hair. It prevents instances of breakage, reverses damage, and makes hair healthier."
        goto="Hair Spa"
        img="https://img.freepik.com/premium-photo/spa-treatments-top-view-hairdressera-s-hands-washing-hair-her-customer-salon-before-hairstyling-process_283617-2683.jpg?w=900"
      />
      <HairServiceCard
        heading="Hair Treatments"
        // para="Choose from a range of different hair spa treatments based on your hair type and needs at a Bodycraft salon near you. They can also be customised to treat various hair concerns, such as oiliness, frizz, dryness, and an itchy scalp. Get an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment specially designed for chemically treated hair. It prevents instances of breakage, reverses damage, and makes hair healthier."
        goto="Hair Treatments"
        img="https://img.freepik.com/premium-photo/hairdresser-drying-womans-hair_798657-17098.jpg?w=900"
      />
      <HairServiceCard
        heading="Beard Styling"
        // para="Crafting unique beard styles that define your personality. From classic to modern, our skilled professionals specialise in the art of beard grooming and create stunning styles with meticulous beard shaping techniques, tailored to accentuate your unique features."
        goto="Beard Styling"
        img="https://img.freepik.com/free-photo/brunette-man-lies-with-open-eyes-while-barber-cuts-his-beard_1304-2776.jpg?t=st=1714371443~exp=1714375043~hmac=c0f11cdac36f9320bcaab047cdc9aa22c09ce87a30a1ad54c87e29df3bf59882&w=900"
        link={"/beard"}
      />
      <HairServiceCard
        heading="Mustache"
        // para="Choose from a range of different hair spa treatments based on your hair type and needs at a Bodycraft salon near you. They can also be customised to treat various hair concerns, such as oiliness, frizz, dryness, and an itchy scalp. Get an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment specially designed for chemically treated hair. It prevents instances of breakage, reverses damage, and makes hair healthier."
        goto="Mustache"
        img="https://img.freepik.com/free-photo/half-man-s-face-with-beard_171337-17203.jpg?t=st=1714371661~exp=1714375261~hmac=b0ab5f1a49059c0c64246cc3f4f3dce7cda027e06eb204a96195ded5f2f8453d&w=900"
      />
    </div>
  );
};

export default HairServiceCardContain;
