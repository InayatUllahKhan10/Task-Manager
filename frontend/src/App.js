import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Alltask from './pages/Alltask';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompletedTask from './pages/IncompleteTask';
import Chatbot from './pages/chatbot';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Homepage from './components/HomePage';
import UserHome from './pages/UserHome';

// Example Auth Context
const AuthContext = React.createContext();

const ProtectedRoute = ({ element, roles }) => {
  const { isAuthenticated, userRole } = React.useContext(AuthContext);

  // Check if user is authenticated and has the correct role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }
  return element;
};

const App = () => {
  // Mock authentication state
  const [isAuthenticated] = React.useState(false); // Removed setIsAuthenticated
  const [userRole] = React.useState(''); // Removed setUserRole

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole }}>
      <div className="bg-gray-900 dark:bg-white dark:text-black text-white h-screen p-2 transition-colors duration-500 relative">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route index element={<Alltask />} />
              <Route path="/importantTask" element={<ImportantTask />} />
              <Route path="/completedTask" element={<CompletedTask />} />
              <Route path="/incompletedTask" element={<IncompletedTask />} />
              <Route path="/chatbot" element={<Chatbot />} />
            </Route>

            <Route path="/homepage" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} roles={['admin', 'manager']} />} />
            <Route path="/userhome" element={<UserHome />} />
            
            {/* Handle unauthorized access */}
            <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
