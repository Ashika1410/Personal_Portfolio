import React, { useEffect, useState } from "react";

export default function Hero() {
    const messages = [
        "Web Developer",
        "Creative Person",
        "Programmer",
        "Freelancer"
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setFade(true);
            }, 300); // fade out duration
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden bg-opacity-25" data-aos="fade-up" data-aos-delay="300">
            <img
                src="/banner/bossgirl.jpeg"
                alt="Hero background"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
                data-aos="fade-in"
            />
            <div
                className="relative z-10 flex items-center py-12 justify-center h-full bg-opacity-25"
                data-aos-delay="300">
                <div className="text-center px-12">
                    <h2 className="text-4xl text-teal-600 md:text-5xl font-md mb-6" data-aos="fade-up" data-aos-delay="600">ASHIKA M</h2>
                    <p className="text-5xl text-teal-400 md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="800">I am a {messages[index]}</p>
                    <a
                        href="/about"
                        className="inline-block bg-teal-400 hover:bg-teal-500 mb-8 text-white font-medium px-6 py-3 rounded transition"
                        data-aos="fade-up" data-aos-delay="1000"
                    >
                        About Me
                    </a>
                </div>
            </div>
        </section>
    );
}


