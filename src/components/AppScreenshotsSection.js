"use client";
import { useState, useEffect, useRef } from "react";

export default function AppScreenshotsSection() {
  const screenshots = [
    { src: "/0.png", alt: "Screenshot 0" },
    // { src: "/1.png", alt: "Screenshot 1" },
    { src: "/2.png", alt: "Screenshot 2" },
    { src: "/3.png", alt: "Screenshot 3" },
    { src: "/4.png", alt: "Screenshot 4" },
    { src: "/5.png", alt: "Screenshot 5" },
    { src: "/6.png", alt: "Screenshot 6" },
  ];

  const containerRef = useRef(null);

  const scrollBy = 300; // Adjust scroll amount

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollBy, behavior: "smooth" });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            App Screenshots
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-12 flex space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {screenshots.map((screenshot, index) => (
            // <div
            //   key={index}
            //   className="flex-shrink-0 w-60 md:w-80 lg:w-96 bg-white shadow-md rounded-lg p-4"
            // >
            <img
              key={index}
              src={screenshot.src}
              alt={screenshot.alt}
              className="w-40 sm:w-52 md:w-60 lg:w-72 mb-4 rounded"
            />
            // </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
