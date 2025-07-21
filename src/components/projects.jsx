import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main py-12 bg-white">
      <section id="projects" className="section px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-black">Projects</h2>
          <p className="text-gray-800 mt-2">
            A showcase of my recent work using modern tech stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-teal-400 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
