import React from 'react';
import ChillZone from '../assets/projectsThumbnail/chillzone.png'
import EduLearn from '../assets/projectsThumbnail/edulearn.png'
import WardrobeHub from '../assets/projectsThumbnail/wardrobehub.png'
import CampusCuisine from '../assets/projectsThumbnail/campuscuisine.png'

const MyProjects = () => {

    const projects = [
        {
            title: "ChillZone - Real-time Chat Application",
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
            link: "https://chill-zone-frontend.onrender.com/"
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
            "link": "https://edulearnfrontend.onrender.com/"
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
            "link": "https://wardrobehub-frontend.onrender.com/"
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
            "link": "https://campus-cuisine-7k65.onrender.com/"
        }
    ];

    return (
        <div className="min-h-screen mt-5 bg-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        My Projects
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
                        A showcase of my work in full-stack development, AI integration, and user-centered design. Each project represents a unique challenge and learning experience.
                    </p>
                    <div className="space-y-3">
                        <p className="w-fit text-sm md:text-base font-mono tracking-wider text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                            Building solutions that make a difference
                        </p>
                        <p className="w-fit text-sm md:text-base font-mono tracking-wider text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                            &lt; Innovation | Problem Solving | Impact /&gt;
                        </p>
                    </div>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-6 items-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                            {project.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-white text-gray-700 rounded-lg text-xs md:text-sm font-semibold border border-gray-300 shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-gray-400 font-bold text-lg shrink-0">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {project.description.map((point, pointIndex) => (
                                        <p key={pointIndex} className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                            <span className="text-green-500 font-bold text-base shrink-0">✓</span>
                                            <span className='font-medium'>{point}</span>
                                        </p>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    target="_blank"
                                >
                                    View Live Project
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[280px] md:h-[320px] lg:h-[350px] object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-base text-gray-600 mb-4">
                        Want to see more? Check out my GitHub for additional projects and contributions.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-8 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;