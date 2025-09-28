import React from 'react';
import { FaPaperPlane, FaClock } from 'react-icons/fa';
import Image from '../assets/image.jpg'

const HeroSection = () => {
    return (
        <section className="min-h-[90vh] py-20 px-6 md:px-12 flex flex-col items-center justify-center bg-white relative">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">

                <div className="lg:w-1/2 text-center lg:text-left">

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                        Arnav Prajapati <span role="img" aria-label="waving hand">👋</span>
                    </h1>

                    <h2 className="text-xl md:text-3xl font-light text-gray-700 mb-6 flex items-center justify-center lg:justify-start">
                        <span className="w-10 md:w-30 h-px bg-gray-400 mr-3"></span>
                        Full Stack Developer
                    </h2>

                    <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                        Skilled in React and UI development, I create responsive web applications. I use my MERN Full Stack knowledge to ensure seamless integration and stability across the entire project. Let's connect on building reliable solutions.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-xl shadow-2xl hover:bg-gray-700 transition duration-300 gap-3"
                    >
                        Say Hello <FaPaperPlane className="ml-2 text-base" />
                    </a>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl relative">
                        <img
                            src={Image}
                            alt="Arnav Prajapati - Full Stack Developer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-col items-center gap-12 lg:gap-10">

                <p className="text-sm md:text-lg font-mono tracking-wider text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                    &lt; Passion | Dedication | Innovation /&gt;
                </p>

                <div className="flex items-center text-gray-600 font-medium">
                    <FaClock className="mr-2 text-xl" />
                    Scroll Down <span className="ml-1 text-2xl leading-none">↓</span>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;