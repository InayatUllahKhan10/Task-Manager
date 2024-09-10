import React, { useState, useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import { IoChatbubbleOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdLabelImportant } from "react-icons/md";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    // Toggle theme
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Apply the theme based on the saved preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const data = [
        {
            title: "Dashboard", // Dashboard button
            icon: <CgNotes />,
            link: "/dashboard" // Set the link for your dashboard route
        },
        // {
        //     title: "All tasks",
        //     icon: <CgNotes />,
        //     link: "/alltask"
        // },
        {
            title: "Important tasks",
            icon: <MdLabelImportant />,
            link: "/importantTask"
        },
        {
            title: "Completed tasks",
            icon: <IoCheckmarkDoneSharp />,
            link: "/completedTask"
        },
        {
            title: "Incompleted tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedTask"
        },
    ];

    return (
        <>
            <div>
                <h2 className="text-xl font-semibold black">The Code Master</h2>
                <h4 className="my-2 text-gray-400">tsm@gmail.com</h4>
                <hr />
            </div>
            <div>
                {data.map((items, i) => (
                    <Link to={items.link}
                        key={i} 
                        className="my-3 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300">
                        {items.icon}&nbsp; {items.title}
                    </Link>
                ))}
            </div>

            {/* Dark Mode Toggle Button */}
            <div className="my-4 flex items-center justify-center">
                <button
                    onClick={toggleTheme}
                    className={`w-full p-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'}`}
                >
                    {darkMode ? (
                        <>
                            🌙
                        </>
                    ) : (
                        <>
                            ☀️
                        </>
                    )}
                </button>
            </div>

            <div>
                <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
            </div>

            {/* Chatbot Button */}
            <div className='mt-6 flex items-center'>
                <Link
                    to="/chatbot"
                    aria-label="Chatbot">
                    <IoChatbubbleOutline className='text-2xl mr-2' />
                    <span>Chatbot</span>
                </Link>
            </div>
        </>
    );
};

export default Sidebar;
