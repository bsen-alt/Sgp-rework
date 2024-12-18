import { motion } from "framer-motion";
import headerImg from "../../public/constructionHeaderImg.jpg";

const Construction = () => {
  const steps = [
    {
      title: "Consultation & Planning",
      description:
        "Our process begins with an in-depth consultation where we take the time to understand your goals, preferences, and requirements. From there, we develop a comprehensive plan tailored to your vision, ensuring every detail is considered to set a strong foundation for success.",
      image: "/constructionPlanning.jpg",
    },
    {
      title: "Design & Architecture",
      description:
        "With your vision in mind, our skilled designers and architects craft innovative and functional designs that perfectly balance aesthetics and practicality. We ensure that every plan meets your expectations while adhering to industry standards and regulations.",
      image: "/designArchitecture.jpg",
    },
    {
      title: "Construction & Execution",
      description:
        "Our experienced professionals oversee every aspect of the construction process, utilizing high-quality materials and advanced techniques. From ground-breaking to the final touches, we ensure precision, durability, and adherence to your timeline and budget.",
      image: "/constructionExecution.jpg",
    },
    {
      title: "Delivery & Handover",
      description:
        "Once the project is completed, we conduct a thorough quality check to ensure every detail is perfected. We then hand over the final product, on schedule and ready to exceed your expectations, marking the start of a new chapter for you.",
      image: "/handover.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 select-none">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: "url(/constructionHeaderImg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Construction Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 text-center"
          >
            Building Your Vision, One Brick at a Time.
          </motion.p>
        </div>
      </div>

      {/* Types of Construction */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">
          Our Construction Services
        </h2>
        <p className="mt-4 text-center text-gray-600 ">
          We specialize in a wide range of construction projects, tailored to
          your needs.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Construction",
              image: "/residentialConstruction.jpg",
              description:
                "Create the perfect home with our residential construction services, offering tailored solutions for single-family houses, apartments, and luxury estates.",
            },
            {
              title: "Commercial Buildings",
              image: "/commertialConstruction.jpg",
              description:
                "We specialize in designing and constructing high-quality commercial spaces, including office buildings, retail stores, and shopping centers.",
            },
            {
              title: "Industrial Projects",
              image: "/industrialConstruction.jpg",
              description:
                "From factories to warehouses, we deliver robust industrial facilities designed for efficiency, safety, and scalability in various sectors.",
            },
            {
              title: "Renovations",
              image: "/renovations.jpeg",
              description:
                "Transform your existing space with our renovation services, from simple upgrades to complete overhauls, enhancing both aesthetics and functionality.",
            },
            {
              title: "Landscaping",
              image: "/landscaping.png",
              description:
                "Our landscaping services focus on creating beautiful, sustainable outdoor spaces, from garden design to hardscaping and maintenance.",
            },
            {
              title: "Custom Structures",
              image: "/customStructures.jpg",
              description:
                "Bring your unique vision to life with custom structures, whether it’s a bespoke building, a unique facade, or a specialized space tailored to your needs.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-64 overflow-hidden rounded-lg shadow-lg bg-gray-900 select-none"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />

              {/* Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-500">
                <h3 className="text-4xl font-semibold text-white text-center items-center">
                  {service.title}
                </h3>
                <motion.p className="text-[.7rem] px-4 opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 z-10 text-white text-center">
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-200  py-16 px-48">
        <h2 className="text-3xl font-bold text-center">
          Our Construction Process
        </h2>
        <p className="mt-2 text-center text-gray-600 ">
          From concept to completion, here's how we bring your vision to life.
        </p>
        <div className="mt-12 space-y-8">
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
                className="w-full md:w-1/2 h-64 object-cover rounded-md"
              />
              <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 px-4">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50 ">
        <h2 className="text-4xl font-bold text-center text-gray-800 ">
          Why Choose SGP?
        </h2>
        <p className="mt-4 text-center text-gray-600 ">
          Explore the unparalleled advantages of partnering with our skilled and
          dedicated construction team.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Professionals",
              icon: "👷",
              description:
                "Our seasoned team brings decades of expertise, ensuring top-notch execution for every project.",
            },
            {
              title: "High-Quality Materials",
              icon: "🧱",
              description:
                "We source only the finest materials to deliver durable and long-lasting structures.",
            },
            {
              title: "Timely Delivery",
              icon: "⏰",
              description:
                "We are committed to meeting deadlines without compromising on quality.",
            },
            {
              title: "Tailored Solutions",
              icon: "🛠️",
              description:
                "Every project is customized to match your specific needs, ensuring complete satisfaction.",
            },
            {
              title: "Cost-Effective",
              icon: "💰",
              description:
                "Our competitive pricing and efficient processes guarantee maximum value for your investment.",
            },
            {
              title: "Sustainable Practices",
              icon: "🌱",
              description:
                "We employ eco-friendly methods, reducing environmental impact while maintaining quality.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-gradient-to-tr from-white via-gray-100 to-gray-50   shadow-lg rounded-lg p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-5xl">{benefit.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-gray-800  group-hover:text-white transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-center text-gray-600  group-hover:text-gray-200 transition-all duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-gray-800">
          Get in touch with our team to discuss your construction needs.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-gray-900 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Construction;
