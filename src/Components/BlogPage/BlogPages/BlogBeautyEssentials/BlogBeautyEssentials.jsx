import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import brazilWaxingBanner from "./../../../../Images/Blog/Everything_About_Brazilian_Waxing/Banner Image.png";
import bodyDTanTreatmentBanner from "./../../../../Images/Blog/Body_D-Tan_Treatment/Banner.png";
import bodyWaxingMythBanner from "./../../../../Images/Blog/Body_waxing_myth/Banner.png";
import aromaBodySpaBanner from "./../../../../Images/Blog/Aroma_Body_Spa/Banner.png";

const BlogBeautyEssentials = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let handleRead = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "flex";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="blogMainContainer">
      <div className="blogMainContent">
        <BlogCard
          img={aromaBodySpaBanner}
          head="Aroma Body Spa: Rejuvenate Your Senses with the Power of Essential Oils"
          para="In today's fast-paced world, stress, fatigue, and tension have become a part of daily life..."
          link="/aroma-body-spa-rejuvenate-your-senses-with-the-power-of-essential-oils"
        />
        <BlogCard
          img={bodyWaxingMythBanner}
          head="The Truth About Body Waxing: Myths, Facts, and Tips"
          para="Body waxing is a popular hair removal method that has been around for centuries. It’s known for leaving your skin..."
          link="/the-truth-about-body-waxing-myths-facts-and-tips"
        />
        <BlogCard
          img={bodyDTanTreatmentBanner}
          head="The Role of Body D-Tan in Anti-Aging Skincare"
          para="Aging is a natural process, but with the right skincare strategies, you can maintain radiant and..."
          link="/the-role-of-body-d-tan-in-anti-aging-skincare"
        />
      </div>

      <div className="blogMainDisplayContent" ref={switchRef}>
        <BlogCard
          img={brazilWaxingBanner}
          head="Everything You Need to Know About Brazilian Waxing"
          para="When it comes to smooth, flawless skin, nothing beats the confidence that comes with a professional Brazilian waxing service. At SCENT, we take pride in ..."
          link="/everything-you-need-to-know-about-brazilian-waxing"
        />
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogBeautyEssentials;
