import React from "react";

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 100 },
  { name: "Bootstrap", value: 100 },
  { name: "Tailwind CSS", value: 100 },
  { name: "JavaScript", value: 75 },
  { name: "TypeScript", value: 75 },
  { name: "React JS", value: 80 },
  { name: "Redux", value: 90 },
  { name: "MySQL", value: 85 },
  { name: "API", value: 90 },
  { name: "Node JS", value: 80 },
  { name: "Express JS", value: 80 },
];

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-teal-600">My Skills</h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            I love learning new technologies and improving my skills every day.
          </p>

          <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="150">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-medium text-teal-600">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
