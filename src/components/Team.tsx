/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

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
  const [sections, setSections] = useState<string[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sections/team-members");
        const result = await response.json();
        if (result.success) {
          const teamData = result.data;
          
          // Extract unique sections from the API data object keys
          const uniqueSections = Object.keys(teamData);
          setSections(uniqueSections);
          
          // Transform API data to match the expected Slide interface
          // Flatten the object structure into an array
          const transformedSlides: Slide[] = [];
          Object.keys(teamData).forEach(sectionName => {
            const sectionMembers = teamData[sectionName];
            sectionMembers.forEach((member: any) => {
              transformedSlides.push({
                section: member.section,
                name: member.name,
                designation: member.designation,
                content: member.content || "",
                image: member.image
              });
            });
          });
          
          setSlides(transformedSlides);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        // Fallback to default data
        setSections([
          "Core Team",
          "Design",
          "Digital Marketing",
          "Video Editing",
          "Web Development",
          "Support",
          "SEO",
        ]);
        setSlides([
          {
            section: "Core Team",
            name: "Masud Rana",
            designation: "Founder & Chief Executive Officer.",
            content: "Our CEO is a visionary leader who drives innovation and inspires excellence, guiding our team to consistently achieve outstanding results.",
            image: "/assets/member/core1.png",
          },
          {
            section: "Core Team",
            name: "Abu Bakar Chowdhury",
            designation: "Co Founder & Chief Operating Officer",
            content: "",
            image: "/assets/member/core2.png",
          },
          {
            section: "Core Team",
            name: "Biddut Bhattacharjee",
            designation: "Chief Technology Officer",
            content: "",
            image: "/assets/member/core3.png",
          },
          {
            section: "Design",
            name: "Abdur Rabbi",
            designation: "Logo Designer- Team Lead",
            content: "",
            image: "/assets/member/design1.png",
          },
          {
            section: "Design",
            name: "Ashadul Islam Ahad",
            designation: "Design Team - Asst. Team Lead",
            content: "",
            image: "/assets/member/designer2.png",
          },
          {
            section: "Design",
            name: "Md. Abdul Motaleb",
            designation: "Motion Graphics - Team Lead",
            content: "",
            image: "/assets/member/designer3.png",
          },
          {
            section: "Design",
            name: "Shakal Ahmed",
            designation: "Design Team - Team Lead",
            content: "",
            image: "/assets/member/designer4.png",
          },
          {
            section: "Digital Marketing",
            name: "Sume Akter",
            designation: "Marketer -Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer1.png",
          },
          {
            section: "Digital Marketing",
            name: "Anisur Rahman",
            designation: "Instagram LinkedIn Organic Marketing-Asst Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer2.png",
          },
          {
            section: "Digital Marketing",
            name: "Dewan Miah",
            designation: "Facebook Organic Marketing -Team Member",
            content: "",
            image: "/assets/member/digitalmarketer3.png",
          },
          {
            section: "Digital Marketing",
            name: "Jaynto Kumar Roy",
            designation: "Facebook Organic Marketing - Team Member",
            content: "",
            image: "/assets/member/digitalmarketer4.png",
          },
          {
            section: "Digital Marketing",
            name: "Md Mostafijur Rahman",
            designation: "Lead Generation Expert",
            content: "",
            image: "/assets/member/digitalmarketer5.png",
          },
          {
            section: "Digital Marketing",
            name: "Nijam Uddin",
            designation: "Instagram Organic Marketing - Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer6.png",
          },
          {
            section: "Digital Marketing",
            name: "Rakib Islam",
            designation: "Instagram+Twitter Organic Marketing -Asst. Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer7.png",
          },
          {
            section: "Digital Marketing",
            name: "Shihab Uddin Fahim",
            designation: "Social Media Paid Marketing - Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer8.png",
          },
          {
            section: "Digital Marketing",
            name: "Tahmid Nabil",
            designation: "Facebook Organic Marketing - Team Lead",
            content: "",
            image: "/assets/member/digitalmarketer10.png",
          },
          {
            section: "Video Editing",
            name: "Al Af Muntasir",
            designation: "Video Editor - Team Leader",
            content: "",
            image: "/assets/member/videoeditor1.png",
          },
          {
            section: "Web Development",
            name: "Sharier Nahid",
            designation: "WordPress Developer- Team Lead",
            content: "",
            image: "/assets/member/webdeveloper1.png",
          },
          {
            section: "Support",
            name: "Nahin Rahman",
            designation: "Support Team",
            content: "",
            image: "/assets/member/support1.png",
          },
          {
            section: "SEO",
            name: "Ratul Islam Rafi",
            designation: "SEO Team - Team Member(SEO)",
            content: "",
            image: "/assets/member/seo1.png",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeamData();
  }, []);


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

  if (loading) {
    return (
      <div className="max-w-[1240px] mx-auto mt-[80px] lg:mt-[120px]">
        <div className="animate-pulse">
          <div className="h-16 md:h-20 lg:h-20 bg-gray-300 rounded-lg w-48 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-8"></div>
        </div>
        <div className="flex flex-col mt-[60px] justify-between lg:flex-row max-w-[1240px] items-center lg:gap-2 mx-auto lg:px-0 px-4 gap-16 md:gap-10">
          {/* Left-side Text Navigation Skeleton */}
          <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px]">
            <div className="animate-pulse space-y-4">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="animate-pulse">
                  <div className="h-6 md:h-8 lg:h-8 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Slider Skeleton */}
          <div className="w-full lg:w-[827px] md:h-[360px] lg:h-[453px] overflow-hidden">
            <div className="animate-pulse bg-gray-300 rounded-[20px] w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="w-full lg:w-[827px] md:h-[360px] lg:h-[453px] overflow-hidden">
          <Swiper
            direction="vertical"
            spaceBetween={30}
            slidesPerView={1}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            modules={[Navigation, Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            touchReleaseOnEdges={true}
            onTouchEnd={(swiper) => {
              if (swiper.isEnd) {
                document.body.style.overflowY = "auto";
              } else if (swiper.isBeginning) {
                document.body.style.overflowY = "auto";
              }
            }}
            onReachEnd={() => {
              document.body.style.overflowY = "auto";
            }}
            onReachBeginning={() => {
              document.body.style.overflowY = "auto";
            }}
            className="w-full lg:h-[453px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#F04B23] w-full h-full lg:h-[453px] rounded-[20px]"
                >
                  <div className="p-3 lg:p-14 flex flex-col md:flex-row gap-5 lg:justify-start lg:items-center h-full">
                    <img
                      src={slide.image}
                      className="w-full md:h-[333px] md:w-[305px] lg:w-[305px] lg:h-[333px] rounded-[20px] object-cover"
                      alt={slide.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex lg:justify-start lg:items-start flex-col md:justify-center">
                      <h1 className="text-[24px] lg:text-[36px] text-white bold lg:leading-[43.2px] md:text-nowrap">
                        {slide.name}
                      </h1>
                      <p className="text-white md:text-[22px] semibold md:leading-[26px] text-[18px] leading-[22.2px] text-left">
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
