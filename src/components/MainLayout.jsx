import React, { useState } from "react";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Singup.jsx";
import BugReportModal from "./BugReportModal.jsx";
import Tabs from "./Tabs.jsx";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showBugModal, setShowBugModal] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Half */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('../../public/constructionplanHeadImg.jpg')",
        }}
      ></div>

      {/* Right Half */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center">
        <div className="w-full max-w-md p-6">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "login" ? <Login /> : <Signup />}
        </div>
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
