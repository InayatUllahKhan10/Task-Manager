import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'User', // Default role
  });
  const navigate = useNavigate(); // Hook to get the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate saving user role to localStorage (you'd normally send this to a backend)
    localStorage.setItem('userRole', formData.role);

    alert('Sign Up Successful!');
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Username */}
          <div className='relative'>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
              placeholder='Username'
              className='w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Email */}
          <div className='relative'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email Address'
              className='w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='Password'
              className='w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Confirm Password */}
          <div className='relative'>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder='Confirm Password'
              className='w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white text-gray-700 transition-all duration-300'
            />
          </div>

          {/* Role */}
          <div className='relative'>
            <select
              name='role'
              value={formData.role}
              onChange={handleChange}
              className='w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white text-gray-700 transition-all duration-300'
            >
              <option value=''>Select Role</option>
              <option value='user'>User</option>
              <option value='manager'>Task Manager</option>
              <option value='admin'>Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 active:bg-indigo-700 active:ring-offset-1 transition-all duration-300'
          >
            Sign Up
          </button>

          <div className='text-center text-sm text-gray-500 mt-4'>
            Already have an account?{' '}
            <a href='/auth/login' className='text-indigo-500 hover:underline'>
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
