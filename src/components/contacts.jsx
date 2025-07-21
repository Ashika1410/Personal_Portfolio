import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-2">Contact</h2>
          <p className="text-center text-gray-600 mb-12">
            I'm always happy to connect and hear from you.
          </p>

          <div className="flex flex-col lg:flex-row gap-10" data-aos="fade-up" data-aos-delay="100">
            {/* Contact Info and Map */}
            <div className="lg:w-2/5 space-y-6">
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                <BsGeoAlt className="text-2xl text-teal-500" />
                <div>
                  <h3 className="font-semibold text-teal-700">Address</h3>
                  <p className="text-gray-700">9/33/1 Mela Kurunthencode, Kurunthencode (P.O)</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                <BsTelephone className="text-2xl text-teal-500" />
                <div>
                  <h3 className="font-semibold text-teal-700">Call Me</h3>
                  <p className="text-gray-700">+91-96773 49149</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                <BsEnvelope className="text-2xl text-teal-500" />
                <div>
                  <h3 className="font-semibold text-teal-700">Email Me</h3>
                  <p className="text-gray-700">ashika04m@example.com</p>
                </div>
              </div>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d147823.24956864992!2d77.51957759321463!3d8.23519055400765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752820696896!5m2!1sen!2sin" 
              className="w-full h-64 rounded-xl shadow-md"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 bg-gray-50 p-8 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-teal-600">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-teal-600">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium text-teal-600">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium text-teal-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
