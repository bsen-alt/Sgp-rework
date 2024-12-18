import React from "react";
import Header from "../components/Header.jsx";
import { motion } from "framer-motion";
import CompanyDescription from "../components/CompanyDescription.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ContactUsBar from "../components/ContactUsBar.jsx";

const HomePage = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }} // Start above the screen
      animate={{ y: 0, opacity: 1 }} // Slide into view
      transition={{ duration: 0.8, ease: "easeInOut" }} // Sync delay with preloader exit
      className="relative"
    >
      <Header />

      <AboutSection />

      <CompanyDescription />

      <ContactUsBar />
    </motion.div>
  );
};

export default HomePage;
