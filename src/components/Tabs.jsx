import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-between mb-6 border-b border-gold">
    <button
      className={`w-1/2 py-2 font-bold ${
        activeTab === "login" ? "text-gold" : "text-gray-500"
      }`}
      onClick={() => setActiveTab("login")}
    >
      Login
    </button>
    <button
      className={`w-1/2 py-2 font-bold ${
        activeTab === "signup" ? "text-gold" : "text-gray-500"
      }`}
      onClick={() => setActiveTab("signup")}
    >
      Register
    </button>
  </div>
);

export default Tabs;
