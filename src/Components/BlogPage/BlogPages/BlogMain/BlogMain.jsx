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

const BlogMain = () => {
  const blogs = [
    {
      img: trimBlog,
      head: "Does Trimming Hair Make It Grow Faster?",
      para: "Trimming your hair regularly is key to maintaining long, healthy locks. The frequency of trims depends ...",
      link: "/does-trimming-hair-make-it-grow-faster",
    },
    {
      img: ChicSleek,
      head: "Chic & Sleek - Women’s Haircuts That Define You",
      para: "When it comes to expressing your personal style, few things make as bold a statement as your haircut. A well-chosen haircut not only ...",
      link: "/chic-and-sleek-womens-haircuts-that-define-you",
    },
    {
      img: BotoxImg,
      head: "How Hair Botox Treatments Can Transform Your Tresses",
      para: "In the quest for luscious, smooth, and youthful-looking hair, the beauty industry has introduced ...",
      link: "/how-hair-botox-treatments-can-transform-your-tresses",
    },
    {
      img: hairKeratin,
      head: "Why You Should Consider Keratin Hair Treatment",
      para: "In recent years, the beauty and hair care industry has seen a significant surge in  ...",
      link: "/why-you-should-consider-keratin-hair-treatment",
    },
    {
      img: top10,
      head: "Top 10 Trending Women Hair Colours & Highlights for 2024",
      para: "As we step into 2024, the world of hair fashion is buzzing with exciting new...",
      link: "/top-10-trending-women-hair-colours-and-highlights-for-2024",
    },
    {
      img: BouncyHairBlog,
      head: "Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon",
      para: "Discover essential tips for maintaining bouncy and beautiful curls during the monsoon season. Learn how to ...",
      link: "/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon",
    },
    {
      img: top5Spa,
      head: "The Top 5 Reasons to Book a Hair Spa Today! ",
      para: "Hair care is more than just shampooing and conditioning—it’s about deep  ...",
      link: "/the-top-5-reasons-to-book-a-hair-spa-today",
    },
    {
      img: olaplexBanner,
      head: "How Olaplex Helps Maintain Healthy Hair after Coloring?",
      para: "Coloring your hair can be a fun way to express yourself, but it can also be a challenge to maintain ...",
      link: "/how-olaplex-helps-maintain-healthy-hair-after-coloring",
    },
    {
      img: franchiseBanner,
      head: "Step-by-Step Guide to Setting up a Successful Salon Franchise in Bangalore",
      para: "Setting up a salon franchise in Bangalore is a lucrative business opportunity for ...",
      link: "/step-by-step-guide-to-setting-up-a-successful-salon-franchise-in-bangalore",
    },
    {
      img: eyeBrowBanner,
      head: "Why Eyebrow Shaping is the Secret to a Polished Look",
      para: "When it comes to beauty and grooming, eyebrows often take center stage. They frame your...",
      link: "/why-eyebrow-shaping-is-the-secret-to-a-polished-look",
    },
    {
      img: GlamorousImg,
      head: "Get Ready for a Glamorous Night Out: 5 Quick and Easy Hairstyles",
      para: "A glamorous night out calls for a stunning hairstyle that complements your outfit and makes you feel confident and ...",
      link: "/get-ready-for-a-glamorous-night-out-5-quick-and-easy-hairstyles",
    },
    {
      img: whyKeratinBanner,
      head: "Why Keratin Hair Treatment is the Ultimate Solution for Damaged Hair?",
      para: "Hair is often considered one of the most important features that enhance beauty, making it a major part...",
      link: "/why-keratin-hair-treatment-is-the-ultimate-solution-for-damaged-hair",
    },
    {
      img: brazilWaxingBanner,
      head: "Everything You Need to Know About Brazilian Waxing",
      para: "When it comes to smooth, flawless skin, nothing beats the confidence that comes with a professional Brazilian waxing service. At SCENT, we take pride in ...",
      link: "/everything-you-need-to-know-about-brazilian-waxing",
    },
    {
      img: pedimanicurebanner,
      head: "Exploring the Benefits of Professional Pedicures and Manicures ",
      para: "When it comes to self-care and personal grooming, professional pedicures and manicures are ...",
      link: "/exploring-the-benefits-of-professional-pedicures-and-manicures",
    },
    {
      img: spaDayBanner,
      head: "How a Spa Day Can Boost Your Mental Health?",
      para: "In today’s fast-paced world, where stress and anxiety are common, taking time for ...",
      link: "/how-a-spa-day-can-boost-your-mental-health",
    },
    {
      img: curlyHairBanner,
      head: "Is Curly Hair the Right Style for You? Here’s How to Find Out",
      para: "Curly hair is vibrant, full of life, and a surefire way to make a statement. But not everyone feels...",
      link: "/is-curly-hair-the-right-style-for-you-heres-how-to-find-out",
    },
    {
      img: hairColorBanner,
      head: "25+ Hair Colors Every Woman Should Try",
      para: "In the world of beauty, hair color is one of the most transformative tools at our disposal...",
      link: "/25-hair-colors-every-woman-should-try",
    },
    {
      img: hairBotoxTreatmentBanner,
      head: "Hair Botox Treatment: All You Need to Know for Smooth, Healthy Hair",
      para: "If you're looking to rejuvenate your hair, tame frizz, and bring life back to your locks, Hair Botox might be...",
      link: "/hair-botox-treatment-all-you-need-to-know",
    },
    {
      img: hairSpaTreatmentBanner,
      head: "Top Benefits of Regular Hair Spa Treatments",
      para: "Hair is one of the most defining aspects of personal style and grooming for both...",
      link: "/top-benefits-of-regular-hair-spa-treatments",
    },
    {
      img: BodyDTanTreatmentBanner,
      head: "The Role of Body D-Tan in Anti-Aging Skincare",
      para: "Aging is a natural process, but with the right skincare strategies, you can maintain radiant and...",
      link: "/the-role-of-body-d-tan-in-anti-aging-skincare",
    },
    {
      img: eyelashExtensionBanner,
      head: "Eyelash Extensions for Special Occasions: Your Go-To Glam Look",
      para: "Special occasions call for making unforgettable impressions, and nothing enhances your...",
      link: "/eyelash-extensions-for-special-occasions-your-go-to-glam-look",
    },
    {
      img: hairBleachBanner,
      head: "How Often Should You Bleach Your Hair? Expert Advice",
      para: "Bleaching your hair can be a transformative experience, offering a fresh and...",
      link: "/how-often-should-you-bleach-your-hair",
    },
    {
      img: bodyWaxingMythBanner,
      head: "The Truth About Body Waxing: Myths, Facts, and Tips",
      para: "Body waxing is a popular hair removal method that has been around for centuries. It’s known for leaving your skin...",
      link: "/the-truth-about-body-waxing-myths-facts-and-tips",
    },
    {
      img: christmasOfferBanner,
      head: "Get Festive Ready: Top Christmas Beauty Tips for Women & Men",
      para: "The holiday season is here, and with it comes an exciting opportunity to get festive, enjoy the celebrations, and...",
      link: "/get-festive-ready-top-christmas-beauty-tips-for-women-and-men",
    },
    {
      img: academyEnrollBanner,
      head: "Top 10 Reasons to Enroll in Our Premier Salon Academy Today",
      para: "Are you passionate about beauty, hair, or makeup and dream of turning your passion into a successful career?...",
      link: "/top-10-reasons-to-enroll-in-our-premier-salon-academy-today",
    },
    {
      img: clearerBanner,
      head: "Clearer Skin, Happier You: Acne Cure Facial Secrets",
      para: "Acne is one of the most common skin concerns affecting people of all ages Whether it's a persistent issue or...",
      link: "/clearer-skin-happier-you-acne-cure-facial-secrets",
    },
    {
      img: sheaButterBanner,
      head: "Revitalize Your Hair with the Magic of Shea Butter Hair Spa!",
      para: "Hair is one of the most defining aspects of our appearance, yet it often suffers from exposure to pollution...",
      link: "/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa",
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
