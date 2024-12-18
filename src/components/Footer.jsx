// Footer.jsx
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img src="/logo.png" alt="" className="h-12 mb-4" />
          <h1 className="text-white text-2xl font-bold mb-4">
            <span className="text-white">SGP</span>
            <span className="text-yellow-500">Construction</span>
            <span className="text-white">&</span>
            <span className="text-yellow-500">Holding</span>
          </h1>
          <p className="text-[0.7rem]">
            SGP Constructions & Holding specializes in delivering high-quality
            construction services, offering a wide range of building solutions.
            With years of experience, we bring excellence to every project.
          </p>
        </motion.div>

        {/* Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-[0.7rem]">
            {[
              <Link to="/">Construction Plans</Link>,
              <Link to="/">Pre Made Doors</Link>,
              <Link to="/">Pre Made Windows</Link>,
              <Link to="/">Concrete Stones</Link>,
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Our Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4">Our Company</h2>
          <ul className="space-y-2 text-[0.7rem]">
            {[
              <Link to="/about">About</Link>,
              <Link to="/contact">Contact</Link>,
              <Link to="/services">Services</Link>,
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Get In Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4">
            Get In Touch
          </h2>
          <ul className="space-y-2 text-[0.7rem]">
            <li>Kandy, Sri Lanka</li>
            <li>SL: 011-7109606</li>
            <li>pvt.construction.sgp@gmail.com</li>
          </ul>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="text-white flex justify-center space-x-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[
          {
            icon: <Facebook />,
            href: "https://www.facebook.com/sgp.construction.holding",
          },
          { icon: <Twitter />, href: "#" },
          { icon: <Linkedin />, href: "#" },
          { icon: <Instagram />, href: "#" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-yellow-500 duration-500 transition mb-6"
          >
            {item.icon}
          </Link>
        ))}
      </motion.div>
      <hr className="opacity-30" />

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 text-[.7rem]">
        &copy; Copyright 2023 By SGP Construction & Holding Pvt. Ltd <br />
        Design and Developed by{" "}
        <span className="text-yellow-500">Silicon Radon Networks Pvt. Ltd</span>
      </div>
    </footer>
  );
};

export default Footer;
