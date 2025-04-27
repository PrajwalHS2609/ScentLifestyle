import React, { useEffect, useRef, useState } from "react";
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
import hairBleachBanner from "./../../../../Images/Blog/How Often Should You Bleach Your Hair/Banner.png";
import sheaButterBanner from "./../../../../Images/Blog/Shea Butter Hair Spa/Banner.png";
import scalpDetoxBanner from "./../../../../Images/Blog/Scalp_Detox/Banner.png";
import tenReasonHaircutBanner from "./../../../../Images/Blog/10_Reason_HairCut/Banner.png";
import doScalpMassagesBanner from "./../../../../Images/Blog/Do_Scalp_Massage_Promote/Banner.png";
import HairTrends from "./../../../../Images/Blog/2025HairTrends/Banner.png";
import summerCareBanner from "./../../../../Images/Blog/Summer_Hair/Banner.png";
import olaplexBenefitsBanner from "./../../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Banner.png";
import moroccanOilBanner from "./../../../../Images/Blog/moroccan_oil/Banner.png";

const BlogHair = () => {
  const hairBlog = [
    {
      img: moroccanOilBanner,
      head: "How Moroccanoil Hair Treatment Can Rescue Damaged Hair?",
      para: "When it comes to rescuing dry, brittle, and damaged hair, the solution often lies ...",
      link: "/how-moroccanoil-hair-treatment-can-rescue-damaged-hair",
    },

    {
      img: olaplexBenefitsBanner,
      head: "10 Amazing Benefits of Olaplex Hair Treatment",
      para: "In a world where hair is constantly exposed to heat styling, coloring, pollution, and ...",
      link: "/10-amazing-benefits-of-olaplex-hair-treatment",
    },
    {
      img: summerCareBanner,
      head: "Summer Hair Care Tips to Beat the Heat",
      para: "Summer is a season of sunshine, vacations, and outdoor adventures, but while we enjoy the...",
      link: "/summer-hair-care-tips-to-beat-the-heat",
    },
    {
      img: HairTrends,
      head: "2025 Trendy Hair Highlights You’ll Love!",
      para: "Are you looking to refresh your look with the hottest hair highlights trends of 2025? Whether you're...",
      link: "/2025-trendy-hair-highlights-youll-love",
    },
    {
      img: doScalpMassagesBanner,
      head: "Do Scalp Massages Truly Promote Hair Growth?",
      para: "Hair care is a universal concern, and everyone dreams of lush, healthy hair. Among the many hair care...",
      link: "/do-scalp-massages-truly-promote-hair-growth",
    },
    {
      img: tenReasonHaircutBanner,
      head: "10 Reasons to Schedule Regular Haircuts",
      para: "A great haircut is more than just a grooming necessity—it’s a way to express your personality, enhance your...",
      link: "/10-reasons-to-schedule-regular-haircuts",
    },
    {
      img: scalpDetoxBanner,
      head: "Scalp Detox: Why It’s the Secret to Gorgeous Hair?",
      para: "When it comes to achieving long, thick, and shiny hair, most people focus on the quality of...",
      link: "/scalp-detox-why-its-the-secret-to-gorgeous-hair",
    },
    {
      img: sheaButterBanner,
      head: "Revitalize Your Hair with the Magic of Shea Butter Hair Spa!",
      para: "Hair is one of the most defining aspects of our appearance, yet it often suffers from exposure to pollution...",
      link: "/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa",
    },
    {
      img: hairBleachBanner,
      head: "How Often Should You Bleach Your Hair? Expert Advice",
      para: "Bleaching your hair can be a transformative experience, offering a fresh and...",
      link: "/how-often-should-you-bleach-your-hair",
    },
    {
      img: hairSpaTreatmentBanner,
      head: "Top Benefits of Regular Hair Spa Treatments",
      para: "Hair is one of the most defining aspects of personal style and grooming for both...",
      link: "/top-benefits-of-regular-hair-spa-treatments",
    },
    {
      img: hairBotoxTreatmentBanner,
      head: "Hair Botox Treatment: All You Need to Know for Smooth, Healthy Hair",
      para: "If you're looking to rejuvenate your hair, tame frizz, and bring life back to your locks, Hair Botox might be...",
      link: "/hair-botox-treatment-all-you-need-to-know",
    },
    {
      img: hairColorBanner,
      head: "25+ Hair Colors Every Woman Should Try",
      para: "In the world of beauty, hair color is one of the most transformative tools at our disposal...",
      link: "/25-hair-colors-every-woman-should-try",
    },
    {
      img: curlyHairBanner,
      head: "Is Curly Hair the Right Style for You? Here’s How to Find Out",
      para: "Curly hair is vibrant, full of life, and a surefire way to make a statement. But not everyone feels...",
      link: "/is-curly-hair-the-right-style-for-you-heres-how-to-find-out",
    },
    {
      img: whyKeratinBanner,
      head: "Why Keratin Hair Treatment is the Ultimate Solution for Damaged Hair?",
      para: "Hair is often considered one of the most important features that enhance beauty, making it a major part...",
      link: "/why-keratin-hair-treatment-is-the-ultimate-solution-for-damaged-hair",
    },
    {
      img: GlamorousImg,
      head: "Get Ready for a Glamorous Night Out: 5 Quick and Easy Hairstyles",
      para: "A glamorous night out calls for a stunning hairstyle that complements your outfit and makes you feel confident and ...",
      link: "/get-ready-for-a-glamorous-night-out-5-quick-and-easy-hairstyles",
    },
    {
      img: hairKeratin,
      head: "Why You Should Consider Keratin Hair Treatment",
      para: "In recent years, the beauty and hair care industry has seen a significant surge in ...",
      link: "/why-you-should-consider-keratin-hair-treatment",
    },
    {
      img: olaplexBanner,
      head: "How Olaplex Helps Maintain Healthy Hair after Coloring?",
      para: "Coloring your hair can be a fun way to express yourself, but it can also be a challenge to maintain ...",
      link: "/how-olaplex-helps-maintain-healthy-hair-after-coloring",
    },
    {
      img: ChicSleek,
      head: "Chic & Sleek - Women’s Haircuts That Define You",
      para: "When it comes to expressing your personal style, few things make as bold a statement as your haircut. A well-chosen haircut not only...",
      link: "/chic-and-sleek-womens-haircuts-that-define-you",
    },
    {
      img: top10,
      head: "Top 10 Trending Women Hair Colours & Highlights for 2024",
      para: "As we step into 2024, the world of hair fashion is buzzing with exciting new trends ...",
      link: "/top-10-trending-women-hair-colours-and-highlights-for-2024",
    },
    {
      img: BotoxImg,
      head: "How Hair Botox Treatments Can Transform Your Tresses",
      para: "In the quest for luscious, smooth, and youthful-looking hair, the beauty industry has introduced ...",
      link: "/how-hair-botox-treatments-can-transform-your-tresses",
    },
    {
      img: BouncyHairBlog,
      head: "Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon",
      para: "Discover essential tips for maintaining bouncy and beautiful curls during the monsoon season. Learn how to ...",
      link: "/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon",
    },
    {
      img: trimBlog,
      head: "Does Trimming Hair Make It Grow Faster?",
      para: "Trimming your hair regularly is key to maintaining long, healthy locks. The frequency of trims depends ...",
      link: "/does-trimming-hair-make-it-grow-faster",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(hairBlog.length / itemsPerPage);

  // Get the blogs for the current page
  const currentBlogs = hairBlog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const preloadImages = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    hairBlog.slice(startIndex, endIndex).forEach((blog) => {
      const img = new Image();
      img.src = blog.img;
    });
  };

  useEffect(() => {
    preloadImages(currentPage);
  }, [currentPage]);
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
      <div className="blogMainContent" key={currentPage}>
        {currentBlogs.map((blog, index) => (
          <BlogCard
            key={index}
            img={blog.img}
            head={blog.head}
            para={blog.para}
            link={blog.link}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pageButton ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogHair;
