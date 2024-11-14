import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import trimBlog from "./../../../../Images/Blog/Does Trimming Hair Make It Grow Faster.png";
import BouncyHairBlog from "./../../../../Images/Blog/Hair Bouncy and Beautiful Curls During Monsoon.png";
import BotoxImg from "./../../../../Images/Blog/HairBotoxImgs/HairBotox1.png";
import top10 from "./../../../../Images/Blog/Top 10 hairColor/Banner Image.png";
import ChicSleek from "./../../../../Images/Blog/Chic & Sleek/Banner Image.png";
import olaplexBanner from "./../../../../Images/Blog/How Olaplex Helps/Banner.png";
import hairKeratin from "./../../../../Images/Blog/Keratin_Hair_Treatment/Banner Image.png";
import GlamorousImg from "./../../../../Images/Blog/Get Ready for a Glamorous Night/Banner.png";
import whyKeratinBanner from "./../../../../Images/Blog/Why_Keratin_Hair/Banner.png";
import curlyHairBanner from "./../../../../Images/Blog/Is Curly Hair the Right Style/Banner.png";
import hairColorBanner from "./../../../../Images/Blog/25+ Hair Colors/Banner.png";
import hairBotoxTreatmentBanner from "./../../../../Images/Blog/Hair_Botox_Treatment/Banner.png";
import hairSpaTreatmentBanner from "./../../../../Images/Blog/Hair_Spa_Treatments/Banner.png";

const BlogHair = () => {
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
          img={BouncyHairBlog}
          head="Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon"
          para="Discover essential tips for maintaining bouncy and beautiful curls during the monsoon season. Learn how to ..."
          link="/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon"
        />
        <BlogCard
          img={BotoxImg}
          head="How Hair Botox Treatments Can Transform Your Tresses"
          para=" In the quest for luscious, smooth, and youthful-looking hair, the beauty industry has introduced ..."
          link="/how-hair-botox-treatments-can-transform-your-tresses"
        />
        <BlogCard
          img={top10}
          head="Top 10 Trending Women Hair Colours & Highlights for 2024"
          para=" As we step into 2024, the world of hair fashion is buzzing with exciting new trends  ..."
          link="/top-10-trending-women-hair-colours-and-highlights-for-2024"
        />
        <BlogCard
          img={ChicSleek}
          head="Chic & Sleek - Women’s Haircuts That Define You"
          para="When it comes to expressing your personal style, few things make as bold a statement as your haircut. A well-chosen haircut not only..."
          link="/chic-and-sleek-womens-haircuts-that-define-you"
        />
        <BlogCard
          img={olaplexBanner}
          head="How Olaplex Helps Maintain Healthy Hair after Coloring?"
          para="Coloring your hair can be a fun way to express yourself, but it can also be a challenge to maintain ..."
          link="/how-olaplex-helps-maintain-healthy-hair-after-coloring"
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
        <BlogCard
          img={hairBotoxTreatmentBanner}
          head="Hair Botox Treatment: All You Need to Know for Smooth, Healthy Hair"
          para="If you're looking to rejuvenate your hair, tame frizz, and bring life back to your locks, Hair Botox might be..."
          link="/hair-botox-treatment-all-you-need-to-know"
        />
        <BlogCard
          img={hairSpaTreatmentBanner}
          head="Top Benefits of Regular Hair Spa Treatments"
          para="Hair is one of the most defining aspects of personal style and grooming for both..."
          link="/top-benefits-of-regular-hair-spa-treatments"
        />
 
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogHair;
