import { useState } from "react";
import { constructionPlans } from "../../data.js"; // Assuming you have the data for house plans
import { constructionHousePlans } from "../../data.js";
import HousePlanCard from "../../components/HousePlanCard.jsx";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HousePlanPage = () => {
  return (
    <div className="container mx-auto p-8 mt-24">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center text-gray-800 mb-2"
      >
        House Plans
      </motion.h1>
      <p className="text-center text-gray-600 mb-12">
        View and choose your desired and dream house plan
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-12"
      >
        {constructionHousePlans.map((plan) => (
          <HousePlanCard key={plan.planCode} plan={plan} />
        ))}
      </motion.div>
    </div>
  );
};

export default HousePlanPage;
