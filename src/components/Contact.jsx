import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section id="contact" className="w-full py-12 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#F9A826] text-center mb-8">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-[#F9A826] mb-4">
              Get in Touch
            </h3>
            <p className="mb-4">
              Feel free to reach out to me for any inquiries or collaborations.
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> example@email.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +123 456 7890
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mehak-saluja/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9A826] hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Mehaksaluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9A826] hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://x.com/salujamehak5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9A826] hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[2px] bg-gray-500 h-full"></div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center bg-gray-700 p-2 rounded-md">
                <FaUser className="text-[#F9A826] mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-700 p-2 rounded-md">
                <FaEnvelope className="text-[#F9A826] mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-700 p-2 rounded-md">
                <FaPhone className="text-[#F9A826] mr-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-700 p-2 rounded-md outline-none text-white"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#F9A826] text-gray-900 py-2 rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-[#d88a14] transition"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
