import React, { useState } from "react";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Singup.jsx";
import BugReportModal from "./BugReportModal.jsx";
import VisualGrid from "./VisualGrid.jsx";
VisualGrid;

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showBugModal, setShowBugModal] = useState(false);

  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <Login />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <VisualGrid />
      </div>

      {/* Bug Report Floating Button */}
      <button
        onClick={() => setShowBugModal(true)}
        className="fixed bottom-6 right-6 bg-gold text-black px-4 py-2 rounded-full shadow-lg bg-yellow-500"
      >
        Report a Bug
      </button>

      {showBugModal && (
        <BugReportModal onClose={() => setShowBugModal(false)} />
      )}
    </div>
  );
};

export default MainLayout;
