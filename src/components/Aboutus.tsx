import React, { useEffect, useState } from "react";
import about from "./../assets/about.png";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus: React.FC = () => {
  const [aboutData, setAboutData] = useState<{
    title?: string;
    content?: string;
    image?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      // Add these options to prevent conflicts
      offset: 50,
      delay: 100
    });
  }, []);

  // Refresh AOS when data loads
  useEffect(() => {
    if (!loading && aboutData) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [loading, aboutData]);

  // Fetch about data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        console.log("Fetching about data...");
        const response = await fetch("http://localhost:5000/api/sections/about");
        const result = await response.json();
        console.log("About API Response:", result);
        if (result.success && result.data.length > 0) {
          console.log("Setting about data:", result.data[0]);
          setAboutData(result.data[0]); // Use the first about item
        } else {
          console.log("No about data found or API failed");
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAboutData();
  }, []);

  console.log("AboutUs render - loading:", loading, "aboutData:", aboutData);

  if (loading) {
    return (
      <div className="lg:mt-[120px] md:mt-[80px] mt-[80px] max-w-[1240px] mx-auto flex lg:flex-row flex-col items-center lg:justify-between gap-8 px-4">
        <div className="lg:w-1/2 w-full overflow-x-hidden">
          <div className="animate-pulse bg-gray-300 rounded-[28px] lg:w-[543px] lg:h-[627px] md:w-full w-full h-auto"></div>
        </div>
        <div className="flex flex-col gap-6 justify-center lg:w-1/2 w-full text-center lg:text-left">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-300 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:mt-[120px] md:mt-[80px] mt-[80px] max-w-[1240px] mx-auto flex lg:flex-row flex-col items-center lg:justify-between gap-8 px-4">
      <div
        className="lg:w-1/2 w-full overflow-x-hidden"
        data-aos="fade-right"
        data-aos-delay="200" // Add delay to ensure content is ready
      >
        <img
          className="lg:w-[543px] lg:h-[627px] md:w-full w-full h-auto rounded-[28px]"
          src={aboutData?.image || about}
          alt="about"
          onLoad={() => {
            // Refresh AOS when image loads
            setTimeout(() => AOS.refresh(), 50);
          }}
        />
      </div>
      <div
        className="flex flex-col gap-6 justify-center lg:w-1/2 w-full text-center lg:text-left"
        data-aos="fade-left"
        data-aos-delay="400" // Stagger the animation
      >
        <h1 className="bold text-left text-[36px] lg:text-[64px] leading-[48px] lg:leading-[76.8px]">
          {aboutData?.title || "About Us"}
        </h1>
        <p className="regular text-left text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
          {aboutData?.content || "I-Tech BD established in 2015 with the mission to offer Digital Marketing services with affordable price and best Return On Investment (ROI). We believe quality over quantity. Our vision is to create a harmonized relation between our clients and reach milestones together as a team. With 500+ talented team members and 7 years of experience, we promise to make your Digital Presence remarkable."}
        </p>
        <div className="">
          <div 
            className="py-4 px-6 w-[180px] lg:w-[230px] mt-[32px] lg:mt-[64px] bg-black rounded-[40px] flex justify-center items-center opensans font-[600] text-white shadow text-[14px] lg:text-[20px] gap-2 lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link to={"/about"} target="_blank">
              More About Us
            </Link>
            <img className="w-5 h-5 lg:w-8 lg:h-8" src={arrow} alt="arrow" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;