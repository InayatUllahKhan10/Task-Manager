import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:1000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign Up Successful!');
        localStorage.setItem('userRole', data.role || formData.role);
        navigate('/login');
      } else {
        console.error('Error response from server:', data);
        alert(data.message || 'Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('An error occurred during sign up. Please try again later.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Name */}
          <div className='relative'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Full Name'
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
            <a href='/login' className='text-indigo-500 hover:underline'>
              Log in
            </a>
          </div>

          {/* Display error if any */}
          {error && <div className='text-red-500 mt-2'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
