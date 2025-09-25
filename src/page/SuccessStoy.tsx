import React, { useEffect } from "react";
import Heading from "../components/Heading";
import Successcard from "../components/Successcard";
import img from "./../assets/user.png";
import { motion } from "framer-motion"; // Import Framer Motion
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const SuccessStoy: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS on component mount
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto lg:mt-[120px] mt-[80px] mb-[100px] lg:mb-[139px] lg:px-0 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Heading
          title="Our Success Story"
          subtitle="We prioritize your success with customized strategies, delivering outstanding results."
        />
      </motion.div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {/* Add AOS attributes for scroll-triggered animations */}
        <div data-aos="fade-up">
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions."
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions."
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessStoy;
