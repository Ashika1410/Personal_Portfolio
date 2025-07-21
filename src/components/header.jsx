import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow bg-gray-100">
      <div className="w-full flex items-center justify-between px-4 py-3">

        <a
          href="/"
          className="flex items-center space-x-4 text-teal-400 hover:text-teal-600 transition-colors duration-300"
        >
          <img
            src="/profile/download.jfif"
            alt="AM"
            className="h-12 w-12 rounded-full shadow-md"
          />
          <span
            className="text-2xl font-bold tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ASHIKA M
          </span>
        </a>

        <nav className="hidden xl:flex space-x-12 items-center text-teal-400 font-medium text-xl">
          <a href="/" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Home</a>
          <a href="/about" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">About</a>
          <a href="/resume" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Resume</a>
          <a href="/services" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Services</a>
          <a href="/portfolio" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Portfolio</a>
          <a href="/projects" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Projects</a>
          <a href="/contact" className="hover:underline hover:text-teal-600 underline-offset-8 decoration-3 transition-all">Contact</a>
        </nav>

        <div className="hidden xl:flex space-x-12 text-2xl text-teal-400">
          <a href="https://www.linkedin.com/in/ashikam1404"><FaLinkedinIn className="hover:text-blue-600 transition" /></a>
          <a href="https://github.com/Ashika1410"><FaGithub className="hover:text-gray-600 transition" /></a>
          <a href="https://www.instagram.com/infinity_spark_ashi_14?igsh=OWJyc3Axd2hzNnZ2"><FaInstagram className="hover:text-pink-600 transition" /></a>
          <a href="https://www.pinterest.com/Ammukutty14"><FaPinterest className="hover:text-red-600 transition" /></a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden text-green-800">
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t px-4 py-4 space-y-3 text-teal-800 font-medium bg-gray-100">
          <a href="/" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Home</a>
          <a href="/about" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">About</a>
          <a href="/resume" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Resume</a>
          <a href="/services" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Services</a>
          <a href="/portfolio" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Portfolio</a>
          <a href="/projects" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Projects</a>
          <a href="/contact" className="block hover:underline hover:text-teal-600 underline-offset-8 decoration-4 transition-all">Contact</a>
          <div className="flex space-x-12 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/ashikam1404"><FaLinkedinIn className="hover:text-blue-600 transition" /></a>
            <a href="https://github.com/Ashika1410"><FaGithub className="hover:text-gray-600 transition" /></a>
            <a href="https://www.instagram.com/infinity_spark_ashi_14?igsh=OWJyc3Axd2hzNnZ2"><FaInstagram className="hover:text-pink-600 transition" /></a>
            <a href="https://www.pinterest.com/Ammukutty14"><FaPinterest className="hover:text-red-600 transition" /></a>
          </div>
        </div>
      )}
    </header>
  );
}

