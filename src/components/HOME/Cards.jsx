import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Cards = ({ home }) => {
    const [tasks, setTasks] = useState([
        {
            title: "The Best Coding Program:",
            task: "Complete the JavaScript section",
            desc: "I need to clear basic topics.",
            status: "Incomplete",
        },
        {
            title: "The Best Coding Assignment:",
            task: "Solve all React exercises",
            desc: "I need to clear basic topics further.",
            status: "Complete",
        },
    ]);

    const [newTask, setNewTask] = useState({ title: "", task: "", desc: "" });
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [editingTask, setEditingTask] = useState(null); // Track which task is being edited

    // Function to handle task addition
    const handleAddTask = () => {
        if (newTask.title && newTask.task && newTask.desc) {
            setTasks([...tasks, { ...newTask, status: "Incomplete" }]);
            setNewTask({ title: "", task: "", desc: "" });
            setIsAddingTask(false); // Close the add task form
        }
    };

    // Function to handle task deletion
    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Function to handle task editing
    const startEditingTask = (index) => {
        setEditingTask({ ...tasks[index], index });
    };

    // Function to update a task after editing
    const handleUpdateTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingTask.index] = {
            ...updatedTasks[editingTask.index],
            title: editingTask.title,
            task: editingTask.task,
            desc: editingTask.desc,
        };
        setTasks(updatedTasks);
        setEditingTask(null); // Close the editing form
    };

    // Function to update task status
    const handleStatusChange = (index, newStatus) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = newStatus;
        setTasks(updatedTasks);
    };

    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {tasks.map((task, i) => (
                <div
                    key={i}
                    className='flex flex-col justify-between bg-[#2D3748] rounded-sm p-4 transition-transform duration-300 hover:scale-105'
                >
                    <div>
                        <h3 className='text-xl font-semibold text-white'>User: {task.title}</h3>
                        <h4 className='text-lg font-medium text-gray-400 my-2'>Task: {task.task}</h4>
                        <p className='text-gray-300 my-2'>Description: {task.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <select
                            value={task.status}
                            onChange={(e) => handleStatusChange(i, e.target.value)}
                            className={`p-2 rounded text-white ${
                                task.status === "Incomplete"
                                    ? "bg-red-500"
                                    : task.status === "Complete"
                                    ? "bg-green-500"
                                    : "bg-yellow-500"
                            }`}
                        >
                            <option value="Incomplete">Incomplete</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Complete">Complete</option>
                        </select>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                            {/* Edit Button */}
                            <button onClick={() => startEditingTask(i)}>
                                <FaEdit />
                            </button>

                            {/* Delete Button */}
                            <button onClick={() => handleDeleteTask(i)}>
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Add Task Form */}
            {home === "true" && (
                <div
                    className='flex flex-col justify-center items-center bg-[#4A5568] rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
                    <button onClick={() => setIsAddingTask(true)}>
                        <IoIosAddCircle className='text-5xl' />
                    </button>
                    <h2 className='text-2xl mt-4'>Add Tasks</h2>
                </div>
            )}

            {/* Conditionally show task input form */}
            {isAddingTask && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center'>
                    <div className='w-3/6 bg-gray-900 p-4 rounded'>
                        <div className='flex justify-end'>
                            <button className='text-2xl text-white' onClick={() => setIsAddingTask(false)}>
                                X {/* Cross Button to close the form */}
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="User Name"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Assign task"
                            value={newTask.task}
                            onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <textarea
                            placeholder="Enter Task Description"
                            value={newTask.desc}
                            onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <button
                            onClick={handleAddTask}
                            className="px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:transform active:translate-y-1"
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Task Form */}
            {editingTask && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center'>
                    <div className='w-3/6 bg-gray-900 p-4 rounded'>
                        <div className='flex justify-end'>
                            <button className='text-2xl text-white' onClick={() => setEditingTask(null)}>
                                X {/* Cross Button to close the form */}
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Edit Task Title"
                            value={editingTask.title}
                            onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Edit Task Name"
                            value={editingTask.task}
                            onChange={(e) => setEditingTask({ ...editingTask, task: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <textarea
                            placeholder="Edit Task Description"
                            value={editingTask.desc}
                            onChange={(e) => setEditingTask({ ...editingTask, desc: e.target.value })}
                            className="px-4 py-3 rounded-lg w-full bg-gray-700 my-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-md hover:bg-gray-600"
                        />
                        <button
                            onClick={handleUpdateTask}
                            className="px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:transform active:translate-y-1"
                        >
                            Update Task
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
