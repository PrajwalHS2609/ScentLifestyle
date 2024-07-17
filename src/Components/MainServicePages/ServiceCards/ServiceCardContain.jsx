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
        link={"/hair-salon"}
      />
      <ServiceCards
        heading="Nail Salon"
        para="Experience the epitome of nail care at SCENT Nail Salon. Our expert technicians offer manicures, pedicures, enhancements, and intricate nail art, ensuring your nails are always on-trend and perfectly pampered."
        goto="Nail Salon"
        img="https://img.freepik.com/free-photo/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept_186202-7769.jpg?t=st=1714366913~exp=1714370513~hmac=e5ac885fa3b97ce0d9a75495fdb57b88099479c7e1825fc706575efdc818ae99&w=826"
        link={"/nails-salon"}
      />
      <ServiceCards
        heading="Facial"
        para="Experience skincare pampering at SCENT Facials. Our tailored services suit every skin type for a glowing, revitalized look. From cleanses to nourishing masks, our skilled estheticians reveal your inner beauty."
        goto="Facial"
        img="https://img.freepik.com/free-photo/cosmetologist-applying-mask-face-client-beauty-salon_1303-16772.jpg?t=st=1714366975~exp=1714370575~hmac=a152c482f6b9fc7e55302c012b0ca06ca6146b6c019d75269950c67c296acfdb&w=900"
        link={"/facial"}
      />
      <ServiceCards
        heading="Beauty Essentials"
        para=" Discover beauty with SCENT Beauty Essentials. From eyebrow shaping to makeup, our skilled professionals enhance your natural features. Whether for a touch-up or a complete makeover, trust us to reveal your inner glow."
        goto="Beauty Essentials"
        img="https://img.freepik.com/free-photo/beautiful-young-woman-going-through-microblading-treatment_23-2149238677.jpg?t=st=1714367097~exp=1714370697~hmac=6770fad0f5cbf6494990773b947cdff83567634819e2a392eb9ec59a2544038a&w=360"
        link={"/beauty-essentials"}
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
        para="Enhance your natural beauty with SCENT Eye Lashes. Our expert technicians specialize in extensions for fuller, longer lashes that define your eyes and add glamour to any occasion."
        goto="Lashes"
        img="https://img.freepik.com/free-photo/beautiful-girl-with-colorful-makeup_144627-8211.jpg?t=st=1714367151~exp=1714370751~hmac=fca3742432526ccba755a379861de7457c0ad8edba9a41185ccc4f8ddbd68301&w=900"
        link={"/eye-lashes"}
      />
      <ServiceCards
        heading="Bridal MakeUp"
        para="Enhance your natural beauty with SCENT Eye Lashes. Our expert technicians specialize in extensions for fuller, longer lashes that define your eyes and add glamour to any occasion."
        goto="Bridal MakeUp"
        img="https://img.freepik.com/free-photo/beautiful-girl-with-colorful-makeup_144627-8211.jpg?t=st=1714367151~exp=1714370751~hmac=fca3742432526ccba755a379861de7457c0ad8edba9a41185ccc4f8ddbd68301&w=900"
        link={"/bridal-makeup"}
      />
      <ServiceCards
        heading="Micro Blading"
        para="Enhance your natural beauty with SCENT Eye Lashes. Our expert technicians specialize in extensions for fuller, longer lashes that define your eyes and add glamour to any occasion."
        goto="Eyebrow Microblading"
        img="https://img.freepik.com/free-photo/beautiful-girl-with-colorful-makeup_144627-8211.jpg?t=st=1714367151~exp=1714370751~hmac=fca3742432526ccba755a379861de7457c0ad8edba9a41185ccc4f8ddbd68301&w=900"
        link={"/eyebrow-microblading"}
      />
    </div>
  );
};

export default ServiceCardContain;
