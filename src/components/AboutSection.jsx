import React from "react";
import { motion } from "framer-motion";
import sgpImg from "../assets/images/sgpImg.png";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            SGP Construction & Holding (Pvt) Ltd
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            At SGP Construction & Holding Pvt. Ltd, we are dedicated to
            delivering excellence in construction and related services. With a
            focus on innovation, quality, and customer satisfaction, we bring
            your visions to life. Our team of experienced professionals ensures
            every project is executed with precision, no matter the size or
            complexity.
          </p>
          <p className="text-gray-600 text-sm  leading-relaxed">
            From comprehensive construction plans to high-quality ready-made
            doors, windows, and durable concrete stones, SGP is your trusted
            partner for all your building needs. We take pride in combining
            modern technology with a commitment to sustainability, ensuring a
            better future for our clients and the communities we serve.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={sgpImg}
            alt="SGP Construction"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
