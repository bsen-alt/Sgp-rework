import React from "react";
import { motion } from "framer-motion";

const LoginForm = () => (
  <motion.form
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
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
    <div className="flex justify-between items-center">
      <a
        href="#"
        className="text-sm text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold"
      >
        Forgot Password?
      </a>
    </div>
    <motion.button
      type="submit"
      className="w-full py-2 px-4 bg-gold text-black font-semibold rounded-lg shadow-md bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      Login
    </motion.button>
  </motion.form>
);

export default LoginForm;
