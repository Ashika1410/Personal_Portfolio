import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { portfolioItems } from "../data/portfolioData";

const PortfolioDetails = () => {
  const { id } = useParams();
  const portfolio = portfolioItems.find((item) => item.id === id);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!portfolio) {
    return <p className="text-center mt-10 text-red-500">Portfolio not found</p>;
  }

  return (
    <main className="main">
      <section className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-4">{portfolio.title}</h2>
          <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
            {portfolio.description}
          </p>
        </div>

        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                speed={600}
                slidesPerView={1}
              >
                {portfolio.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`/portfolio/${img}`}
                      alt={`slide-${index}`}
                      className="rounded-lg shadow-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold mb-4">Project Info</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Category:</strong> {portfolio.category}</li>
                  <li><strong>Tools:</strong> {portfolio.tools}</li>
                  <li><strong>Date:</strong> {portfolio.date}</li>
                  <li>
                    <strong>URL:</strong>{" "}
                    <a href={portfolio.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                      {portfolio.url}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetails;

