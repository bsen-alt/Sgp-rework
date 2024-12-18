import React from "react";
import { motion } from "framer-motion";

const Signup = () => (
  <motion.form
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <div>
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-300"
      >
        Username
      </label>
      <input
        id="username"
        type="text"
        required
        placeholder="Enter your username"
        className="mt-1 w-full px-4 py-2 border rounded-lg bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
      />
    </div>
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-300"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="you@example.com"
        className="mt-1 w-full px-4 py-2 border rounded-lg bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-300"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        required
        placeholder="Enter your password"
        className="mt-1 w-full px-4 py-2 border rounded-lg bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
      />
    </div>
    <motion.button
      type="submit"
      className="w-full py-2 px-4 bg-gold text-black font-semibold rounded-lg shadow-md bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      Create Account
    </motion.button>
  </motion.form>
);

export default Signup;
