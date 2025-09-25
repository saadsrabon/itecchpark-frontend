import React from "react";
import project from "./../assets/project.png";
import customer from "./../assets/customer.png";
import award from "./../assets/award.png";
import success from "./../assets/successrate.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const State: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="max-w-[1240px] mx-auto lg:mt-[120px] md:mt-[80px] mt-[80px] px-4">
      <div className="lg:w-[1240px] lg:h-[270px] bg-[#0E141E] rounded-[24px] py-[39px] px-[50px] grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2 ">
        {[
          { img: project, end: 3, label: "Complete Project", suffix: "K" },
          { img: customer, end: 20, label: "Happy Customers", suffix: "K+" },
          { img: award, end: 13, label: "Award Winning", suffix: "+" },
          { img: success, end: 99, label: "Success Rate", suffix: "%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex flex-col gap-1 text-white items-center"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-[64px] h-[64px] "
            />
            <div className="flex gap-1 text-[40px] md:text-[56px] text-center leading-[67.2px] font-bold">
              <CountUp start={0} enableScrollSpy end={item.end} />
              {item.suffix}
            </div>
            <p className="text-[18px] md:text-[24px] leading-[36px]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default State;
