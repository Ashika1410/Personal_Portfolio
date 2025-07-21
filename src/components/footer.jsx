import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center relative">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-700">
          © <strong className="px-1">ASHIKA M</strong> All Rights Reserved
        </p>

        <div className="flex justify-center space-x-4 text-gray-600 my-4 text-3xl">
          <a href="https://www.linkedin.com/in/ashikam1404" className="p-2 border-2 rounded-full"><FaLinkedinIn className="hover:text-blue-600 transition" /></a>
          <a href="https://github.com/Ashika1410" className="p-2 border-2 rounded-full"><FaGithub className="hover:text-gray-600 transition" /></a>
          <a href="https://www.instagram.com/infinity_spark_ashi_14?igsh=OWJyc3Axd2hzNnZ2" className="p-2 border-2 rounded-full"><FaInstagram className="hover:text-pink-600 transition" /></a>
          <a href="https://www.pinterest.com/Ammukutty14" className="p-2 border-2 rounded-full"><FaPinterest className="hover:text-red-600 transition" /></a>
        </div>

        <p className="text-xs text-gray-500">
          Designed by{" "}
          <a href="https://tailwindcss.com/" className="text-gray-900 hover:underline">
            React || Tailwind CSS
          </a>{" "}
          Distributed by{" "}
          <a href="https://themewagon.com" className="text-gray-900 hover:underline">
            ThemeWagon
          </a>
        </p>
      </div>

      {/* Scroll to Top */}
      <a
        href="#"
        id="scroll-top"
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition"
        data-aos="fade-up" data-aos-delay="800"
      >
        <BsArrowUpShort size={34} />
      </a>
    </footer>
  );
}
