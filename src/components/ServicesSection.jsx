import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase } from 'react-icons/fa';

const ServiceSection = () => {
    return (
        <section id="services" className="lg:py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                    My Expertise
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    A dedicated full stack developer focused on delivering high-quality, performance-driven web solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 flex flex-col items-start">
                        <div className="mb-6 p-3 bg-gray-900 text-white rounded-full">
                            <FaLaptopCode className="text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Full Stack Development
                        </h3>
                        <p className="text-gray-600">
                            Building scalable, end-to-end web applications using the MERN stack (MongoDB, Express, React, Node.js).
                        </p>
                    </div>

                    <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 flex flex-col items-start">
                        <div className="mb-6 p-3 bg-gray-900 text-white rounded-full">
                            <FaMobileAlt className="text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Frontend Expertise
                        </h3>
                        <p className="text-gray-600">
                            Creating responsive, high-fidelity user interfaces with React, Redux (for state management), Tailwind CSS, and modern JavaScript.
                        </p>
                    </div>

                    <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 flex flex-col items-start">
                        <div className="mb-6 p-3 bg-gray-900 text-white rounded-full">
                            <FaDatabase className="text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Database Management
                        </h3>
                        <p className="text-gray-600">
                            Designing and optimizing databases with MongoDB for efficient data storage and retrieval.
                        </p>
                    </div>

                    <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 flex flex-col items-start">
                        <div className="mb-6 p-3 bg-gray-900 text-white rounded-full">
                            <FaCloud className="text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            API Integration
                        </h3>
                        <p className="text-gray-600">
                            Developing robust and well-documented RESTful APIs to ensure seamless communication between client and server.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;