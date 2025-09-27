import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Successcard from "../components/Successcard";
import img from "./../assets/user.png";
import { motion } from "framer-motion";

interface SuccessStory {
  _id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  isActive: boolean;
  order: number;
}

const Successsection: React.FC = () => {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch success stories from API
  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sections/success");
        const result = await response.json();
        if (result.success) {
          setSuccessStories(result.data);
        }
      } catch (error) {
        console.error("Error fetching success stories:", error);
        // Fallback to default data
        setSuccessStories([
          {
            _id: "1",
            name: "John Doe",
            designation: "Founder or Lorem",
            description: "I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions.",
            image: img,
            isActive: true,
            order: 1
          },
          {
            _id: "2", 
            name: "John Doe",
            designation: "Founder or Lorem",
            description: "I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions.",
            image: img,
            isActive: true,
            order: 2
          },
          {
            _id: "3",
            name: "John Doe", 
            designation: "Founder or Lorem",
            description: "I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results, helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital marketing solutions.",
            image: img,
            isActive: true,
            order: 3
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSuccessStories();
  }, []);
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

  if (loading) {
    return (
      <div className="max-w-[1240px] lg:px-0 px-4 mx-auto mt-[120px]">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded w-64 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-8"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="animate-pulse">
              <div className="bg-gray-300 rounded-lg h-80"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
        {successStories.map((story) => (
          <motion.div key={story._id} variants={itemVariants}>
            <Successcard
              img={story.image}
              name={story.name}
              designation={story.designation}
              description={story.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Successsection;
