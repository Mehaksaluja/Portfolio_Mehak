import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#1B263B] shadow-md p-4 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-[#F5F5F5] text-xl md:text-2xl font-semibold">
          Portfolio
        </h1>

        {/* Desktop Navigation (Aligned Right) */}
        <nav className="hidden md:flex gap-10">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-[#B0C4DE] text-base md:text-lg cursor-pointer transition relative group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F5F5F5] menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 bottom-0 bg-[#1B263B] w-[250px] h-full p-6 flex flex-col items-center justify-start space-y-8 shadow-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-[#F5F5F5] text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="text-[#B0C4DE] text-lg font-medium cursor-pointer transition relative group"
            onClick={() => setIsOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
