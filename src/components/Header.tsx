/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import img from "./../assets/header1.png";
import ReactPlayer from "react-player";
import arrow from "./../assets/arrow1.png";
import Pulsebutton from "./TolkingHeaderButton/PulseButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import AOS from "aos"; // For scroll animations
import "aos/dist/aos.css"; // AOS animation styles
import arrowg from "./../assets/arrow.png";
interface MousePosition {
  x: number | string;
  y: number | string;
}

const Header: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: "50%",
    y: "50%",
  });
  
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sections/hero");
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHeroData();
  }, []);
  useEffect(() => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 1240, // Animation duration
      easing: "ease-in-out", // Easing for scroll animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleHideImage = (hide: any) => {
    setIsImageVisible(!hide);
  };

  const handleMouseMove = (event: any) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: "50%", y: "50%" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative"
    >
      <div className="lg:px-0 px-4 flex justify-center items-center flex-col z-20">
        <div className="relative  mt-[60px] md:mt-[154px] mx-auto max-w-[1240px]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex justify-between lg:flex-nowrap flex-wrap gap-5  relative z-20 "
          >
            <div className="lg:w-1/2">
              <h1
                data-aos="fade-up"
                className="text-black bold  lg:text-[64px]  lg:leading-[76.8px] md:text-[56px] text-[34px] leading-[35px] flex items-center  md:leading-[64px] md:text-left"
                dangerouslySetInnerHTML={
                  loading ? undefined : data?.title ? 
                    { __html: data.title } : 
                    { __html: "Result Driven <br /> Digital Agency" }
                }
              >
               
              </h1>
              <img
                className="absolute left-[16%] lg:h-[280px] lg:w-[180px] w-[100px] h-[240px] top-40 md:top-32 -z-10"
                src={arrowg}
                alt="arrow"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:w-1/2">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="regular text-[14px] leading-[16px] md:text-[18px] lg:text-[20px] text-[#000030] md:leading-[25.6px] regular"
              >
                {loading ? (
                  <div className="animate-pulse space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                ) : data?.description ? (
                  data.description
                ) : (
                  "We help businesses grow through innovative digital solutions and strategic marketing approaches."
                )}
              </p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  delay: 0.5,
                }}
                className="flex  md:justify-normal justify-center gap-2 lg:mt-[59px] mt-[59px] md:mt-[49px]"
              >
                {loading ? (
                  <div className="flex gap-2">
                    <div className="animate-pulse py-3 px-6 w-[150px] md:w-[230px] bg-gray-300 rounded-[40px] h-12"></div>
                    <div className="animate-pulse py-4 px-6 w-[150px] md:w-[230px] bg-gray-300 rounded-[40px] h-12"></div>
                  </div>
                ) : (
                  <>
                    <Link
                      to={data?.primaryButton?.link }
                      target="_blank"
                      className="py-3 px-6 w-[150px] md:w-[230px]  bg-black rounded-[40px] flex justify-center items-center opensans font-[600] md:text-[20px] md:leading-[27.24px] text-white shadow text-[12px] gap-2 z-20"
                    >
                      {
                        data?.primaryButton?.text || "Book a Call"
                      }
                      <img
                        className="md:w-[36px] md:h-[36px] w-6 h-6"
                        src={arrow}
                        alt="arrow"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>
                    <a
                      href={data?.secondaryButton?.link}
                      className="py-4 px-6 border rounded-[40px] md:w-[230px] w-[150px] flex justify-center border-[#000030] items-center opensans font-[400] text-[12px] text-[#000030] md:text-[20px] z-20"
                    >
                    {
                      data?.secondaryButton?.text || "See Our Works"
                    }
                    </a>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="md:mt-[102px] relative mt-[80px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[28px] overflow-hidden lg:scale-100 scale-95  bg-white lg:w-[1240px] lg:h-[698px] md:w-[720px]  md:h-[405px] w-[320px] h-[180px] mx-auto relative"
          >
            {loading ? (
              <div className="lg:w-[1240px] lg:h-[698px] md:w-[720px] md:h-[405px] w-[320px] h-[180px] flex items-center justify-center">
                <div className="animate-pulse bg-gray-300 rounded-lg w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {isImageVisible && (
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={img}
                  className="lg:w-[1240px] lg:h-[698px] md:w-[720px]  md:h-[405px]"
                  alt="Displayed"
                />
                <div
                  style={{
                    position: "absolute",
                    top: mousePos.y,
                    left: mousePos.x,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute lg:top-[28%] md:top-[30%] top-[35%] md:h-[80px] md:w-[80px] img-fluid md:left-[39%]  lg:left-[44%] left-[44%]"
                >
                  <Pulsebutton onHideImage={handleHideImage} />
                </div>
              </div>
            )}
            {!isImageVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:w-[1240px] lg:h-[698px] md:w-[720px] md:h-[405px] w-[320px] h-[180px] flex justify-center items-center mx-auto"
              >
                <ReactPlayer
                  url={data?.videoUrl || "https://www.youtube.com/watch?v=4HQs-yyCrr"}
                  playing
                  height={"100%"}
                  width={"100%"}
                  controls
                  className="lg:w-[993px]  lg:h-[562px] md:w-[720px] md:h-[400px] w-[300px] h-[200px]"
                />
              </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
