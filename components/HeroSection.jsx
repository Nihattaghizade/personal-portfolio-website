"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Senior AI Engineer", "Computer Vision Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-5xl w-full my-8">
        {/* Decorative Circle
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9ef01a]/20 to-[#7ac70c]/20 border border-[#9ef01a]/30"></div>
        </div> */}

        {/* Animated Subtitle */}
        <div className="mb-6 overflow-hidden h-12">
          <p className="text-gray-400 text-xl sm:text-2xl animate-fade-in">
            Hello, I'm{" "}
            <span className="text-[#9ef01a] font-semibold">
              {titles[titleIndex]}
            </span>
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Artificial Intelligence and
          <br />
          Machine Learning{" "}
          <span className="inline-block px-4 py-2 bg-[#9ef01a] text-black rounded-2xl">
            Engineer
          </span>
          <br />
          <span className="text-gray-300">
            Based in California, Los Angeles.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-12 max-w-3xl leading-relaxed">
          With over 4 years of experience in developing and deploying machine
          learning models for fraud detection and platform safety. Skilled in
          data analysis, anomaly detection, and implementing scalable ML
          workflows. Proven ability to collaborate with cross-functional teams
          and mentor peers.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="group hover:scale-105 transition-transform">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                8
              </span>
              <span className="text-[#9ef01a]">+</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Years of
              <br />
              Experience
            </p>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                96
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Completed
              <br />
              Projects
            </p>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                10
              </span>
              <span className="text-[#9ef01a]">+</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Awards
              <br />
              Winning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
