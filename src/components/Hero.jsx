import { useState } from "react";
import heroImage from "../assets/hero-image.png";

const Hero = ({ startAssistant, stopAssistant }) => {
  const [isAssistantActive, setIsAssistantActive] = useState(false);

  const handleStartAssistant = () => {
    startAssistant();
    setIsAssistantActive(true); // Show "Stop AI Assistant" button
  };

  const handleStopAssistant = () => {
    stopAssistant();
    setIsAssistantActive(false); // Show "Talk to AI Assistant" button
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-[#16202A] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 sm:px-4 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeInUp px-4 sm:px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Mehak Saluja
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#F9A826] mb-6">
            Frontend Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            I create visually appealing and highly functional web applications
            with React.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-[#F9A826] text-white px-6 py-3 rounded-lg font-medium text-lg cursor-pointer transition hover:bg-[#D9822B] shadow-md transform hover:scale-105 duration-300"
            >
              Download Resume
            </a>
            {!isAssistantActive ? (
              <button
                onClick={handleStartAssistant}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg cursor-pointer transition hover:bg-blue-700 shadow-md transform hover:scale-105 duration-300"
              >
                Talk to AI Assistant
              </button>
            ) : (
              <button
                onClick={handleStopAssistant}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium text-lg cursor-pointer transition hover:bg-red-700 shadow-md transform hover:scale-105 duration-300"
              >
                Stop AI Assistant
              </button>
            )}
          </div>
        </div>

        {/* Right Content - Responsive Image Styling */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Mehak | Frontend Developer"
            className="w-48 sm:w-56 md:w-[22rem] rounded-lg shadow-lg mb-6 md:mb-0 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
