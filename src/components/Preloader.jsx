import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBlack from "../assets/images/logoBlack.png";

const Preloader = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const duration = 3000; // Total duration for the progress bar (3 seconds)
    const interval = 30; // Update progress every 30ms
    const step = (interval / duration) * 100; // Calculate progress increment per interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer); // Stop the interval once progress reaches 100%
          setTimeout(() => setIsPreloading(false), 300); // Add slight delay before transitioning
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    if (!isPreloading) {
      setTimeout(() => navigate("/"), 800); // Ensure the redirect happens after animations
    }
  }, [isPreloading, navigate]);

  return (
    <AnimatePresence>
      {isPreloading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }} // Slide to bottom
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center h-screen bg-gray-100 z-50"
        >
          {/* Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={logoBlack}
                alt="SGP Construction & Holding"
                className="w-24 mx-auto"
              />
              <h1 className="text-xl font-bold text-gray-800 mt-4">
                SGP Construction & Holding Pvt. Ltd
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full max-w-sm mt-6 mx-auto">
              <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gray-800 rounded-full"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 3, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
