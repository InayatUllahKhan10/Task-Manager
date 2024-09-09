// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'
// import { FaSkullCrossbones } from "react-icons/fa6";

// const InputData = () => {
//     return (
//         <>
//             <div className='fixed top-0 left-0 bg-gray-800 opacity-75 h-screen w-full' ></div>
//             <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-full' >
//                 <div className='w-3/6 bg-gray-900 p-4 rounded'>
//                 <div className='flex justify-end'>
//                     <button className='text-2xl'>
//                     <FaSkullCrossbones />
//                     </button>
               
//                </div>
//                     <input
//                         type="text"
//                         placeholder="Enter Title"
//                         name="title"
//                         className="px-4 py-3 rounded-lg w-full bg-gray-700  my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
//                     />
//                     <textarea
//                         name="description"
//                         cols="30"
//                         row="10"
//                         placeholder="Enter your data.."
//                         className="px-3 py-2 rounded w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
//                     ></textarea>
//                     {/* <button className="px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:transform active:translate-y-1">
//                         Click Me!
//                     </button> */}
//                     <button className="flex items-center px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:transform active:translate-y-1">
//                         SUBMIT
//                         <FaArrowRight className="ml-2" />  {/* Adds an icon with a small margin on the left */}
//                     </button>

//                     {/* <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl'></button> */}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default InputData
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaSkullCrossbones } from 'react-icons/fa6';

const InputData = ({ closeModal, addTask }) => {
    // State to manage task input
    const [task, setTask] = useState({ title: '', description: '' });

    // Handle input change for both title and description
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    // Function to handle the submission of the form
    const handleSubmit = () => {
        if (task.title && task.description) {
            // Call the addTask function passed as a prop to add the new task
            addTask(task);
            // Clear the input fields
            setTask({ title: '', description: '' });
            // Close the modal after submission
            closeModal();
        } else {
            alert('Please fill in both title and description');
        }
    };

    return (
        <>
            <div className='fixed top-0 left-0 bg-gray-800 opacity-75 h-screen w-full' onClick={closeModal}></div>
            <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-full'>
                <div className='w-3/6 bg-gray-900 p-4 rounded'>
                    <div className='flex justify-end'>
                        <button className='text-2xl' onClick={closeModal}>
                            <FaSkullCrossbones />
                        </button>
                    </div>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={task.title}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                    />
                    <input 
                        type="text"
                        name="title"
                        placeholder="Enter Task"
                        value={task.task}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                    />
                    <textarea
                        name="description"
                        cols="30"
                        rows="10"
                        placeholder="Enter your data.."
                        value={task.description}
                        onChange={handleInputChange}
                        className="px-3 py-2 rounded w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                    ></textarea>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:transform active:translate-y-1"
                    >
                        SUBMIT
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default InputData;
