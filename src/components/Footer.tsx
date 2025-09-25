import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import call from "../assets/footer/call.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instragram.png";
import youtube from "../assets/footer/youtube.png";
import linkdin from "../assets/footer/linkdin.png";
import email from "../assets/footer/email.png";
import logo from "./../assets/footerlogo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration for animations
      easing: "ease-out-cubic", // Smooth easing
      once: true, // Animations trigger once
      mirror: false, // No animation on scroll up
    });
  }, []);

  return (
    <div className="bg-black py-10 lg:py-0 lg:px-0 px-4 mt-[80px] lg:mt-[120px] md:mt-[90px]">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8">
          {/* Logo and Description Section */}
          <motion.div
            initial={{ opacity: 0, rotateY: -180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            data-aos="flip-left"
          >
            <img
              className=" -mt-[10px]"
              src={logo}
              alt="logo"
              loading="lazy"
              decoding="async"
            />
            <p
              className="text-white regular text-[20px] leading-[24px] mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I-Tech Pak BD serves as your Digital Marketing Partner in all ways
              possible. From Social Media Marketing, WordPress Customization to
              ranking your website in search engines (SEO), we assist you in
              your digital presence.
            </p>
            <div
              className="flex gap-3 mt-[36px]"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/facebook.com"}
                data-aos="flip-right"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/instagram.com"}
                data-aos="flip-right"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/linkedin.com"}
                data-aos="flip-right"
              >
                <img
                  src={linkdin}
                  alt="linkedin"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/youtube.com"}
                data-aos="flip-right"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="lg:ms-16" data-aos="slide-right">
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Services
            </h1>
            <div className="flex flex-col gap-2 mt-6">
              {[
                "Design",
                "Web Development",
                "Video Editing",
                "Search Engine Marketing",
                "Social Media Marketing",
                "Business Consultation",
                "Virtual Assistant",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                    to={"#services"}
                  >
                    {service}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="lg:ms-[70px]" data-aos="fade-down">
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Resources
            </h1>
            <div className="flex flex-col gap-2 mt-6">
              {["Home", "Services", "Reviews", "About", "Contact"].map(
                (resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link
                      className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                      to={`/${resource.toLowerCase()}`}
                    >
                      {resource}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:ms-10"
            data-aos="flip-up"
          >
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Contact
            </h1>
            <div className="flex flex-col gap-4 mt-6">
              <motion.a
                href="tel:8801521331108"
                className="flex gap-2 items-center text-white regular"
                data-aos="fade-right"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-4 h-4 "
                  src={call}
                  alt="call"
                  loading="lazy"
                  decoding="async"
                />
                <p>+8801521331108</p>
              </motion.a>
              <motion.a
                href="mailto:example@gmail.com"
                className="flex gap-2 items-center text-white regular"
                data-aos="fade-right"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-4 h-4"
                  src={email}
                  alt="email"
                  loading="lazy"
                  decoding="async"
                />
                <p>hello@itechpark.co</p>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Line and Rights Section */}
        <div className="-mt-5">
          <motion.div
            className="text-white text-[20px] regulars flex justify-center items-center text-center mb-6 mt-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.2 }}
          >
            © 2024 I -Tech Park BD. All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
