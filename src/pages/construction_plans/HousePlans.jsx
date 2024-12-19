import { motion } from "framer-motion";
import { constructionHousePlans } from "../../data.js"; // Assuming the data for house plans is imported correctly
import HousePlanCard from "../../components/HousePlanCard.jsx";

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4"
      >
        House Plans
      </motion.h1>
      <p className="text-center text-gray-600 text-sm md:text-lg mb-8">
        View and choose your desired and dream house plan
      </p>

      {/* House Plans Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        {constructionHousePlans.map((plan) => (
          <HousePlanCard key={plan.planCode} plan={plan} />
        ))}
      </motion.div>
    </div>
  );
};

export default HousePlanPage;
