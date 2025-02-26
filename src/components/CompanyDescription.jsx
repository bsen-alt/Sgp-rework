import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import constructionPlan from "../assets/images/constructionPlan.jpg";
import doors2 from "../assets/images/doors2.png";
import windows from "../assets/images/windows.jpg";
import concreteStones from "../assets/images/concreteStones.jpg";

const services = [
  {
    title: "Construction Plans",
    subtitle: "Expert Planning",
    description: "Comprehensive construction plans tailored to your needs.",
    image: constructionPlan, // Replace with actual image paths
    buttonLink: "/services/construction-plans",
  },
  {
    title: "Ready-Made Doors",
    subtitle: "Stylish & Durable",
    description: "Wide variety of high-quality, ready-to-install doors.",
    image: doors2, // Replace with actual image paths
    buttonLink: "/services/ready-made-doors",
  },
  {
    title: "Ready-Made Windows",
    subtitle: "Premium Quality",
    description: "Durable and elegant windows for every requirement.",
    image: windows, // Replace with actual image paths
    buttonLink: "/services/ready-made-windows",
  },
  {
    title: "Concrete Stones",
    subtitle: "Reliable Solutions",
    description: "High-strength concrete stones for all construction needs.",
    image: concreteStones, // Replace with actual image paths
    buttonLink: "/services/concrete-stones",
  },
];

const CompanyDescription = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>

        {/* Introductory Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-md text-gray-600 mb-6"
        >
          At{" "}
          <span className="font-semibold ">
            SGP Construction & Holding Pvt. Ltd
          </span>
          , we pride ourselves on delivering exceptional services that meet the
          diverse needs of our clients. From expert construction plans to
          premium ready-made materials, we ensure quality and precision in every
          step.
        </motion.p>

        {/* Highlights or Features */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-yellow-500 text-white">
              <i className="fas fa-check-circle"></i>
            </div>
            <p className="text-gray-700 text-[.7rem]">
              <span className="font-semibold text-gray-900">
                High-Quality Materials:
              </span>{" "}
              We use the best materials to ensure longevity.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-yellow-500 text-white">
              <i className="fas fa-check-circle"></i>
            </div>
            <p className="text-gray-700 text-[.7rem]">
              <span className="font-semibold text-gray-900">
                Timely Delivery:
              </span>{" "}
              Always on schedule, ensuring smooth operations.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-yellow-500 text-white">
              <i className="fas fa-check-circle"></i>
            </div>
            <p className="text-gray-700 text-[.7rem]">
              <span className="font-semibold text-gray-900">
                Customer Satisfaction:
              </span>{" "}
              Tailored solutions to meet your unique needs.
            </p>
          </div>
        </motion.div> */}

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
