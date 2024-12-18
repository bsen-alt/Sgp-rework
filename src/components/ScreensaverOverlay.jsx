// ScreensaverOverlay.jsx
import React, { useEffect, useState } from "react";
import screenSaverVid from "../assets/images/screenSaverVid.mp4";

const ScreensaverOverlay = () => {
  const [isInactive, setIsInactive] = useState(false);
  let inactivityTimeout;

  // Reset inactivity timeout on user interaction
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimeout);
    setIsInactive(false);

    inactivityTimeout = setTimeout(() => {
      setIsInactive(true);
    }, 200000); // 20 seconds of inactivity
  };

  useEffect(() => {
    // Start tracking inactivity
    inactivityTimeout = setTimeout(() => {
      setIsInactive(true);
    }, 200000);

    // Add event listeners to track user activity
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
    window.addEventListener("click", resetInactivityTimer);

    return () => {
      // Clean up event listeners and timeout
      clearTimeout(inactivityTimeout);
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      window.removeEventListener("click", resetInactivityTimer);
    };
  }, []);

  return (
    <>
      {isInactive && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Overlay Video */}
          <video
            src={screenSaverVid} // Replace with your video file path
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>

          {/* Floating Bar for Video Credits */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md px-4 py-2 rounded-md text-sm text-white shadow-lg">
            Video Credits:{" "}
            <span className="font-semibold">Your Video Source</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreensaverOverlay;
