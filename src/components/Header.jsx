import React from "react";
import { useEffect, useRef } from "react";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    let isPlayingForward = true;

    // Function to reverse video playback
    const handleVideoLoop = () => {
      if (video.paused || video.ended) return;

      // Check if the video is playing forward or backward
      if (isPlayingForward) {
        // If the video reaches the end, reverse the direction
        if (video.currentTime === video.duration) {
          isPlayingForward = false;
          video.currentTime = video.duration - 0.5; // Set the video just before the end
        }
      } else {
        // If the video reaches the start, reverse the direction again
        if (video.currentTime === 0) {
          isPlayingForward = true;
          video.currentTime = 0.5; // Set the video just after the start to avoid stuck frame
        }
      }

      // Continue looping the playback function
      requestAnimationFrame(handleVideoLoop);
    };

    // Start the loop function
    handleVideoLoop();

    return () => {
      // Cleanup when the component unmounts
      cancelAnimationFrame(handleVideoLoop);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden ">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/headerVid3.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-screen"
      ></video>

      {/* Black Overlay with Transparency */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content on top of the video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          SGP Construction <br />& Holding
        </h1>
        <p className="text-[0.7rem] mb-6 font-inter">
          Explore innovative solutions and cutting-edge designs that bring your
          ideas to life. Whether you're building your dream home, renovating an
          office, or creating custom products, we provide the plans and
          resources to make your vision a reality. Let us help you turn your
          concepts into tangible success.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-full text-sm font-medium hover:bg-slate-300 transition-all">
          Our Services
        </button>
        <button className="bg-yellow-500 text-black py-2 px-6 ml-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-all">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default Header;
