import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolioData";
import { useState } from "react";

const filters = ["All", "Web", "UI", "App"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="container mx-auto py-12 px-4">
      <div data-aos="fade-up" className="text-center mb-10">
        <h2 className="text-3xl font-bold">My Portfolio</h2>
        <p className="text-gray-600">
          A showcase of beginner-level projects built to explore and strengthen my skills.
        </p>
      </div>

      <ul
        className="flex justify-center gap-3 mb-8 flex-wrap"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {filters.map((filter) => (
          <li
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`cursor-pointer px-4 py-1.5 rounded-full border border-teal-400 text-lg transition-all duration-200 ${
              activeFilter === filter
                ? "bg-teal-600 text-white"
                : "bg-white hover:bg-teal-200"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </li>
        ))}
      </ul>
      <div className="grid md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={`/portfolio/${item.images[0]}`}
              alt={item.title}
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            <Link
              to={`/portfolio/${item.id}`}
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
