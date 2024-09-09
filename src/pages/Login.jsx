import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', // Add role to formData
  });
  const navigate = useNavigate(); // Hook to get the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.role) {
      alert('Please select a role!');
      return;
    }
    
    // Retrieve stored role from localStorage (in a real app, you would fetch this from the backend)
    const storedRole = localStorage.getItem('userRole');

    if (storedRole === formData.role) {
      alert(`Logged in as ${formData.role}`);
      navigate('/dashboard'); // Redirect to the dashboard after login
    } else {
      alert('Role does not match. Please check your role.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Welcome Back</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          
          {/* Email */}
          <div className='relative'>
            <FaUser className='absolute left-3 top-3 text-gray-500' />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email Address'
              className='w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <FaLock className='absolute left-3 top-3 text-gray-500' />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='Password'
              className='w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Role Selection */}
          <div className='relative'>
            <select
              name='role'
              value={formData.role}
              onChange={handleChange}
              required
              className='w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300'
            >
              <option value='' disabled>Select Role</option>
              <option value='user'>User</option>
              <option value='manager'>Task Manager</option>
              <option value='admin'>Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition-all duration-300'
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div className='text-right text-sm text-gray-500'>
            <a href='/forgot-password' className='hover:underline'>
              Forgot Password?
            </a>
          </div>

          {/* Divider */}
          <div className='flex items-center justify-between mt-6'>
            <span className='border-b w-1/5 lg:w-1/4'></span>
            <span className='text-xs text-gray-500 uppercase'>or</span>
            <span className='border-b w-1/5 lg:w-1/4'></span>
          </div>

          {/* Sign up option */}
          <div className='text-center text-sm text-gray-500'>
            Don’t have an account?{' '}
            <a href='/auth/signup' className='text-blue-500 hover:underline'>
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
