import React, { useRef, useState } from "react";
import "./BlogMain.css";
import trimBlog from "./../../../../Images/Blog/Does Trimming Hair Make It Grow Faster.png";
import BouncyHairBlog from "./../../../../Images/Blog/Hair Bouncy and Beautiful Curls During Monsoon.png";
import BotoxImg from "./../../../../Images/Blog/HairBotoxImgs/HairBotox1.png";
import top10 from "./../../../../Images/Blog/Top 10 hairColor/Banner Image.png";
import hairKeratin from "./../../../../Images/Blog/Keratin_Hair_Treatment/Banner Image.png";
import pedimanicurebanner from "./../../../../Images/Blog/Pedi&manicureBlog/Banner Image.png";
import spaDayBanner from "./../../../../Images/Blog/How a Spa Day/Banner Image.png";
import brazilWaxingBanner from "./../../../../Images/Blog/Everything_About_Brazilian_Waxing/Banner Image.png";
import ChicSleek from "./../../../../Images/Blog/Chic & Sleek/Banner Image.png";
import top5Spa from "./../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Banner.png";
import olaplexBanner from "./../../../../Images/Blog/How Olaplex Helps/Banner.png";
import franchiseBanner from "./../../../../Images/Blog/Step-by-Step Guide/Banner.png";
import eyeBrowBanner from "./../../../../Images/Blog/Why_Eyebrow_Shaping/Banner.png";
import GlamorousImg from "./../../../../Images/Blog/Get Ready for a Glamorous Night/Banner.png";
import whyKeratinBanner from "./../../../../Images/Blog/Why_Keratin_Hair/Banner.png";
import curlyHairBanner from "./../../../../Images/Blog/Is Curly Hair the Right Style/Banner.png";
import hairColorBanner from "./../../../../Images/Blog/25+ Hair Colors/Banner.png";

import BlogCard from "../BlogCard";
const BlogMain = () => {
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
          img={trimBlog}
          head="Does Trimming Hair Make It Grow Faster?"
          para="Trimming your hair regularly is key to maintaining long, healthy locks. The frequency of trims depends ..."
          link="/does-trimming-hair-make-it-grow-faster"
        />
        <BlogCard
          img={ChicSleek}
          head="Chic & Sleek - Women’s Haircuts That Define You"
          para="When it comes to expressing your personal style, few things make as bold a statement as your haircut. A well-chosen haircut not only ..."
          link="/chic-and-sleek-womens-haircuts-that-define-you"
        />

        <BlogCard
          img={BotoxImg}
          head="How Hair Botox Treatments Can Transform Your Tresses"
          para=" In the quest for luscious, smooth, and youthful-looking hair, the beauty industry has introduced ..."
          link="/how-hair-botox-treatments-can-transform-your-tresses"
        />
        <BlogCard
          img={brazilWaxingBanner}
          head="Everything You Need to Know About Brazilian Waxing"
          para="When it comes to smooth, flawless skin, nothing beats the confidence that comes with a professional Brazilian waxing service. At SCENT, we take pride in ..."
          link="/everything-you-need-to-know-about-brazilian-waxing"
        />

        <BlogCard
          img={pedimanicurebanner}
          head="Exploring the Benefits of Professional Pedicures and Manicures "
          para="When it comes to self-care and personal grooming, professional pedicures and manicures are ..."
          link="/exploring-the-benefits-of-professional-pedicures-and-manicures"
        />
        <BlogCard
          img={spaDayBanner}
          head="How a Spa Day Can Boost Your Mental Health?"
          para="In today’s fast-paced world, where stress and anxiety are common, taking time for ..."
          link="/how-a-spa-day-can-boost-your-mental-health"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        <BlogCard
          img={hairKeratin}
          head="Why You Should Consider Keratin Hair Treatment"
          para=" In recent years, the beauty and hair care industry has seen a significant surge in  ..."
          link="/why-you-should-consider-keratin-hair-treatment"
        />
        <BlogCard
          img={top10}
          head="Top 10 Trending Women Hair Colours & Highlights for 2024"
          para=" As we step into 2024, the world of hair fashion is buzzing with exciting new trends  ..."
          link="/top-10-trending-women-hair-colours-and-highlights-for-2024"
        />
        <BlogCard
          img={BouncyHairBlog}
          head="Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon"
          para="Discover essential tips for maintaining bouncy and beautiful curls during the monsoon season. Learn how to ..."
          link="/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon"
        />
        <BlogCard
          img={top5Spa}
          head="The Top 5 Reasons to Book a Hair Spa Today! "
          para="Hair care is more than just shampooing and conditioning—it’s about deep  ..."
          link="/the-top-5-reasons-to-book-a-hair-spa-today"
        />
        <BlogCard
          img={olaplexBanner}
          head="How Olaplex Helps Maintain Healthy Hair after Coloring?"
          para="Coloring your hair can be a fun way to express yourself, but it can also be a challenge to maintain ..."
          link="/how-olaplex-helps-maintain-healthy-hair-after-coloring"
        />
        <BlogCard
          img={franchiseBanner}
          head="Step-by-Step Guide to Setting up a Successful Salon Franchise in Bangalore"
          para="Setting up a salon franchise in Bangalore is a lucrative business opportunity for ..."
          link="/step-by-step-guide-to-setting-up-a-successful-salon-franchise-in-bangalore"
        />
        <BlogCard
          img={eyeBrowBanner}
          head="Why Eyebrow Shaping is the Secret to a Polished Look"
          para="When it comes to beauty and grooming, eyebrows often take center stage. They frame your..."
          link="/why-eyebrow-shaping-is-the-secret-to-a-polished-look"
        />
        <BlogCard
          img={GlamorousImg}
          head="Get Ready for a Glamorous Night Out: 5 Quick and Easy Hairstyles"
          para="A glamorous night out calls for a stunning hairstyle that complements your outfit and makes you feel confident and ..."
          link="/get-ready-for-a-glamorous-night-out-5-quick-and-easy-hairstyles"
        />
        <BlogCard
          img={whyKeratinBanner}
          head="Why Keratin Hair Treatment is the Ultimate Solution for Damaged Hair?"
          para="Hair is often considered one of the most important features that enhance beauty, making it a major part..."
          link="/why-keratin-hair-treatment-is-the-ultimate-solution-for-damaged-hair"
        />
        <BlogCard
          img={curlyHairBanner}
          head="Is Curly Hair the Right Style for You? Here’s How to Find Out"
          para="Curly hair is vibrant, full of life, and a surefire way to make a statement. But not everyone feels..."
          link="/is-curly-hair-the-right-style-for-you-heres-how-to-find-out"
        />
        <BlogCard
          img={hairColorBanner}
          head="25+ Hair Colors Every Woman Should Try"
          para="In the world of beauty, hair color is one of the most transformative tools at our disposal..."
          link="/25-hair-colors-every-woman-should-try"
        />
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogMain;
