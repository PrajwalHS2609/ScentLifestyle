import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import brazilWaxingBanner from "./../../../../Images/Blog/Everything_About_Brazilian_Waxing/Banner Image.png";
import bodyDTanTreatmentBanner from "./../../../../Images/Blog/Body_D-Tan_Treatment/Banner.png";

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
      <div className="blogMainDisplay1">
        <BlogCard
          img={brazilWaxingBanner}
          head="Everything You Need to Know About Brazilian Waxing"
          para="When it comes to smooth, flawless skin, nothing beats the confidence that comes with a professional Brazilian waxing service. At SCENT, we take pride in ..."
          link="/everything-you-need-to-know-about-brazilian-waxing"
        />
        <BlogCard
          img={bodyDTanTreatmentBanner}
          head="Top Benefits of Regular Hair Spa Treatments"
          para="Aging is a natural process, but with the right skincare strategies, you can maintain radiant and..."
          link="/the-role-of-body-d-tan-in-anti-aging-skincare"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        {/* <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        /> */}
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogBeautyEssentials;
