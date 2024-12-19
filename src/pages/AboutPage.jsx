import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ContactUsBar from "../components/ContactUsBar.jsx";

import sgpImg1 from "../assets/images/sgpImg1.jpg";
import sgpImg2 from "../assets/images/sgpImg2.jpg";
import sgpImg3 from "../assets/images/sgpImg3.jpg";
import sgpImg4 from "../assets/images/sgpImg4.jpg";
import sgpImg5 from "../assets/images/sgpImg5.jpg";
import sgpImg6 from "../assets/images/sgpImg6.jpg";
import sgpImg7 from "../assets/images/sgpImg7.jpg";
import sgpImg8 from "../assets/images/sgpImg8.jpg";
import sgpImg9 from "../assets/images/sgpImg9.jpg";
import sgpImg10 from "../assets/images/sgpImg10.jpg";
import sgpImg11 from "../assets/images/sgpImg11.jpg";
import sgpImg12 from "../assets/images/sgpImg12.jpg";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const galleryImages = [
    sgpImg1,
    sgpImg2,
    sgpImg3,
    sgpImg4,
    sgpImg5,
    sgpImg6,
    sgpImg7,
    sgpImg8,
    sgpImg9,
    sgpImg10,
    sgpImg11,
    sgpImg12,
  ];

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 cursor-pointer z-10 bg-white p-1 rounded-full"
        onClick={onClick}
      >
        <FaArrowRight size={20} />
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 cursor-pointer z-10 bg-white p-1 rounded-full"
        onClick={onClick}
      >
        <FaArrowLeft size={20} />
      </div>
    );
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "ease-in-out",
  };

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16 lg:px-24 mt-24 ">
      <div className="max-w-6xl mx-auto ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About{" "}
            <span className="text-yellow-500">SGP Construction & Holding</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            "පෙර සවි ඉදිකිරීම් ක්ෂේත්‍රයේ ලංකාවේ අංක එකේ සන්නාමය, ඉදිකිරීම්
            ක්ෂේත්‍රයේ සියළුම සේවාවන් එකම තැනින්."
          </p>
          <p className="text-gray-500 mt-2 italic text-xs sm:text-sm mb-18">
            "The number one brand in Sri Lanka’s construction sector, offering
            all construction services in one place."
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At <span className="font-bold">SGP Construction Holdings</span>,
              we specialize in providing end-to-end construction solutions that
              cater to diverse needs. Whether it’s luxurious cabanas in Ella,
              modern homes in Kandy, or custom-built solutions anywhere across
              Sri Lanka, our commitment to excellence makes us a trusted partner
              for clients looking for superior craftsmanship and long-term
              value.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Established with a vision to revolutionize the construction
              industry, we are known for delivering ultra-modern designs and
              maintaining impeccable standards of quality. We serve thousands of
              satisfied clients, offering projects that range from
              budget-friendly homes to premium luxury developments.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed ">
              Why choose SGP Construction Holdings? - We manage all aspects of{" "}
              <span className="font-bold">water</span>,{" "}
              <span className="font-bold">electricity</span>, and{" "}
              <span className="font-bold">maintenance</span> post-construction.
              - We offer fully <span className="font-bold">furnished</span>{" "}
              cabanas and properties, ready to move in. - Our{" "}
              <span className="font-bold">flexible payment plans</span> include
              initial payments and installment options tailored to fit your
              financial convenience.
            </p>
          </motion.div>

          {/* Right: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-4"
          >
            {galleryImages.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-md shadow-md w-full h-40 sm:h-52 object-cover cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </motion.div>
        </div>

        {/* Modal for Enlarged Image */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-1 rounded-sm shadow-lg max-w-4xl mx-auto relative"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-800 bg-slate-50/50 py-1 px-2 hover:text-gray-700 rounded-sm hover:bg-white duration-500"
                  onClick={closeModal}
                >
                  Close
                </button>
                <img
                  src={currentImage}
                  alt="Enlarged"
                  className="w-full h-auto rounded-sm"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Highlights Section */}
        <div className="bg-gray-100 mt-12 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h3>
          <ul className="text-gray-600 space-y-3 text-sm sm:text-base">
            <li>
              ♦ Minimum guaranteed income from cabanas:{" "}
              <span className="font-bold">3 Lakhs/Month</span>.
            </li>
            <li>
              ♦ Hassle-free property management including water, electricity,
              and maintenance.
            </li>
            <li>♦ Flexible payment plans tailored for your financial needs.</li>
            <li>♦ Sinnakara deeds for complete ownership security.</li>
            <li>
              ♦ Fully furnished, luxurious living spaces perfect for tourism
              enthusiasts.
            </li>
          </ul>
        </div>

        {/* Carousel Section */}
        <div className="mt-12 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Some of Our Samples
          </h3>
          <div className="relative">
            <Slider {...carouselSettings}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="px-2 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-sm shadow-md w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Contact Info */}
        <ContactUsBar />
      </div>
    </section>
  );
};

export default AboutPage;
