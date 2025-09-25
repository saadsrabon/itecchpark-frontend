import React, { useEffect } from "react";
import about from "./../assets/about.png";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // Importing Framer Motion

const Aboutus: React.FC = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Framer Motion Variants for more advanced animations
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100, // Increasing stiffness makes it snappier
        damping: 6, // Controls the amount of bounce
        mass: 1,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity, // Infinite hover animation
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="lg:mt-[120px] md:mt-[80px] mt-[80px] max-w-[1240px] mx-auto flex lg:flex-row flex-col items-center lg:justify-between gap-8 px-4">
      <div
        className="lg:w-1/2 w-full overflow-x-hidden"
        data-aos="fade-right" // AOS for smooth scrolling animation
      >
        <motion.img
          className="lg:w-[543px] lg:h-[627px] md:w-full w-full h-auto rounded-[28px]"
          src={about}
          alt="about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Advanced entry animation with Framer Motion
        />
      </div>
      <div
        className="flex flex-col gap-6 justify-center lg:w-1/2 w-full text-center lg:text-left"
        data-aos="fade-left" // AOS for basic scroll effect
      >
        <motion.h1
          className="bold text-left text-[36px] lg:text-[64px] leading-[48px] lg:leading-[76.8px]"
          initial="hidden"
          animate="visible"
          variants={textVariants} // Advanced text entry animation
        >
          About Us
        </motion.h1>
        <motion.p
          className="regular text-left text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]"
          initial="hidden"
          animate="visible"
          variants={textVariants} // Delayed text animation for paragraph
        >
          I-Tech BD established in 2015 with the mission to offer Digital
          Marketing services with affordable price and best Return On Investment
          (ROI). We believe quality over quantity. Our vision is to create a
          harmonized relation between our clients and reach milestones together
          as a team. With 500+ talented team members and 7 years of experience,
          we promise to make your Digital Presence remarkable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className=""
        >
          <motion.div
            className="py-4 px-6 w-[180px] lg:w-[230px] mt-[32px] lg:mt-[64px] bg-black rounded-[40px] flex justify-center items-center opensans font-[600] text-white shadow text-[14px] lg:text-[20px] gap-2  lg:mx-0"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap" // Button hover and tap animation using Framer Motion
          >
            <Link to={"/about"} target="_blank">
              More About Us
            </Link>
            <img className="w-5 h-5 lg:w-8 lg:h-8" src={arrow} alt="arrow" loading="lazy" decoding="async" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
