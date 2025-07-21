import React from "react";

export default function Resume() {
  return (
    <main className="main">
      <section id="resume" className="resume py-8 px-8 bg-gradient-to-b w-full from-white to-teal-50">
        {/* Section Title */}
        <div className="container mx-auto px-4 mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-teal-600 text-center">Resume</h2>
        </div>

        <div className="container mx-auto px-4 py-3 grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-3xl font-bold text-teal-600 mb-4">Ashika M</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-teal-500">Objective</h4>
              <p className="text-sm italic text-gray-600 mt-4 mb-2">
                Motivated and detail-oriented Computer Science and Engineering graduate with a strong foundation in programming, web development, and problem-solving.
                Eager to contribute to real-world projects, learn from industry experts, and grow in a dynamic tech environment.
                Passionate about creating efficient digital solutions and staying updated with the latest technologies.
              </p>
              <ul className="text-sm text-gray-700 py-2 space-y-1">
                <li><strong>Address:</strong> Mela Kurunthencode, Kurunthencode (P.O).</li>
                <li><strong>Mobile No:</strong> +91-96773 49149</li>
                <li><strong>Email:</strong> ashika04m@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-teal-500 mb-4">Education</h3>
            <div className="mb-6">
              <h4 className="font-bold">Bachelor's of Engineering</h4>
              <span className="text-sm text-gray-600">2021 - 2025</span>
              <p className="text-sm text-gray-600 italic">Annai Vailankanni College Of Engineering, Pottalkulam.</p>
              <p className="text-sm text-gray-700">CGPA: 8.7</p>
            </div>

            <div>
              <h4 className="font-bold">Higher Secondary Education</h4>
              <span className="text-sm text-gray-600">2020 - 2021</span>
              <p className="text-sm text-gray-600 italic">Amala Convent Girls Higher Secondary School, Thuckalay.</p>
              <p className="text-sm text-gray-700">Percentage: 89 %</p>
            </div>

            <h3 className="text-xl font-semibold text-teal-600 mt-4 mb-4">Personal Information</h3>
            <div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Father's Name:</strong> Murukesan A</li>
                <li><strong>Mother's Name:</strong> Renuga S</li>
                <li><strong>Siblings:</strong> Akash M</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Internships</h3>
            <div className="mb-6">
              <h4 className="font-bold">Web Developer</h4>
              <span className="text-sm text-gray-600">June 2024 - August 2024</span>
              <p className="text-sm italic text-gray-600">Rexknar Creative Solutions</p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>As a Web Development Intern, I designed responsive and interactive front-end components using HTML, CSS, JavaScript and React.js.</li>
                <li>On the back end, I implemented server-side functionality using Node.js and Express Js, and managed data storage and retrieval with MySQL</li>
                <li>This internship enhanced my skills in front-end development, API integration, and database management, and gave me hands-on experience in developing scalable web solutions.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-teal-600 mb-4">Interests</h3>
            <div>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Web and App Development</li>
                <li>Problem Solving</li>
                <li>Reading World Histories and Biographies</li>
                <li>Participating in Tech Meetups and Seminars</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-teal-600 mt-4 mb-4">Hobbies</h3>
            <div>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Gardening</li>
                <li>Reading Books</li>
                <li>Listening to Musics</li>
                <li>Watiching Adventures and Science Fiction Movies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
