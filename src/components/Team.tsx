/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import core1 from "./../assets/member/core1.png";
import core2 from "./../assets/member/core2.png";
import core3 from "./../assets/member/core3.png";
import design1 from "./../assets/member/design1.png";
import design2 from "./../assets/member/designer2.png";
import design3 from "./../assets/member/designer3.png";
import design4 from "./../assets/member/designer4.png";
import video1 from "./../assets/member/videoeditor1.png";
import webdeveloper1 from "./../assets/member/webdeveloper1.png";
import support1 from "./../assets/member/support1.png";
import seo1 from "./../assets/member/seo1.png";
import digi1 from "./../assets/member/digitalmarketer1.png";
import digi2 from "./../assets/member/digitalmarketer2.png";
import digi3 from "./../assets/member/digitalmarketer3.png";
import digi4 from "./../assets/member/digitalmarketer4.png";
import digi5 from "./../assets/member/digitalmarketer5.png";
import digi6 from "./../assets/member/digitalmarketer6.png";
import digi7 from "./../assets/member/digitalmarketer7.png";
import digi8 from "./../assets/member/digitalmarketer8.png";
// import digi9 from "./../assets/member/digitalmarketer9.png";
import digi10 from "./../assets/member/digitalmarketer10.png";

// import Nestedmember from "./Nestedmember";
import Heading from "./Heading";

interface Slide {
  section: string;
  name: string;
  designation: string;
  content: string;
  image: string; // Array of ImageItem objects
}

const Teammember: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const sections = useMemo(
    () => [
      "Core Team",
      "Design",
      "Digital Marketing",
      "Video Editing",
      "Web Development",
      "Support",
      "SEO",
    ],
    []
  );
  const slides: Slide[] = useMemo(
    () => [
      {
        section: "Core Team",
        name: "Masud Rana",
        designation: "Founder & Chief Executive Officer.",
        content:
          "Our CEO is a visionary leader who drives innovation and inspires exclience , guiding our team to consistently achieve outstanding results.",
        image: core1,
      },
      {
        section: "Core Team",
        name: "Abu Bakar Chowdhury",
        designation: "Co Founder & Chief Operating Officer",
        content: "",
        image: core2,
      },
      {
        section: "Core Team",
        name: "Biddut Bhattacharjee",
        designation: "Chief Technology Officer",
        content: "",
        image: core3,
      },

      {
        section: "Design",
        name: "Abdur Rabbi",
        designation: "Logo Designer- Team Lead",
        content: "",
        image: design1,
      },
      {
        section: "Design",
        name: "Ashadul Islam Ahad",
        designation: "Design Team - Asst. Team Lead",
        content: "",
        image: design2,
      },
      {
        section: "Design",
        name: "Md. Abdul Motaleb",
        designation: "Motion Graphics - Team Lead",
        content: "",
        image: design3,
      },
      {
        section: "Design",
        name: "Shakal Ahmed",
        designation: "Design Team - Team Lead",
        content: "",
        image: design4,
      },

      {
        section: "Digital Marketing",
        name: "Sume Akter",
        designation: "Marketer -Team Lead",
        content: "",
        image: digi1,
      },
      {
        section: "Digital Marketing",
        name: "Anisur Rahman",
        designation: "Instagram Linkdin Organic Marekting-Asst Team Lead",
        content: "",
        image: digi2,
      },
      {
        section: "Digital Marketing",
        name: "Dewan Miah",
        designation: "Facebook Organic Marketing -Team Member",
        content: "",
        image: digi3,
      },
      {
        section: "Digital Marketing",
        name: "Jaynto Kumar Roy",
        designation: "Facebook Organic Marketing - Team Member",
        content: "",
        image: digi4,
      },
      {
        section: "Digital Marketing",
        name: "Md Mostafijur Rahman",
        designation: "Lead Generation Expert",
        content: "",
        image: digi5,
      },
      {
        section: "Digital Marketing",
        name: "Nijam Uddin",
        designation: "Instagram Organic Marketing - Team Lead",
        content: "",
        image: digi6,
      },
      {
        section: "Digital Marketing",
        name: "Rakib Islam",
        designation: "Instagram+Twitter Organic Marketing -Asst. Team Lead",
        content: "",
        image: digi7,
      },
      {
        section: "Digital Marketing",
        name: "Shihab Uddin Fahim",
        designation: "Social Media Paid  Marketing - Team Lead",
        content: "",
        image: digi8,
      },
      {
        section: "Digital Marketing",
        name: "Tahmid Nabil",
        designation: "Facebook Organic Marketing - Team Lead",
        content: "",
        image: digi10,
      },

      {
        section: "Video Editing",
        name: "Al Af Muntasir",
        designation: "Video Editor - Team Leader",
        content: "",
        image: video1,
      },

      {
        section: "Web Development",
        name: "Sharier Nahid",
        designation: "Wordpress Developer- Team Lead",
        content: "",
        image: webdeveloper1,
      },

      {
        section: "Support",
        name: "Nahin Rahman",
        designation: "Support Team",
        content: "",
        image: support1,
      },

      {
        section: "SEO",
        name: "Ratul Islam Rafi",
        designation: "SEO Team - Team Member(SEO)",
        content: "",
        image: seo1,
      },
    ],
    []
  );

  // Function to handle text-based navigation clicks
  const handleTextNavigationClick = useCallback(
    (sectionIndex: number) => {
      // Get the index of the first slide of that section
      const sectionFirstIndex = slides.findIndex(
        (slide) => slide.section === sections[sectionIndex]
      );
      if (sectionFirstIndex !== -1 && swiperRef.current) {
        swiperRef.current.slideTo(sectionFirstIndex);
      }
    },
    [sections, slides]
  );

  return (
    <div className="max-w-[1240px] mx-auto mt-[80px] lg:mt-[120px]">
      <Heading
        title="Our Team"
        subtitle="Our team is a dynamic blend of creativity, expertise, and dedication, who are passionate about driving your success."
        data-aos="fade-up" // AOS animation
      />
      <div className="flex flex-col mt-[60px] justify-between lg:flex-row max-w-[1240px] items-center lg:gap-2 mx-auto lg:px-0 px-4 gap-16 md:gap-10">
        {/* Left-side Text Navigation */}
        <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] ">
          <div className="flex flex-col justify-center lg:space-y-4 md:space-y-3 space-y-1 mt-[24px]">
            {sections.map((section, index) => (
              <motion.button
                key={index}
                onClick={() => handleTextNavigationClick(index)}
                whileHover={{ scale: 1.05 }} // Hover effect
                whileTap={{ scale: 0.95 }} // Tap effect
                className={`text-lg flex items-center text-left transition-all duration-300 text-black ${
                  slides[activeIndex].section === section
                    ? "ms-1 text-[24px] md:text-[28px] md:leading-[32px] lg:text-[32px] lg:leading-[38.4px] bold"
                    : "regular text-[20px] leading-[24px] lg:text-[30px] md:text-[26px] md:leading-[28px]"
                } `}
              >
                <span
                  className={`${
                    slides[activeIndex].section === section
                      ? "h-[20px] md:h-[27px] w-[3px] md:w-[5px] me-1 bg-[#F04B23]"
                      : ""
                  } `}
                ></span>
                {section}
              </motion.button>
            ))}
          </div>
        </div>
        {/* Main Slider */}
        <div
          className="w-full lg:w-[827px]  md:h-[360px] lg:h-[453px] rounded-xl overflow-hidden"
          data-aos="fade-left"
        >
          <Swiper
            direction="vertical"
            spaceBetween={30}
            slidesPerView={1}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            touchReleaseOnEdges={true}
            modules={[Navigation, Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onTouchEnd={(swiper) => {
              if (swiper.isEnd) {
                document.body.style.overflowY = "auto";
              } else if (swiper.isBeginning) {
                document.body.style.overflowY = "auto";
              }
            }}
            className="teamswiper lg:h-[453px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                  animate={{ opacity: 1, x: 0 }} // On animation state
                  exit={{ opacity: 0, x: -50 }} // On exit state
                  transition={{ duration: 0.5 }} // Duration of animation
                  className="w-full h-full"
                >
                  <div
                    className={`p-3 lg:p-14 flex flex-col md:flex-row gap-5 lg:justify-start lg:items-center bg-[#F04B23] h-[580px] md:h-[360px] lg:h-[453px] rounded-[20px] ${
                      slide.content === ""
                        ? "h-[520px] overflow-hidden rounded-[20px]"
                        : "h-[580px]"
                    }`}
                  >
                    <img
                      src={slide.image}
                      className="w-full md:h-[333px] md:w-[305px] lg:w-[305px] lg:h-[333px] rounded-[20px] object-cover"
                      alt={slide.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex lg:justify-start lg:items-start  flex-col md:justify-center   ">
                      {" "}
                      <h1 className="text-[24px] lg:text-[36px] text-white  bold lg:leading-[43.2px] md:text-nowrap ">
                        {slide.name}
                      </h1>
                      <p className="text-white md:text-[22px] semibold md:leading-[26px] text-[18px] leading-[22.2px]  text-left">
                        {slide.designation}
                      </p>
                      <p className="text-sm regular lg:text-base mt-3 lg:mt-4 text-white">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Teammember;
