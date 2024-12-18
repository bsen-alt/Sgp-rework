import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, subtitle, description, image, buttonLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group h-72 rounded-lg overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out font-inter"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-5300 ease-in-out group-hover:justify-start p-6">
        {/* Title and Subtitle */}
        <div className="text-center transition-transform  group-hover:duration-500 ease-[cubic-bezier(0.50, 1, 0.10, 1)] group-hover:translate-y-[-.2rem]">
          <p className="text-sm font-medium text-gray-300">{subtitle}</p>
          <h3 className=" text-xl font-bold text-white">{title}</h3>
        </div>

        {/* Description and Button */}
        <div className="hidden group-hover:flex flex-col items-center justify-center mt-4">
          <p className="text-center text-gray-300 mb-4 text-[.7rem]">
            {description}
          </p>
          <a
            href={buttonLink}
            className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
