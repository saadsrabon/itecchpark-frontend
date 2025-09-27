/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import design1 from "./../assets/service/design1.png";
import design2 from "./../assets/service/design2.png";
import design3 from "./../assets/service/design3.png";
import design4 from "./../assets/service/design4.png";
import web1 from "./../assets/service/web1.png";
import web2 from "./../assets/service/web2.png";
import web3 from "./../assets/service/web3.png";
import seo1 from "./../assets/service/seo1.png";
import seo2 from "./../assets/service/seo2.png";
import seo3 from "./../assets/service/seo3.png";
import social1 from "./../assets/service/social1.png";
import social2 from "./../assets/service/social2.png";
import social3 from "./../assets/service/social3.png";
import video1 from "./../assets/service/video1.png";
import virtual1 from "./../assets/service/virtual1.png";
import business1 from "./../assets/service/business.png";
import Nested from "../page/Nested";
import cyber from "./../assets/service/cyber.png";
interface ImageItem {
  image: string; // Adjust this based on the actual image type (e.g., string for URLs or module imports)
}import { useEffect } from 'react';


// Define the Slide interface with the section, title, content, and images array
interface Slide {
  section: string;
  title: string;
  content: string;
  images: ImageItem[]; // Array of ImageItem objects
}

const TextNavigationSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sections/services");
        const result = await response.json();
        if (result.success) {
          const servicesData = result.data;
          
          // Extract unique sections from the API data object keys
          const uniqueSections = Object.keys(servicesData);
          setSections(uniqueSections);
          
          // Transform API data to match the expected Slide interface
          // Flatten the object structure into an array
          const transformedSlides: Slide[] = [];
          Object.keys(servicesData).forEach(sectionName => {
            const sectionServices = servicesData[sectionName];
            sectionServices.forEach((service: any) => {
              transformedSlides.push({
                section: service.section,
                title: service.title,
                content: service.content,
                images: service.images ? service.images.map((img: any) => ({ image: img.image })) : []
              });
            });
          });
          
          setSlides(transformedSlides);
        }
      } catch (error) {
        console.error("Error fetching services data:", error);
        // Fallback to default data
        setSections([
          "Design",
          "Web Development", 
          "Video Editing",
          "Search Engine Marketing",
          "Social Media Marketing",
          "Business Consultation",
          "Virtual Assistant",
          "Cyber Security",
        ]);
        setSlides([
          {
            section: "Design",
            title: "Graphic Design",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [
              { image: design1 },
              { image: design2 },
              { image: web2 },
            ],
          },
          {
            section: "Design",
            title: "Motion Poster",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: design2 }],
          },
          {
            section: "Design",
            title: "UI/UX",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: design3 }],
          },
          {
            section: "Design",
            title: "Logo Animation",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: design4 }],
          },
          {
            section: "Web Development",
            title: "Custom Code",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: web1 }],
          },
          {
            section: "Web Development",
            title: "WordPress",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: web2 }],
          },
          {
            section: "Web Development",
            title: "Shopify",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: web3 }],
          },
          {
            section: "Video Editing",
            title: "Video Editing",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: video1 }],
          },
          {
            section: "Search Engine Marketing",
            title: "YouTube SEO",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: seo1 }],
          },
          {
            section: "Search Engine Marketing",
            title: "SEO",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: seo2 }],
          },
          {
            section: "Search Engine Marketing",
            title: "Google Ads",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: seo3 }],
          },
          {
            section: "Social Media Marketing",
            title: "Organic Social Media",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: social1 }],
          },
          {
            section: "Social Media Marketing",
            title: "Paid Social Media",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: social2 }],
          },
          {
            section: "Social Media Marketing",
            title: "Monetization",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: social3 }],
          },
          {
            section: "Business Consultation",
            title: "Business Consultation",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: business1 }],
          },
          {
            section: "Virtual Assistant",
            title: "Virtual Assistant",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: virtual1 }],
          },
          {
            section: "Cyber Security",
            title: "Cyber Security",
            content:
              "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
            images: [{ image: cyber }],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchServicesData();
  }, []);

  // Function to handle text-based navigation clicks
  const handleTextNavigationClick = (sectionIndex: number) => {
    // Get the index of the first slide of that section
    const sectionFirstIndex = slides.findIndex(
      (slide) => slide.section === sections[sectionIndex]
    );
    if (sectionFirstIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(sectionFirstIndex);
    }
  };

  if (loading) {
    return (
      <div
        id="works"
        className="flex flex-col justify-between lg:flex-row max-w-[1240px] items-center gap-10 md:gap-10 lg:gap-3 mx-auto mt-[60px] lg:mt-[120px] lg:px-0 px-4 "
      >
        {/* Left-side Text Navigation Skeleton */}
        <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] ">
          <div className="animate-pulse">
            <div className="h-16 md:h-20 lg:h-20 bg-gray-300 rounded-lg w-48 mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="animate-pulse">
                  <div className="h-6 md:h-8 lg:h-8 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Slider Skeleton */}
        <div className="w-full lg:w-[743px] lg:h-[730px] overflow-hidden">
          <div className="animate-pulse bg-gray-300 rounded-[20px] w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="works"
      className="flex flex-col justify-between lg:flex-row max-w-[1240px] items-center gap-10 md:gap-10 lg:gap-3 mx-auto mt-[60px] lg:mt-[120px] lg:px-0 px-4 "
    >
      {/* Left-side Text Navigation */}
      <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] ">
        <h1 className="bold lg:text-[64px] text-[28px] leading-[32px] md:text-[40px] lg:leading-[76.8px]">
          Services
        </h1>
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
      <div className="w-full  lg:w-[743px] lg:h-[730px]  overflow-hidden">
        <Swiper
          direction="vertical"
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true, // This allows native scroll on edges
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
            // Let the browser handle the scroll beyond the slider
            document.body.style.overflowY = "auto";
          }}
          onReachBeginning={() => {
            // Similarly, allow upward scrolling
            document.body.style.overflowY = "auto";
          }}
          className="w-full lg:h-[780px] "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                animate={{ opacity: 1, x: 0 }} // On animation state
                exit={{ opacity: 0, x: -50 }} // On exit state
                transition={{ duration: 0.5 }} // Duration of animation
                className=" bg-[#F04B23] w-full h-full lg:h-[730px]  rounded-[20px] "
              >
                <div className="lg:p-[56px] md:p-14 p-4 ">
                  <h1 className="bold lg:text-[48px] md:text-[36px] text-[26px] lg:leading-[57.6px] leading-[40px] text-white">
                    {slide.title}
                  </h1>
                  <p className="regular text-white text-[16px] lg:text-[20px] lg:leading-[30px] leading-[20px] mt-6 ">
                    {slide.content}
                  </p>
                  <Nested data={slide.images} />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextNavigationSlider;
