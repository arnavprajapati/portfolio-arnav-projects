import React from 'react';

const CONNECT_LINKS = [
    { name: "GitHub", Icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png", url: "https://github.com/arnavprajapati", iconBgColor: "bg-purple-100" },
    { name: "LinkedIn", Icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png", url: "https://www.linkedin.com/in/arnav-prajapati/", iconBgColor: "bg-blue-100" },
    { name: "Resume", Icon: "https://static.vecteezy.com/system/resources/thumbnails/024/235/881/small_2x/cv-icon-resume-illustration-sign-user-data-symbol-or-logo-vector.jpg", url: "../../public/Resume.pdf", iconBgColor: "bg-green-100" },
    { name: "Email", Icon: "https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg", url: "mailto:arnavprajapati3101@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Arnav,%0A%0AI%20would%20like%20to%20connect%20with%20you.", iconBgColor: "bg-red-100" },
];

const Connect = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex lg:mt-28 mt-16 justify-center ">
            <div className="max-w-2xl w-full">
                
                <div className="text-center lg:mb-16 mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 lg:mb-4 mb-2">
                        Connect
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {CONNECT_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            {...(link.name !== 'Email' && { target: "_blank" })}
                            className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-md transition-all duration-300"
                        >
                            <div className={`w-14 h-14 flex items-center justify-center ${link.iconBgColor} rounded-xl`}>
                                <img
                                    src={link.Icon}
                                    alt={`${link.name} icon`}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            
                            <span className="text-xl font-semibold text-gray-900">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Connect;