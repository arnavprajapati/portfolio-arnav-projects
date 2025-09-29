import React, { useState } from 'react';
import { FaHome, FaFolderOpen, FaUser, FaEnvelope, FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onNavigate, isTransitioning }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (path) => {
        if (isTransitioning) return;

        if (onNavigate) {
            onNavigate(path);
        }
        if (isMenuOpen) {
            toggleMenu();
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 py-4 md:py-6 flex justify-center border-b border-gray-200 bg-white shadow-md">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-12">

                <button
                    onClick={() => handleNavClick('/')}
                    disabled={isTransitioning}
                    className="cursor-pointer px-3 py-2 md:px-6 md:py-3 rounded-full border border-gray-100 flex items-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="text-xl mr-2">⚫</span>
                    <span className="font-bold text-base md:text-xl text-gray-800 whitespace-nowrap"> &lt; Arnav Prajapati /&gt; </span>
                </button>

                <div className={`hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg space-x-6 xl:space-x-8`}>
                    <button
                        onClick={() => handleNavClick('/')}
                        disabled={isTransitioning}
                        className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaHome className="text-xl text-gray-500" />
                        Home
                    </button>

                    <button
                        onClick={() => handleNavClick('/skills')}
                        disabled={isTransitioning}
                        className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaCode className="text-xl text-gray-500" />
                        Skills
                    </button>

                    <button
                        onClick={() => handleNavClick('/projects')}
                        disabled={isTransitioning}
                        className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaFolderOpen className="text-xl text-gray-500" />
                        My Projects
                    </button>

                    <button
                        onClick={() => handleNavClick('/connect')}
                        disabled={isTransitioning}
                        className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaUser className="text-xl text-gray-500" />
                        Connect
                    </button>
                </div>

                <a
                    href="#contact"
                    disabled={isTransitioning}
                    className={`cursor-pointer hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg gap-3 text-base font-bold whitespace-nowrap`}
                >
                    <FaEnvelope className="text-xl " />
                    Contact Me
                </a>

                <button
                    onClick={toggleMenu}
                    className="cursor-pointer lg:hidden p-3 rounded-full border border-gray-200 shadow-md text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>

            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => handleNavClick('/')}
                            disabled={isTransitioning}
                            className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaHome className="text-xl text-gray-500" /> Home
                        </button>
                        <button
                            onClick={() => handleNavClick('/projects')}
                            disabled={isTransitioning}
                            className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaFolderOpen className="text-xl text-gray-500" /> My Projects
                        </button>
                        <button
                            onClick={() => handleNavClick('/skills')}
                            disabled={isTransitioning}
                            className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaCode className="text-xl text-gray-500" /> Skills
                        </button>
                        <button
                            onClick={() => handleNavClick('/connect')}
                            disabled={isTransitioning}
                            className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaUser className="text-xl text-gray-500" /> Connect
                        </button>
                        <a
                            onClick={toggleMenu}
                            href="#contact"
                            className={`cursor-pointer flex items-center gap-3 text-lg font-bold p-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition`}
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