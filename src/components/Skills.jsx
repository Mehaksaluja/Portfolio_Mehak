import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 70 },
  ];

  const softSkills = [
    { name: "Communication", level: 85 },
    { name: "Problem Solving", level: 80 },
    { name: "Teamwork", level: 75 },
    { name: "Adaptability", level: 80 },
  ];

  return (
    <section id="skills" className="w-full py-12 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#F9A826] text-center mb-8">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Technical Skills */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-[#F9A826] mb-4 text-center md:text-left">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-[#F9A826] transition-all duration-1000 ease-in-out ${
                      isVisible ? "w-" + skill.level : "w-0"
                    }`}
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[2px] bg-gray-500 h-full"></div>

          {/* Soft Skills */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-[#F9A826] mb-4 text-center md:text-left">
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-[#F9A826] transition-all duration-1000 ease-in-out ${
                      isVisible ? "w-" + skill.level : "w-0"
                    }`}
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
