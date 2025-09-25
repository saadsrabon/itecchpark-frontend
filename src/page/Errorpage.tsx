import React from 'react';
import {motion} from "framer-motion"
const Errorpage:React.FC = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 to-orange-600 p-4">
        {/* Animated 404 text */}
        <motion.h1
          className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          404
        </motion.h1>

        {/* Error message animation */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-white mt-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        {/* Animated button */}
        <motion.a
          href="/"
          className="mt-6 sm:mt-8 bg-white text-orange-500 px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-md text-md sm:text-lg lg:text-xl font-semibold shadow-lg hover:bg-orange-700 hover:text-white transition-all duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Go Back Home
        </motion.a>
      </div>
    );
};

export default Errorpage;