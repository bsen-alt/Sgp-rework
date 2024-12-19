import React from "react";
import { motion } from "framer-motion";

const ContactUsBar = () => {
  return (
    <div className="bg-gray-200 w-full h-48 sm:h-40 ">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-full py-4 px-4 sm:px-8 flex flex-col sm:flex-row items-center sm:justify-between max-w-6xl mx-auto gap-4 "
      >
        {/* Left Section */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
            Contact Us
          </h2>
        </div>

        {/* Middle Section */}
        <div className="flex-2 px-4 text-center">
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            Have questions? Contact us for quick and reliable assistance. Our
            team is ready to provide you with prompt support and tailored
            solutions.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center sm:text-right ">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsBar;
