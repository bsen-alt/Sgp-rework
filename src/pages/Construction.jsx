import { motion } from "framer-motion";
import headerImg from "../assets/images/constructionHeaderImg.jpg";
import constructionPlanning from "../assets/images/constructionPlanning.jpg";
import designArchitecture from "../assets/images/designArchitecture.jpg";
import constructionExecution from "../assets/images/constructionExecution.jpg";
import handover from "../assets/images/handover.png";

import residentialConstruction from "../assets/images/residentialConstruction.jpg";
import commertialConstruction from "../assets/images/commertialConstruction.jpg";
import industrialConstruction from "../assets/images/industrialConstruction.jpg";
import renovations from "../assets/images/renovations.jpeg";
import landscaping from "../assets/images/landscaping.png";
import customStructures from "../assets/images/customStructures.jpg";

const Construction = () => {
  const steps = [
    {
      title: "Consultation & Planning",
      description:
        "Our process begins with an in-depth consultation where we take the time to understand your goals, preferences, and requirements. From there, we develop a comprehensive plan tailored to your vision, ensuring every detail is considered to set a strong foundation for success.",
      image: constructionPlanning,
    },
    {
      title: "Design & Architecture",
      description:
        "With your vision in mind, our skilled designers and architects craft innovative and functional designs that perfectly balance aesthetics and practicality. We ensure that every plan meets your expectations while adhering to industry standards and regulations.",
      image: designArchitecture,
    },
    {
      title: "Construction & Execution",
      description:
        "Our experienced professionals oversee every aspect of the construction process, utilizing high-quality materials and advanced techniques. From ground-breaking to the final touches, we ensure precision, durability, and adherence to your timeline and budget.",
      image: constructionExecution,
    },
    {
      title: "Delivery & Handover",
      description:
        "Once the project is completed, we conduct a thorough quality check to ensure every detail is perfected. We then hand over the final product, on schedule and ready to exceed your expectations, marking the start of a new chapter for you.",
      image: handover,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 select-none">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[60vh]"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center"
          >
            Construction Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm md:text-lg lg:text-xl text-gray-300 text-center"
          >
            Building Your Vision, One Brick at a Time.
          </motion.p>
        </div>
      </div>

      {/* Types of Construction */}
      <section className="py-12 px-6 md:py-16 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Our Construction Services
        </h2>
        <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
          We specialize in a wide range of construction projects, tailored to
          your needs.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Residential Construction",
              image: residentialConstruction,
              description:
                "Create the perfect home with our residential construction services, offering tailored solutions for single-family houses, apartments, and luxury estates.",
            },
            {
              title: "Commercial Buildings",
              image: commertialConstruction,
              description:
                "We specialize in designing and constructing high-quality commercial spaces, including office buildings, retail stores, and shopping centers.",
            },
            {
              title: "Industrial Projects",
              image: industrialConstruction,
              description:
                "From factories to warehouses, we deliver robust industrial facilities designed for efficiency, safety, and scalability in various sectors.",
            },
            {
              title: "Renovations",
              image: renovations,
              description:
                "Transform your existing space with our renovation services, from simple upgrades to complete overhauls, enhancing both aesthetics and functionality.",
            },
            {
              title: "Landscaping",
              image: landscaping,
              description:
                "Our landscaping services focus on creating beautiful, sustainable outdoor spaces, from garden design to hardscaping and maintenance.",
            },
            {
              title: "Custom Structures",
              image: customStructures,
              description:
                "Bring your unique vision to life with custom structures, whether it’s a bespoke building, a unique facade, or a specialized space tailored to your needs.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-56 md:h-64 overflow-hidden rounded-lg shadow-lg bg-gray-900 select-none"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-200 py-12 px-6 md:py-16 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Our Construction Process
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm md:text-base">
          From concept to completion, here's how we bring your vision to life.
        </p>
        <div className="mt-8 md:mt-12 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full md:w-1/2 h-56 md:h-64 object-cover rounded-md"
              />
              <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 px-4">
                <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Construction;
