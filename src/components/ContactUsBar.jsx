// ContactUsBar.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactUsBar = () => {
  return (
    <div className="bg-gray-200 w- h-32">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-full py-6 px-4 sm:px-8 flex items-center justify-between max-w-6xl mx-auto"
      >
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Contact Us
          </h2>
        </div>

        {/* Middle Section */}
        <div className="flex-2 px-4">
          <p className="text-[.7rem]  text-gray-600 max-w-md text-center">
            Have questions? Contact us for quick and reliable assistance. Our
            team is ready to provide you with prompt support and tailored
            solutions.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-right">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4"
          >
            Get in Touch
          </motion.a>
          <motion.div
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 pointer-events-none animate-pulse"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsBar;
