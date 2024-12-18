import { motion } from "framer-motion";

const constructionPlans = [
  {
    title: "House Plans",
    description:
      "Discover a wide range of house plans designed to suit every lifestyle, from cozy cottages to luxurious modern homes. Tailored for functionality and aesthetics.",
    image: "../../public/houseplan.jpeg",
    link: "/services/construction-plans/house-plans",
  },
  {
    title: "Cabana Plans",
    description:
      "Immerse yourself in serene cabana designs, perfect for leisure retreats, poolside escapes, or private getaways. Combining relaxation and elegance seamlessly.",
    image: "../../public/cabanaplan.jpg",
    link: "/services/construction-plans/cabana-plans",
  },
  {
    title: "Garage Plans",
    description:
      "Explore innovative garage layouts tailored to maximize space and functionality, whether for single vehicles, multiple cars, or custom storage solutions.",
    image: "../../public/garageplan.jpg",
    link: "/services/construction-plans/garage-plans",
  },
  {
    title: "Guard Room Plans",
    description:
      "Efficient and secure guard room designs, crafted to enhance surveillance and provide comfort for security personnel, adaptable to various premises.",
    image: "../../public/guardroomplan.jpg",
    link: "/services/construction-plans/guardroom-plans",
  },
  {
    title: "Warehouse Plans",
    description:
      "Optimized warehouse designs for storage and industrial purposes, featuring practical layouts for seamless workflow, safety, and scalability.",
    image: "../../public/warehouseplan.jpg",
    link: "/services/construction-plans/warehouse-plans",
  },
  {
    title: "Restaurant Plans",
    description:
      "Crafted restaurant plans designed to create captivating dining spaces, with an emphasis on ambiance, functionality, and customer experience.",
    image: "../../public/restairantplan.jpg",
    link: "/services/construction-plans/restaurant-plans",
  },
  {
    title: "Shop Plans",
    description:
      "Retail space designs that combine modern aesthetics with practicality, optimized to create welcoming and efficient shopping environments.",
    image: "../../public/shopplan.png",
    link: "/services/construction-plans/shop-plans",
  },
  {
    title: "Factory Plans",
    description:
      "Comprehensive factory layouts that emphasize efficiency, safety, and scalability, tailored to meet industrial and manufacturing demands.",
    image: "../../public/factoryplan.png",
    link: "/services/construction-plans/factory-plans",
  },
];

const ConstructionPlans = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12  select-none">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: "url(../../public/constructionplanHeadImg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Construction Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 text-center"
          >
            Explore various construction plans that fit your needs
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Plans Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {constructionPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white shadow-xl rounded-md overflow-hidden hover:scale-105 transition-transform duration-500 group"
            >
              {/* Full Image as Background */}
              <motion.img
                src={plan.image}
                alt={plan.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all flex flex-col justify-center items-center text-center text-white p-4">
                {/* Title */}
                <motion.h3 className="text-3xl font-bold transition-transform duration-300 group-hover:translate-y-[-2px] z-10 translate-y-[40px]">
                  {plan.title}
                </motion.h3>

                {/* Description */}
                <motion.p className="text-[.7rem] px-4 mt-2 opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 z-10">
                  {plan.description}
                </motion.p>

                {/* Button */}
                <motion.a
                  href={plan.link}
                  className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-500 transition-all duration-300 z-10"
                >
                  Visit Section
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionPlans;
