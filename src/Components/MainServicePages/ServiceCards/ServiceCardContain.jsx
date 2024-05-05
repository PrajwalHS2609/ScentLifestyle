import React from "react";
import ServiceCards from "./ServiceCards";
import "./ServiceCards.css";
const ServiceCardContain = () => {
  return (
    <div className="serviceCardContainer">
      <ServiceCards
        heading="Hair Salon"
        para="Enter our salon for top-notch haircuts, hair color, hair spa, and hair smoothening treatments, delivered by highly experienced stylists. Your journey to fabulous hair starts right here at SCENT Hair Salon!"
        goto="Hair Salon"
        img="https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27181.jpg?t=st=1714366709~exp=1714370309~hmac=eca18f1d29c7f9fd65b3ca74e8fe3ae89a86a955336bfc6c53c90d348f225f6c&w=900"
        link={"/hair"}
      />
      <ServiceCards
        heading="Nail Salon"
        para="Experience the epitome of nail care and artistry at SCENT Nail Salon. Our expert technicians offer a range of services including manicures, pedicures, nail enhancements, and intricate nail art designs, ensuring your nails are always on-trend and perfectly pampered."
        goto="Nail Salon"
        img="https://img.freepik.com/free-photo/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept_186202-7769.jpg?t=st=1714366913~exp=1714370513~hmac=e5ac885fa3b97ce0d9a75495fdb57b88099479c7e1825fc706575efdc818ae99&w=826"
        link={"/nails"}
      />
      <ServiceCards
        heading="Facial"
        para="Experience the ultimate skincare pampering at SCENT Facials. Our tailored facial services are designed for every skin type, ensuring a glowing and revitalized look. Whether it's a thorough cleanse or a nourishing mask, our skilled estheticians offer individualized treatments to bring out your inner beauty."
        goto="Facial"
        img="https://img.freepik.com/free-photo/cosmetologist-applying-mask-face-client-beauty-salon_1303-16772.jpg?t=st=1714366975~exp=1714370575~hmac=a152c482f6b9fc7e55302c012b0ca06ca6146b6c019d75269950c67c296acfdb&w=900"
        link={"/facial"}
      />
      <ServiceCards
        heading="Beauty Essentials"
        para=" Discover the essence of beauty with SCENT Beauty Essentials. From eyebrow shaping to makeup application, our skilled professionals offer a range of services to enhance your natural features. Whether you're looking for a quick touch-up or a complete makeover, trust us to bring out your inner glow."
        goto="Beauty Essentials"
        img="https://img.freepik.com/free-photo/beautiful-young-woman-going-through-microblading-treatment_23-2149238677.jpg?t=st=1714367097~exp=1714370697~hmac=6770fad0f5cbf6494990773b947cdff83567634819e2a392eb9ec59a2544038a&w=360"
        link={"/beauty"}
      />
      <ServiceCards
        heading="Spa"
        para="Pamper yourself at SCENT Rejuvenating Spa. Enjoy the luxury of calming massages, energizing body scrubs, and expertly designed Relax & Unwind spa bundles."
        goto="Spa"
        img="https://img.freepik.com/free-photo/woman-relaxing-spa_329181-13152.jpg?t=st=1714366800~exp=1714370400~hmac=1ad9dfbab93e3692f7fd68a1911588a68ff41234a151d0f3fb476c4c08a0ac7f&w=900"
        link={"/spa"}
      />
      <ServiceCards
        heading="Lashes"
        para="Elevate your look with SCENT Eye Lashes. Our expert technicians specialize in eyelash extensions, giving you fuller, longer lashes that enhance your natural beauty. Experience the allure of fluttery lashes that define and accentuate your eyes, adding a touch of glamour to any occasion."
        goto="Lashes"
        img="https://img.freepik.com/free-photo/beautiful-girl-with-colorful-makeup_144627-8211.jpg?t=st=1714367151~exp=1714370751~hmac=fca3742432526ccba755a379861de7457c0ad8edba9a41185ccc4f8ddbd68301&w=900"
        link={"/lashes"}
     />
    </div>
  );
};

export default ServiceCardContain;
