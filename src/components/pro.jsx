import React, { useState, useMemo } from 'react'; // Added useMemo for efficiency
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
// Import your project thumbnails
import ChillZone from '../assets/projectsThumbnail/chillzone.png'
import EduLearn from '../assets/projectsThumbnail/edulearn.png'
import WardrobeHub from '../assets/projectsThumbnail/wardrobehub.png'
import CampusCuisine from '../assets/projectsThumbnail/campuscuisine.png'

// --- Project Data (Updated with 'category' key) ---
const projectData = [
    {
        title: "ChillZone",
        year: "2025",
        tags: ["React", "Node.js", "Socket.io", "UX/UI Design", "Full-Stack Development"],
        description: [
            "A full-stack, real-time chat web application designed to foster seamless communication and community building.",
            "Implemented real-time features including group chats, typing indicators, and instant notifications.",
            "Developed robust functionality for managing group chats, allowing users to add and remove members and edit group details.",
            "Focused on creating a responsive and intuitive user interface for an engaging and effortless chatting experience on both desktop and mobile.",
            "Utilized React for the front-end and a combination of Node.js and Socket.io for the scalable, real-time backend.",
            "The project showcases proficiency in modern web development practices and building complex, interactive applications."
        ],
        image: ChillZone,
        link: "https://chill-zone-frontend.onrender.com/",
        github: "YOUR_CHILLZONE_GITHUB_LINK" // Placeholder for GitHub link
    },
    {
        "title": "EduLearn",
        "year": "2025",
        "tags": ["React.js", "MongoDB", "Redux", "Video Streaming", "Authentication"],
        "description": [
            "A feature-rich educational platform for students and educators, built with React.js and Redux Toolkit for efficient state management across all course and user interactions.",
            "The platform offers distinct dashboards for two primary user roles: Educator and Student.",
            "Educators can easily upload, edit, and manage their course lectures (including video content) via an intuitive interface, creating comprehensive courses.",
            "Students can browse all available courses, enroll in them, and view lecture videos directly within the platform.",
            "Implemented robust user authentication and authorization to secure different functionalities for educators (e.g., lecture uploading) and students (e.g., course enrollment/video access).",
            "Used a MongoDB database to manage course content, user data, and enrollment records effectively."
        ],
        "image": EduLearn,
        "link": "https://edulearnfrontend.onrender.com/",
        github: "YOUR_EDULEARN_GITHUB_LINK"
    },
    {
        "title": "Wardrobe Hub",
        "year": "2025",
        "tags": ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay Integration", "Authentication", "E-commerce"],
        "description": [
            "A full-stack, responsive e-commerce platform for clothing, Wardrobe Hub, built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to handle high-volume product catalogs and user traffic.",
            "The platform offers two primary user interfaces: a customer-facing Shopping Portal and a secure Admin Panel.",
            "Customers can easily browse, search, filter clothes, add items to a cart, and complete purchases using a seamless checkout process.",
            "Integrated Razorpay for secure and efficient payment processing, supporting multiple payment methods for customer convenience.",
            "The Admin Panel provides powerful tools for product management (add, edit, delete products), real-time tracking of placed orders, and inventory control.",
            "Implemented robust user authentication and authorization to secure both customer accounts and admin functionalities."
        ],
        "image": WardrobeHub,
        "link": "https://wardrobehub-frontend.onrender.com/",
        github: "YOUR_WARDROBEHUB_GITHUB_LINK"
    },
    {
        "title": "Campus Cuisine",
        "year": "2025",
        "tags": ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication", "Rating & Review", "Refresh Tokens"],
        "description": [
            "A full-stack, mobile-responsive platform for students of LPU (Lovely Professional University), Campus Cuisine is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
            "The platform allows students to rate and review the food (dishes) available at different food courts and blocks across the campus.",
            "Users can easily search, filter, and view ratings and reviews for various food courts, their overall quality, and specific dishes.",
            "The system offers two main interfaces: a user-facing portal for student reviews and a secure Admin Panel.",
            "The Admin Panel provides powerful control, enabling administrators to add, edit, and delete food courts, blocks, and dishes.",
            "Implemented secure, full authentication using Access Tokens for authorizing API requests and Refresh Tokens for persistent user sessions, securing student accounts and admin access."
        ],
        "image": CampusCuisine,
        "link": "https://campus-cuisine-7k65.onrender.com/",
        github: "YOUR_CAMPUSCUISINE_GITHUB_LINK"
    }
];

// --- Filter Component ---
const FilterTabs = ({ categories, activeFilter, setActiveFilter }) => {
    return (
        <div className="flex flex-wrap gap-4 mb-10 overflow-x-auto pb-2 border-b border-gray-200">
            {categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`
                            px-6 py-2 rounded-xl font-medium text-medium cursor-pointer whitespace-nowrap transition-all duration-300
                            ${isActive
                                ? 'bg-gray-900 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }
                        `}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

// --- Modal Component (Kept as is) ---
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-md p-4 transition-opacity duration-300 "
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] shadow-2xl transform transition-transform duration-300 scale-100 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 bg-gray-100 p-2 rounded-full transition-colors z-10 cursor-pointer"
                    aria-label="Close"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2 ">
                    {/* Image and Links Column */}
                    <div className="p-6 md:p-8 flex flex-col justify-center bg-gray-50 rounded-l-2xl ">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto max-h-72 object-cover object-top"
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>

                        <div className="flex flex-wrap gap-2 mb-6 ">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-semibold border border-gray-300 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.link}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                Live Demo
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description Column */}
                    <div className="p-6 md:p-8 ">
                        <div className="text-sm text-gray-500 mb-4 font-medium">Completed: {project.year}</div>

                        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Project Overview</h3>
                        <div className="space-y-3">
                            {project.description.map((point, pointIndex) => (
                                <p key={pointIndex} className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                    <span className="text-green-500 font-bold text-base shrink-0 mt-1">✓</span>
                                    <span className='font-medium'>{point}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Main Projects Component ---
const MyProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    // State for filtering. 'All' is the default.
    const [activeFilter, setActiveFilter] = useState('All');

    // Define all available categories
    const categories = ['All', 'React', 'Frontend Design'];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // Filtering logic using useMemo for optimization
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projectData;
        }
        return projectData.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="min-h-screen mt-5 bg-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        My Projects
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
                        A showcase of my work in full-stack development and user-centered design. Filter by category to see related projects.
                    </p>
                </div>

                <div className="space-y-3">
                    <p className="w-fit text-sm md:text-base font-mono tracking-wider text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                        Building solutions that make a difference
                    </p>
                    <p className="w-fit text-sm md:text-base font-mono tracking-wider text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                        &lt; Innovation | Problem Solving | Impact /&gt;
                    </p>
                </div>

                {/* --- Filter Tabs Component --- */}
                <FilterTabs
                    categories={categories}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                {/* --------------------------- */}


                {/* Compact Card Layout (Now uses filteredProjects) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
                        >
                            {/* Project Image Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gray-900/10"></div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                {/* Title and Year */}
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight flex-grow">
                                        {project.title}
                                    </h2>
                                    <span className="text-gray-400 font-semibold text-sm shrink-0 ml-2">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Tags */}


                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-3 border-t border-gray-100">
                                    {/* Live Demo Link (Website) - Black button */}
                                    <a
                                        href={project.link}
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-black text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:bg-gray-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View Live ${project.title}`}
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        Live Demo
                                    </a>

                                    {/* Source Code Link (GitHub) - Gray button */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="inline-flex items-center justify-center p-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View Source Code for ${project.title}`}
                                        >
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                    )}

                                    {/* View Details Button to open modal */}
                                    <button
                                        onClick={() => openModal(project)}
                                        className="inline-flex items-center justify-center p-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md cursor-pointer"
                                        aria-label={`View Details for ${project.title}`}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="text-lg text-gray-500 col-span-full text-center py-10">
                            No projects found in the **{activeFilter}** category.
                        </p>
                    )}
                </div>
                {/* End Compact Card Layout */}


                <div className="mt-16 text-center">
                    <p className="text-base text-gray-600 mb-4">
                        Want to see more? Check out my GitHub for additional projects and contributions.
                    </p>
                    <a
                        href="https://github.com/arnavprajapati"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>

            {/* Render the Modal */}
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </div>
    );
};

export default MyProjects;