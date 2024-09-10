import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import { FaTasks, FaUserAlt, FaChartBar, FaCog } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

const Dashboard = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleBack = () => {
    navigate("/hometask");  // Navigate to the /hometask page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header/NavBar */}
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Task Management Dashboard</h1>
          <div className="space-x-4">
            <Link to="/login" className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-800 text-white py-8">
          <ul className="space-y-6">
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 transition">
              <FaTasks className="mr-3" />
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 transition">
              <FaUserAlt className="mr-3" />
              <Link to="/tasks" className="text-white hover:text-gray-300">My Tasks</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 transition">
              <FaChartBar className="mr-3" />
              <Link to="/analytics" className="text-white hover:text-gray-300">Analytics</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 transition">
              <FaCog className="mr-3" />
              <Link to="/settings" className="text-white hover:text-gray-300">Settings</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-red-600 transition">
              <AiOutlineLogout className="mr-3" />
              <Link to="/logout" className="text-white hover:text-gray-300">Logout</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-900 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-200">Welcome to your Dashboard</h2>
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
            >
              Assign Task
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold text-gray-200">All Task</h3>
              <p className="text-3xl mt-4 text-blue-400">45</p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold text-gray-200">Important Task</h3>
              <p className="text-3xl mt-4 text-pink-400">45</p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold text-gray-200">Completed Tasks</h3>
              <p className="text-3xl mt-4 text-green-400">32</p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold text-gray-200">Incompleted Tasks</h3>
              <p className="text-3xl mt-4 text-red-900">13</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Completed task: "Design landing page"</span>
                <span>2 hours ago</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Added new task: "Create API endpoints"</span>
                <span>5 hours ago</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Updated task: "Implement authentication"</span>
                <span>1 day ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 Task Management App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
