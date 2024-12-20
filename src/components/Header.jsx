import React, { useEffect, useRef } from "react";
import headerVid3 from "../assets/images/headerVid3.mp4";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    let isPlayingForward = true;

    // Function to reverse video playback
    const handleVideoLoop = () => {
      if (video.paused || video.ended) return;

      if (isPlayingForward) {
        // Reverse direction when the video ends
        if (video.currentTime >= video.duration) {
          isPlayingForward = false;
          video.currentTime = video.duration - 0.5;
        }
      } else {
        // Reverse direction when the video starts
        if (video.currentTime <= 0) {
          isPlayingForward = true;
          video.currentTime = 0.5;
        }
      }

      // Continue looping playback
      requestAnimationFrame(handleVideoLoop);
    };

    handleVideoLoop();

    return () => {
      // Cleanup on unmount
      cancelAnimationFrame(handleVideoLoop);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src={headerVid3}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-screen"
      ></video>

      {/* Black Overlay with Transparency */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content on Top of the Video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight">
          SGP Construction <br />& Holding
        </h1>
        <p className="text-sm sm:text-base md:text-md text-center max-w-xl mb-6">
          Explore innovative solutions and cutting-edge designs that bring your
          ideas to life. Whether you're building your dream home, renovating an
          office, or creating custom products, we provide the plans and
          resources to make your vision a reality. Let us help you turn your
          concepts into tangible success.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-white text-black py-2 px-6 rounded-full text-sm sm:text-base font-medium hover:bg-slate-300 transition-all">
            Our Services
          </button>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-full text-sm sm:text-base font-medium hover:bg-yellow-600 transition-all">
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
