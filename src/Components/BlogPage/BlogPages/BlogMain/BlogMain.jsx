import React, { useEffect, useState } from "react";
import "./BlogMain.css";
import BlogCard from "../BlogCard";
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
import hairBotoxTreatmentBanner from "./../../../../Images/Blog/Hair_Botox_Treatment/Banner.png";
import hairSpaTreatmentBanner from "./../../../../Images/Blog/Hair_Spa_Treatments/Banner.png";
import BodyDTanTreatmentBanner from "./../../../../Images/Blog/Body_D-Tan_Treatment/Banner.png";
import eyelashExtensionBanner from "./../../../../Images/Blog/Eyelash Extensions/Banner.png";
import hairBleachBanner from "./../../../../Images/Blog/How Often Should You Bleach Your Hair/Banner.png";
import bodyWaxingMythBanner from "./../../../../Images/Blog/Body_waxing_myth/Banner.png";
import christmasOfferBanner from "./../../../../Images/Blog/Christmas_offer/Banner.png";
import academyEnrollBanner from "./../../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Banner.png";
import clearerBanner from "./../../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/Banner.png";
import sheaButterBanner from "./../../../../Images/Blog/Shea Butter Hair Spa/Banner.png";
import pedicureTreatmentDryBanner from "./../../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Banner.png";
import scalpDetoxBanner from "./../../../../Images/Blog/Scalp_Detox/Banner.png";
import tenReasonHaircutBanner from "./../../../../Images/Blog/10_Reason_HairCut/Banner.png";
import doScalpMassagesBanner from "./../../../../Images/Blog/Do_Scalp_Massage_Promote/Banner.png";
import HairTrends from "./../../../../Images/Blog/2025HairTrends/Banner.png";
import prefectPreDateBanner from "./../../../../Images/Blog/PerfectPreDate/Banner.png";
import reasonsToTreatFeetBanner from "./../../../../Images/Blog/top_reasons_treat_feet/Banner.png";

const BlogMain = () => {
  const blogs = [
    {
      img: reasonsToTreatFeetBanner,
      head: "Top Reasons to Treat Your Feet to a Pedicalm-Glyco Foot Facial",
      para: "Time to give your feet the happy feet they deserve! Pedicalm-Glyco Foot Facial will have them feeling...",
      link: "/top-reasons-to-treat-your-feet-to-a-pedicalm-glyco-foot-facial",
    },
    {
      img: prefectPreDateBanner,
      head: "The Perfect Pre-Date Beauty Routine for a Magical Valentine's Day",
      para: "Valentine’s Day is the perfect occasion to celebrate love, whether you’re planning a romantic ...",
      link: "/the-perfect-pre-date-beauty-routine-for-a-magical-valentines-day",
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
      para: "A great haircut is more than just a grooming necessity—it’s a way to express your personality, enhance your ...",
      link: "/10-reasons-to-schedule-regular-haircuts",
    },
    {
      img: scalpDetoxBanner,
      head: "Scalp Detox: Why It’s the Secret to Gorgeous Hair?",
      para: "When it comes to achieving long, thick, and shiny hair, most people focus on the quality of...",
      link: "/scalp-detox-why-its-the-secret-to-gorgeous-hair",
    },
    {
      img: pedicureTreatmentDryBanner,
      head: "Best Pedicure Treatments for Dry and Cracked Heels",
      para: "Dry and cracked heels can be a common yet frustrating issue, especially for those who are on their feet all day or...",
      link: "/best-pedicure-treatments-for-dry-and-cracked-heel",
    },
    {
      img: sheaButterBanner,
      head: "Revitalize Your Hair with the Magic of Shea Butter Hair Spa!",
      para: "Hair is one of the most defining aspects of our appearance, yet it often suffers from exposure to pollution...",
      link: "/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa",
    },
    {
      img: clearerBanner,
      head: "Clearer Skin, Happier You: Acne Cure Facial Secrets",
      para: "Acne is one of the most common skin concerns affecting people of all ages Whether it's a persistent issue or...",
      link: "/clearer-skin-happier-you-acne-cure-facial-secrets",
    },
    {
      img: academyEnrollBanner,
      head: "Top 10 Reasons to Enroll in Our Premier Salon Academy Today",
      para: "Are you passionate about beauty, hair, or makeup and dream of turning your passion into a successful career?...",
      link: "/top-10-reasons-to-enroll-in-our-premier-salon-academy-today",
    },
    {
      img: christmasOfferBanner,
      head: "Get Festive Ready: Top Christmas Beauty Tips for Women & Men",
      para: "The holiday season is here, and with it comes an exciting opportunity to get festive, enjoy the celebrations, and...",
      link: "/get-festive-ready-top-christmas-beauty-tips-for-women-and-men",
    },
    {
      img: bodyWaxingMythBanner,
      head: "The Truth About Body Waxing: Myths, Facts, and Tips",
      para: "Body waxing is a popular hair removal method that has been around for centuries. It’s known for leaving your skin...",
      link: "/the-truth-about-body-waxing-myths-facts-and-tips",
    },
    {
      img: hairBleachBanner,
      head: "How Often Should You Bleach Your Hair? Expert Advice",
      para: "Bleaching your hair can be a transformative experience, offering a fresh and...",
      link: "/how-often-should-you-bleach-your-hair",
    },
    {
      img: eyelashExtensionBanner,
      head: "Eyelash Extensions for Special Occasions: Your Go-To Glam Look",
      para: "Special occasions call for making unforgettable impressions, and nothing enhances your...",
      link: "/eyelash-extensions-for-special-occasions-your-go-to-glam-look",
    },
    {
      img: BodyDTanTreatmentBanner,
      head: "The Role of Body D-Tan in Anti-Aging Skincare",
      para: "Aging is a natural process, but with the right skincare strategies, you can maintain radiant and...",
      link: "/the-role-of-body-d-tan-in-anti-aging-skincare",
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
      img: spaDayBanner,
      head: "How a Spa Day Can Boost Your Mental Health?",
      para: "In today’s fast-paced world, where stress and anxiety are common, taking time for ...",
      link: "/how-a-spa-day-can-boost-your-mental-health",
    },
    {
      img: pedimanicurebanner,
      head: "Exploring the Benefits of Professional Pedicures and Manicures",
      para: "When it comes to self-care and personal grooming, professional pedicures and manicures are ...",
      link: "/exploring-the-benefits-of-professional-pedicures-and-manicures",
    },
    {
      img: brazilWaxingBanner,
      head: "Everything You Need to Know About Brazilian Waxing",
      para: "When it comes to smooth, flawless skin, nothing beats the confidence that comes with a professional Brazilian waxing service. At SCENT, we take pride in ...",
      link: "/everything-you-need-to-know-about-brazilian-waxing",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(
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

    blogs.slice(startIndex, endIndex).forEach((blog) => {
      const img = new Image();
      img.src = blog.img;
    });
  };

  useEffect(() => {
    preloadImages(currentPage);
  }, [currentPage]);

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

export default BlogMain;
