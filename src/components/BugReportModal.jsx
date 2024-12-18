import React from "react";
import { motion } from "framer-motion";

const BugReportModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96">
      <h3 className="text-lg font-bold mb-4">Report a Bug</h3>
      <textarea
        placeholder="Describe the bug..."
        rows={4}
        className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
      ></textarea>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-yellow-500"
        >
          Close
        </button>
      </div>
    </div>
  </motion.div>
);

export default BugReportModal;
