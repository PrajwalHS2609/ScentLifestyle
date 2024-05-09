import React from "react";
import BeautyGarageCard from "./BeautyGarageCard";
import "./BeautyGarage.css";
import product1 from "./../../../Images/Shea Butter Retention Treatment Hair Oil 50ml.jpg";
import product2 from "./../../../Images/Shea Butter Retention Treatment Hair butter 250ml.jpg";
import product3 from "./../../../Images/Shea Butter Retention Treatment Shampoo 300ml.jpg";
import product4 from "./../../../Images/Beauty Garage K9 Botoplexx Conditioner 300ml.jpg";
import product5 from "./../../../Images/Beauty Garage K9 Botoplexx Shampoo 300ml.jpg";
import product6 from "./../../../Images/Beauty Garage K9 Botoplexx Retention Masque 300ml.jpg";
import product7 from "./../../../Images/Beauty Garage K9 Frizz Dismiss Hair Oil with Morocco Argan 50ml.jpg";
import product8 from "./../../../Images/beauty garage Botoliss Acidic Bonding Concentrate Shampoo 300ml.png";
import product9 from "./../../../Images/Beauty Garage Botoliss Acidic Bonding Concentrate Hair Mask 200ml.jpg";
import product10 from "./../../../Images/Beauty Garage Botoliss Smooth sheild Hair Serum 50ml.jpg";
import product11 from "./../../../Images/Beauty Garage Botoliss Gloss Like Glass Shine Spray 30ml.jpg";
import product12 from "./../../../Images/Beauty Garage Scalp Sense Hydra Soothe for Dry Scalp Shampoo 200ml.jpg";
import product13 from "./../../../Images/Beauty Garage Scalp Sense Oil Out Shampoo 200ml.jpg";
import product14 from "./../../../Images/Beauty Garage Scalp Sense Dandruff Defense Shampoo 200ml.jpg";
import product15 from "./../../../Images/Beauty Garage Scalp Sense Hairfall Defense Shampoo 200ml.jpg";
import product16 from "./../../../Images/Beauty Garage Scalp Sense Hair & Scalp Conditioner 200ml.jpg";
import product17 from "./../../../Images/Beauty Garage Scalp Sense Leave In Treatment 60ml.jpg";
const BeautyGarageCardContain = () => {
  return (
    <div className="beautyGarageCardContainWrapper">
      <BeautyGarageCard
        img={product1}
        head="Shea Butter Retention Treatment Hair Oil 50ml"
        price="1950/-"
      />
      <BeautyGarageCard
        img={product2}
        head="Shea Butter Retention Treatment Hair butter 250ml"
        price="2220"
      />
      <BeautyGarageCard
        img={product3}
        head="Shea Butter Retention Treatment Shampoo 300ml"
        price="1500/-"
      />
      <BeautyGarageCard
        img={product4}
        head="Beauty Garage K9 Botoplexx Conditioner 300ml"
        price="1500/-"
      />
      <BeautyGarageCard
        img={product5}
        head="Beauty Garage K9 Botoplexx Shampoo 300ml"
        price="1500/-"
      />
      <BeautyGarageCard
        img={product6}
        head="Beauty Garage K9 Botoplexx Retention Masque 300ml"
        price="2040/-"
      />
      <BeautyGarageCard
        img={product7}
        head="Beauty Garage K9 Frizz Dismiss Hair Oil with Morocco Argan 50ml"
        price="1140/-"
      />
      <BeautyGarageCard
        img={product8}
        head="Beauty garage Botoliss Acidic Bonding Concentrate Shampoo 300ml"
        price="1860/-"
      />
      <BeautyGarageCard
        img={product9}
        head="Beauty Garage Botoliss Acidic Bonding Concentrate Hair Mask 200ml"
        price="1860/-"
      />
      <BeautyGarageCard
        img={product10}
        head="Beauty Garage Botoliss Smooth sheild Hair Serum 50ml"
        price="1950/-"
      />
      <BeautyGarageCard
        img={product11}
        head="Beauty Garage Botoliss Gloss Like Glass Shine Spray 30ml"
        price="1500/-"
      />
      <BeautyGarageCard
        img={product12}
        head="Beauty Garage Scalp Sense Hydra Soothe for Dry Scalp Shampoo 200ml	"
        price="1320/-"
      />
      <BeautyGarageCard
        img={product13}
        head="Beauty Garage Scalp Sense Oil Out Shampoo 200ml"
        price="1320/-"
      />
      <BeautyGarageCard
        img={product14}
        head="Beauty Garage Scalp Sense Dandruff Defense Shampoo 200ml"
        price="1590/-"
      />
      <BeautyGarageCard
        img={product15}
        head="Beauty Garage Scalp Sense Hairfall Defense Shampoo 200ml"
        price="1590/-"
      />
      <BeautyGarageCard
        img={product16}
        head="Beauty Garage Scalp Sense Hair & Scalp Conditioner 200ml"
        price="1320/-"
      />
      <BeautyGarageCard
        img={product17}
        head="Beauty Garage Scalp Sense Leave In Treatment 60ml"
        price="2400/-"
      />
    </div>
  );
};

export default BeautyGarageCardContain;
