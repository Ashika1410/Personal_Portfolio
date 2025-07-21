import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anita Desai",
    role: "Mentor, SkillUp Academy",
    quote: "Ashika showed exceptional dedication during the course. Her attention to detail and willingness to learn stood out.",
    image: "/assets/testimonials/anita.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Senior Developer, Edureka",
    quote: "She completed all projects with great creativity and technical insight. A promising talent in the making.",
    image: "/assets/testimonials/rahul.jpg",
  },
  {
    name: "Deepa Raj",
    role: "Team Lead, AI Bootcamp",
    quote: "Her collaboration skills and problem-solving mindset made her a great team player throughout the sessions.",
    image: "/assets/testimonials/deepa.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">Testimonials</h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Feedback and appreciation from mentors, peers, and instructors during my learning journey.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-auto transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-teal-100 shadow-sm"
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <h4 className="text-sm text-teal-600 mb-3">{item.role}</h4>
                <p className="text-gray-600 italic text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
