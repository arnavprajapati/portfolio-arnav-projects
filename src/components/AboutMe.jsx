import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaTools, FaSchool } from 'react-icons/fa';

const AboutMe = () => {
    
    return (
        <div className="min-h-screen bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                
                <div className="mb-16 text-center">
                    <span className="text-base font-semibold text-blue-600 uppercase tracking-widest">
                        MY STORY
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mt-2 mb-6">
                        About Me
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        I'm a passionate **Full-Stack Developer** and **UX Designer** focused on building innovative, user-friendly solutions. I thrive on challenges, from integrating cutting-edge AI technologies to designing pixel-perfect interfaces. My journey is defined by continuous learning and a drive to create impactful digital experiences.
                    </p>
                </div>
                
                <hr className="my-16 border-gray-100" />

                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10 text-center">
                        Education
                    </h2>
                    
                    <div className="flex flex-col items-start mx-auto max-w-4xl px-4 md:px-0">

                        <div className="flex w-full">
                            <div className="flex flex-col items-center mr-6">
                                <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                    <FaGraduationCap className={`w-4 h-4 text-purple-600`} />
                                </div>
                                <div className={`w-px flex-grow bg-gray-300 mt-4`}></div>
                            </div>
                            <div className={`pb-12 text-left`}>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">Bachelor of Engineering In Computer Science</h3>
                                <p className="text-md font-semibold text-gray-600 mb-2">2023-Now | Lovely Professional University (LPU)</p>
                                <p className="text-gray-700 leading-relaxed max-w-2xl">Relevant courses include Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.</p>
                            </div>
                        </div>
                        
                        <div className="flex w-full">
                            <div className="flex flex-col items-center mr-6">
                                <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                    <FaSchool className={`w-4 h-4 text-purple-600`} />
                                </div>
                                <div className={`w-px flex-grow bg-gray-300`}></div>
                            </div>
                            <div className={`pb-12 text-left`}>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">Dr AK Public School</h3>
                                <p className="text-md font-semibold text-gray-600 mb-2">2017 - 2022 | (7th to 12th)</p>
                                <p className="text-gray-700 leading-relaxed max-w-2xl">Completed secondary and senior secondary education, focusing on core subjects and technical skills.</p>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="flex flex-col items-center mr-6">
                                <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                    <FaSchool className={`w-4 h-4 text-purple-600`} />
                                </div>
                                {/* No vertical line for the last item */}
                            </div>
                            <div className={`pb-12 text-left`}>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">Little Flower Children School Mau</h3>
                                <p className="text-md font-semibold text-gray-600 mb-2">2010 - 2016 | (LKG to 6th Class)</p>
                                <p className="text-gray-700 leading-relaxed max-w-2xl">Foundation years of primary education, building fundamental academic and social skills.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="my-16 border-gray-100" />

                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
                        I Can Help You With
                    </h2>
                    <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
                        My core strength lies in translating complex requirements into simple, beautiful, and high-performing full-stack applications.
                    </p>

                    <div className="flex justify-center max-w-5xl mx-auto">
                        <div className="w-full lg:w-1/2 p-6 md:p-10 bg-gray-50 rounded-l-xl border border-gray-100 shadow-md text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <FaLaptopCode className="w-6 h-6 mr-3 text-blue-600" />
                                Key Offerings
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-gray-700 flex items-start text-lg">
                                    <span className="text-blue-500 font-extrabold mr-3 mt-1">✓</span>
                                    Designing and developing high-performance, responsive UIs with React and managing complex state with Redux.
                                </li>
                                <li className="text-gray-700 flex items-start text-lg">
                                    <span className="text-blue-500 font-extrabold mr-3 mt-1">✓</span>
                                    Building scalable, secure backend systems using Node.js and Express.
                                </li>
                                <li className="text-gray-700 flex items-start text-lg">
                                    <span className="text-blue-500 font-extrabold mr-3 mt-1">✓</span>
                                    Implementing modern databases (MongoDB) for efficient data integrity and speed.
                                </li>
                                <li className="text-gray-700 flex items-start text-lg">
                                    <span className="text-blue-500 font-extrabold mr-3 mt-1">✓</span>
                                    Integrating third-party services and APIs, including AI/ML models (like Gemini API).
                                </li>
                                <li className="text-gray-700 flex items-start text-lg">
                                    <span className="text-blue-500 font-extrabold mr-3 mt-1">✓</span>
                                    Crafting user-centered designs and interactive prototypes in Figma.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2 p-6 md:p-10 bg-white rounded-r-xl border border-gray-100 border-l-0 shadow-md text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <FaTools className="w-6 h-6 mr-3 text-blue-600" />
                                Core Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">JavaScript (ES6+)</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">React</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Redux</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Node.js</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Express</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Tailwind CSS</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">MongoDB</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Git/GitHub</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        Ready to start a project? Let's connect and turn your idea into reality.
                    </p>
                    <a 
                        href="#"
                        className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-xl"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;