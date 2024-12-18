import React, { useState, useEffect } from "react";
import {
  FaSave,
  FaShareAlt,
  FaBed,
  FaBath,
  FaLayerGroup,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BuyPlanModal from "./BuyPlanModal.jsx";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HousePlanCard = ({ plan }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(plan.image);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle manual image selection
  const handleImageChange = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Autoplay carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % plan.images.length; // Loop back to the start
      setSelectedImage(plan.images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, plan.images]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white shadow-lg rounded-md overflow-hidden border border-black/10"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden group">
        <img
          src={selectedImage}
          alt={plan.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Icon Buttons for Save and Share */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="p-2 bg-white text-blue-500 rounded-full shadow hover:bg-blue-100 duration-500">
            <FaSave size={16} />
          </button>
          <button className="p-2 bg-white text-green-500 rounded-full shadow hover:bg-green-100 duration-500">
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* Title and Plan Code Section */}
      <div className="py-2 px-8 border-b flex">
        <h3 className="text-lg font-bold text-gray-800 w-[80%]">
          {plan.title}
        </h3>
        <p className="text-sm text-gray-600 w-[20%] text-right">
          {plan.planCode}
        </p>
      </div>

      {/* Details Section */}
      <div className="p-6 px-8">
        {/* Description */}
        <p className="text-gray-700 italic mb-4 text-[.8rem]">
          {plan.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div className="flex flex-col items-center">
            <FaBed className="text-blue-500" size={20} />
            <p className="text-[.8rem]  mt-1">{plan.bedrooms} Bedrooms</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBath className="text-green-500" size={20} />
            <p className="text-[.8rem]  mt-1">{plan.bathrooms} Bathrooms</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLayerGroup className="text-orange-500" size={20} />
            <p className="text-[.8rem] mt-1">{plan.floors} Floors</p>
          </div>
        </div>

        {/* Buy and Downpayment Buttons */}
        <div className="flex space-x-4">
          <button
            className="flex-1 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition text-[.8rem] duration-500"
            onClick={() => setShowModal(true)}
          >
            Buy Plan
          </button>
          <button className="flex-1 py-2 bg-black text-yellow-500  rounded-md hover:bg-black/90 transition text-[.8rem] duration-500">
            Downpayment
          </button>
          {/* <button className="flex-1 py-2 border border-black text-black  rounded-md hover:bg-black/90 transition text-[.8rem] hover:text-white duration-500">
            Customize Plan
          </button> */}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-center space-x-2 px-4 mb-3">
        {plan.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer hover:opacity-75 ${
              index === currentIndex ? "border-2 border-yellow-500" : ""
            }`}
            onClick={() => handleImageChange(image, index)}
          />
        ))}
      </div>

      {/* Modal Component */}
      <BuyPlanModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        plan={plan}
      />
    </motion.div>
  );
};

export default HousePlanCard;
