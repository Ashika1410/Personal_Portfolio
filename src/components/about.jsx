import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Skills from "../details/skills";
import Stats from "../details/stats";
import Testimonials from "../details/testimonials";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 bg-gradient-to-b w-full from-white to-teal-50">
        <div className="w-full px-4 md:px-12 max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-teal-600">About Me</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I’m a dedicated and enthusiastic individual who loves learning and growing every day.
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-10" data-aos="fade-up" data-aos-delay="300">
            {/* Profile Image */}
            <div className="lg:w-1/3 w-full flex justify-center">
              <img
                src="/profile/Photo.jpg"
                alt="Profile"
                className="rounded-xl shadow-xl w-full max-w-xs object-cover"
                data-aos="fade-up" data-aos-delay="500"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-2/3 w-full" data-aos="fade-up" data-aos-delay="700">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Programmer & Web Developer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base">
                <ul className="space-y-3">
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Name:</strong> Ashika M</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Birthday:</strong> 14 October 2004</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Stream:</strong> Computer Science and Engineering</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Website:</strong> www.ashika1410.com</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Phone:</strong> +91-96773 49149</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>State:</strong> Tamil Nadu</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>City:</strong> Nagercoil, Kanyakumari</li>
                </ul>
                <ul className="space-y-3">
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Age:</strong> 20</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Degree:</strong> Bachelor's of Engineering</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Email:</strong> ashika04m@gmail.com</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Alternate Email:</strong> 004ashikam14@gmail.com</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Country:</strong> India</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Pincode:</strong> 629802</li>
                  <li><BsChevronRight className="inline mr-2 text-blue-500" /><strong>Freelance:</strong> Available</li>
                </ul>
              </div>
              <p className="italic text-gray-700 mt-6 leading-relaxed">
                I enjoy creating simple and thoughtful solutions that combine design and purpose effectively.
              </p>
              <p className="italic mt-3 text-gray-700 leading-relaxed">
                I am a motivated and curious learner with a strong interest in technology and problem-solving. As a fresher, I’m eager to take on new challenges, grow my skills, and contribute to meaningful projects while learning from real-world experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Skills />
        <Stats />
        <Testimonials />
      </section>
    </>
  );
}
