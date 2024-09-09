import React from 'react';
import Home from './pages/Home';
import Alltask from './pages/Alltask';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompletedTask from './pages/IncompleteTask';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css'; // Custom styles
import Chatbot from './pages/chatbot';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Homepage from './components/HomePage';
import UserHome from './pages/UserHome';


const App = () => {
  return (
    <div className="bg-gray-900 dark:bg-white dark:text-black text-white h-screen p-2 transition-colors duration-500 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Alltask />} />
            <Route path="/importantTask" element={<ImportantTask />} />
            <Route path="/completedTask" element={<CompletedTask />} />
            <Route path="/incompletedTask" element={<IncompletedTask />} />
            <Route path="/chatbot" element={<Chatbot/>} />
          </Route>
          
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/auth/signup" element={<Signup/>} />
          <Route path="/auth/login" element={<Login/>} />
          {/* Use 'element' instead of 'component' */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userhome" element={<UserHome />} />
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
