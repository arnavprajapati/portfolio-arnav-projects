import React, { useState } from 'react'; 

import { FaHome, FaFolderOpen, FaUser, FaEnvelope, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <nav className="fixed top-0 w-full z-50 py-4 md:py-6 flex justify-center border-b border-gray-200 bg-white shadow-md">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-12">

                <Link to='/' className="px-3 py-2 md:px-6 md:py-3 rounded-full border border-gray-100 flex items-center shadow-lg">
                    <span className="text-xl mr-2">⚫</span>
                    <span className="font-bold text-base md:text-xl text-gray-800 whitespace-nowrap"> &lt; Arnav Prajapati /&gt; </span>
                </Link>

                <div className={`hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg space-x-6 xl:space-x-8`}>
                    <Link to="/" className="text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaHome className="text-xl text-gray-500" />
                        Home
                    </Link>

                    <Link to="/projects" className="text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaFolderOpen className="text-xl text-gray-500" />
                        My Projects
                    </Link>

                    <Link to="/skills" className="text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaCode className="text-xl text-gray-500" />
                        Skills
                    </Link>

                    <Link to="/about" className="text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaUser className="text-xl text-gray-500" />
                        About Me
                    </Link>
                </div>

                <a
                    href="#contact"
                    className={`hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg gap-3 text-base font-bold whitespace-nowrap`}
                >
                    <FaEnvelope className="text-xl " />
                    Contact Me
                </a>

                <button
                    onClick={toggleMenu} 
                    className="lg:hidden p-3 rounded-full border border-gray-200 shadow-md text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>

            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <Link onClick={toggleMenu} to="/" className="text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50">
                            <FaHome className="text-xl text-gray-500" /> Home
                        </Link>
                        <Link onClick={toggleMenu} to="/projects" className="text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50">
                            <FaFolderOpen className="text-xl text-gray-500" /> My Projects
                        </Link>
                        <Link onClick={toggleMenu} to="/skills" className="text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50">
                            <FaCode className="text-xl text-gray-500" /> Skills
                        </Link>
                        <Link onClick={toggleMenu} to="/about" className="text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50">
                            <FaUser className="text-xl text-gray-500" /> About Me
                        </Link>
                        <a
                            onClick={toggleMenu}
                            href="#contact"
                            className={`flex items-center gap-3 text-lg font-bold p-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition`}
                        >
                            <FaEnvelope className="text-xl" /> Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;