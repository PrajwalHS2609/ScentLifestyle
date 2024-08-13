import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import trimBlog from "./../../../../Images/Blog/Does Trimming Hair Make It Grow Faster.png";
import BouncyHairBlog from "./../../../../Images/Blog/Hair Bouncy and Beautiful Curls During Monsoon.png";
import BotoxImg from "./../../../../Images/Blog/HairBotoxImgs/HairBotox1.png";
import top10 from "./../../../../Images/Blog/Top 10 hairColor/Banner Image.png";
const BlogNail = () => {
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
          head="Exploring the Benefits of Professional Pedicures and Manicures "
          para="When it comes to self-care and personal grooming, professional pedicures and manicures are ..."
          link="/exploring-the-benefits-of-professional-pedicures-and-manicures"
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
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogNail;
