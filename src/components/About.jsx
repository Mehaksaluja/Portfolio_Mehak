import aboutImage from "../assets/about-image.jpg"; // Ensure you have an image in assets folder

const About = () => {
  return (
    <section
      id="about"
      className="w-full pt-20 pb-24 bg-[#16202A] text-white relative overflow-hidden"
    >
      {/* Subtle Background Element for a Professional Look */}
      <div className="absolute inset-0 bg-opacity-10 bg-gradient-to-b from-transparent to-[#0F172A] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center md:items-center relative z-10 gap-12">
        {/* Left - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-6 md:mb-0">
          <img
            src={aboutImage}
            alt="About Mehak"
            className="w-60 sm:w-80 md:w-[28rem] lg:w-[30rem] rounded-lg shadow-2xl border-4 border-transparent"
          />
        </div>

        {/* Right - Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-6 sm:px-8 flex flex-col justify-center animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#F9A826] relative">
            About Me
            <span className="block h-1 w-16 bg-[#F9A826] mt-2 mx-auto md:mx-0"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 tracking-wide">
            I am a passionate Frontend Developer with expertise in building
            intuitive and engaging web applications. With a deep knowledge of
            React.js and modern web technologies, I create seamless user
            experiences that bring ideas to life with elegance and efficiency.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 italic border-l-4 border-[#F9A826] pl-4">
            "Transforming ideas into elegant and efficient digital experiences."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
