import React from "react";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "8+", label: "Certifications Earned" },
  { value: "10+", label: "Skills Learned" },
  { value: "100+", label: "Hours of Coding Practice" },
];

export default function Stats() {
  return (
 <section id="stats" className="py-20 bg-gradient-to-b from-white to-teal-50">
  <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
    <h2 className="text-4xl font-extrabold text-center mb-4 text-teal-600">Quick Stats</h2>
    <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
      Here’s a snapshot of my learning journey and achievements so far.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-delay="100">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-5xl font-bold text-teal-500">{stat.value}</h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
