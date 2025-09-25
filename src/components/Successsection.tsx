import React from "react";
import Heading from "../components/Heading";
import Successcard from "../components/Successcard";
import img from "./../assets/user.png";
import { motion } from "framer-motion";

const Successsection: React.FC = () => {
  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for each item (Heading, Successcard)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="max-w-[1240px] lg:px-0 px-4 mx-auto mt-[120px]"
    >
      {/* Heading with motion */}
      <motion.div variants={itemVariants}>
        <Heading
          title="Our Success Story"
          subtitle="We priotize your success with customized strategies , delivering outstanding results."
        />
      </motion.div>

      {/* Success Cards with motion */}
      <motion.div
        className="mt-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Successcard
            img={img}
            name="John Doe"
            designation="Founder or Lorem"
            description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Successsection;
