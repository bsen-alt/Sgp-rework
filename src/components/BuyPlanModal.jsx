import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
};

const BuyPlanModal = ({ showModal, onClose, plan }) => {
  if (!showModal) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white w-[90%] max-w-md rounded-lg p-6"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Modal Header */}
        <h2 className="text-xl text-center mb-4">
          Buy Plan & Estimate <br />
          <span className="text-lg font-semibold  text-slate-600">
            {plan.title}
          </span>
        </h2>
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-gray-800">2D Plan</p>
            <p className="text-gray-600">Rs. {plan.pricing["2DPlan"]}</p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 duration-500">
              Buy
            </button>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-gray-800">3D Plan</p>
            <p className="text-gray-600">Rs. {plan.pricing["3DPlan"]}</p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 duration-500">
              Buy
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-800">Estimate</p>
            <p className="text-gray-600">Rs. {plan.pricing["Estimate"]}</p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 duration-500">
              Buy
            </button>
          </div>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-200 py-2 rounded hover:bg-gray-300 duration-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default BuyPlanModal;
