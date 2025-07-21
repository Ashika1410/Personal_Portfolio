import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Starter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main py-12 bg-white dark:bg-gray-900">
      <section id="starter-section" className="section px-4 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Starter Section</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Content */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Use this page as a starter for your own custom pages.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Starter;
