import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    techStack: ["React.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "portfolio.jpg",
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless UI/UX.",
    techStack: ["React.js", "Redux", "Firebase"],
    liveLink: "#",
    githubLink: "#",
    image: "ecommerce.jpg",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app fetching real-time data.",
    techStack: ["JavaScript", "API", "CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "weather.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 bg-[#0F172A] text-white text-center"
    >
      <h2 className="text-3xl font-bold text-[#F9A826] mb-8">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center text-sm text-[#F9A826]">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={project.liveLink}
                className="text-[#F9A826] hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="text-[#F9A826] hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
