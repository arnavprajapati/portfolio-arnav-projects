import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const EducationSection = () => {

    return (
        <section id="education" className="lg:py-20 px-6 max-h-[5vh] mt-20 lg:mt-0 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                    My Education
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    My academic journey has built a strong foundation for a career in computer science and web development.
                </p>

                <div className="flex flex-col items-start mx-auto max-w-2xl px-4 md:px-0">

                    <div className="flex w-full">
                        <div className="flex flex-col items-center mr-6">
                            <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                <FaGraduationCap className={`text-xl text-purple-600`} />
                            </div>
                            <div className={`w-px flex-grow bg-gray-300`}></div>
                        </div>
                        <div className={`pb-12 text-left`}>
                            <h3 className="text-2xl font-semibold mb-1 text-gray-900">Bachelor of Engineering In Computer Science</h3>
                            <p className="text-md font-medium text-gray-600 mb-2">2023-Now | Lovely Professional University (LPU)</p>
                            <p className="text-gray-600 leading-relaxed text-md font-medium">Relevant Coursework: Web Development (Full-Stack), Data Structures & Algorithms, Computer Systems Engineering and Artificial Intelligence</p>
                        </div>
                    </div>
                    
                    <div className="flex w-full">
                        <div className="flex flex-col items-center mr-6">
                            <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                <FaSchool className={`text-xl text-purple-600`} />
                            </div>
                            <div className={`w-px flex-grow bg-gray-300`}></div>
                        </div>
                        <div className={`pb-12 text-left`}>
                            <h3 className="text-2xl font-semibold mb-1 text-gray-900">Dr AK Public School Akbarpur</h3>
                            <p className="text-md font-medium text-gray-600 mb-2">2017 - 2022 | (7th to 12th)</p>
                            <p className="text-gray-600 leading-relaxed text-md font-medium">Completed secondary and senior secondary education, focusing on core subjects.</p>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex flex-col items-center mr-6">
                            <div className={`w-8 h-8 rounded-full border-4 border-purple-300 flex items-center justify-center bg-white z-10 shadow-lg`}>
                                <FaSchool className={`text-xl text-purple-600`} />
                            </div>
                            
                        </div>
                        <div className={`pb-12 text-left`}>
                            <h3 className="text-2xl font-semibold mb-1 text-gray-900">Little Flower Children School Mau</h3>
                            <p className="text-md font-medium text-gray-600 mb-2">2010 - 2016 | (LKG to 6th Class)</p>
                            <p className="text-gray-600 leading-relaxed text-md font-medium">Foundation years of primary education, building fundamental academic and social skills.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EducationSection;