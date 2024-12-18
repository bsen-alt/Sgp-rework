import { motion } from "framer-motion";

const categories = [
  {
    title: "Construction",
    description: "Explore our complete construction solutions.",
    image: "../assets/images/restaurantGif2.gif",
    link: "services/construction",
  },
  {
    title: "Construction Plans",
    description: "Customized and detailed construction plans.",
    image: "../assets/images/constructionPlan.jpg",
    link: "/services/construction-plans",
  },
  {
    title: "Ready Made Doors",
    description: "High-quality ready-made doors for your needs.",
    image: "../assets/images/doors2.png",
    link: "/services/ready-made-doors",
  },
  {
    title: "Ready Made Windows",
    description: "Durable and stylish ready-made windows.",
    image: "../assets/images/windows.jpg",
    link: "/services/ready-made-windows",
  },
  {
    title: "Concrete Stones",
    description: "Premium concrete stones for construction.",
    image: "../assets/images/concreteStones.jpg",
    link: "/services/concrete-stones",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-36 bg-gray-200  py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-gray-800 "
        >
          Our Services
        </motion.h1>
        <p className="mt-4 text-center text-gray-600 ">
          Choose a category to explore detailed services.
        </p>

        {/* Sorting Options */}
        <div className="mt-8 flex justify-end items-center">
          <label htmlFor="sort" className="text-sm text-gray-600  mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            className="bg-gray-200  text-gray-700  px-4 py-2 rounded-md"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Category Thumbnails */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white  shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Thumbnail Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 ">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600  mt-2">
                  {category.description}
                </p>
                {/* View More Button */}
                <a
                  href={category.link}
                  className="mt-4 inline-block text-sm font-medium text-yellow-500 hover:text-yellow-600 "
                >
                  View Details &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
