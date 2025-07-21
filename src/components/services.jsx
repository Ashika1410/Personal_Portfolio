import React from "react";

export default function Services() {

  const services = [
    {
      image: "/icons/frontend.jfif",
      title: "Front-End Development",
      description: "Building responsive websites using React, Tailwind CSS, and JavaScript.",
      delay: "100",
    },
    {
      image: "/icons/backend.jfif",
      title: "Back-End Basics",
      description: "Understanding of Node.js, Express.js, and working with REST APIs.",
      delay: "200",
    },
    {
      image: "/icons/code.jfif",
      title: "Clean Code Practices",
      description: "Writing maintainable, modular, and efficient code with Git version control.",
      delay: "300",
    },
    {
      image: "/icons/problemsolving.jfif",
      title: "Problem Solving",
      description: "Strong analytical and logical thinking skills with regular DSA practice.",
      delay: "400",
    },
    {
      image: "/icons/team.jfif",
      title: "Team Collaboration",
      description: "Comfortable working in teams using Agile and collaborative tools like GitHub.",
      delay: "500",
    },
    {
      image: "/icons/learning.jfif",
      title: "Continuous Learning",
      description: "Quick learner passionate about new technologies and real-world application.",
      delay: "600",
    },
  ];

  return (
    <main>
      <section id="services" className="services py-20 bg-gradient-to-b w-full from-white to-teal-50">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-600 mb-4">
              What I Can Do
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              As a passionate Computer Science graduate, I offer services that reflect my core strengths in development and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl shadow-md bg-teal-50 hover:shadow-lg transition-all duration-300 border border-gray-200`}
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="icon mb-6 relative w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-lg mx-auto">
                  <img src={service.image} alt="logo" className="h-16 w-16 rounded-full"/>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-xl font-semibold">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
