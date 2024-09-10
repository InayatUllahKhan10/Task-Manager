import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Linking the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>Task<span>Manager</span></h1> {/* Placeholder logo with styling */}
        </div>
        <ul className="nav-links">
          {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
          <li><Link to="/auth/signup" className="signup-btn">Sign Up</Link></li>
          <li><Link to="/auth/login" className="login-btn">Login</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h2>Welcome to <span>TaskManager</span></h2>
        <p>Manage your tasks efficiently, boost productivity, and never miss a deadline again.</p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Task Tracking</h3>
          <p>Keep track of all your tasks in one place, set deadlines, and prioritize your work.</p>
        </div>
        <div className="feature">
          <h3>Collaboration</h3>
          <p>Work with your team efficiently by assigning tasks and tracking their progress.</p>
        </div>
        <div className="feature">
          <h3>Analytics</h3>
          <p>View productivity stats and get insights to improve your task management.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 TaskManager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
