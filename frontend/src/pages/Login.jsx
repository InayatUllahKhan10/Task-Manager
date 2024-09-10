// import React, { useState } from 'react';
// import { FaUser, FaLock } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Send login request to the backend
//       const response = await fetch('http://localhost:1000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         // Assuming the backend returns a token and the user's role
//         const { token, userRole } = data;
  
//         // Save the token and role to localStorage
//         localStorage.setItem('token', token);
//         localStorage.setItem('userRole', userRole);

//         //redirect based on role 
//         if(data.role==='admin'){
//           navigate('/dashboard');
//         }else if(data.role ==='manager'){
//           navigate('/dashboard');
//         }else if (data.role=== 'user'){
//           navigate('/userpage');
//         }
//       } else {
//         alert(data.message || 'Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500'>
//       <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
//         <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Welcome Back</h2>
//         <form onSubmit={handleSubmit} className='space-y-6'>
          
//           {/* Email */}
//           <div className='relative'>
//             <FaUser className='absolute left-3 top-3 text-gray-500' />
//             <input
//               type='email'
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder='Email Address'
//               className='w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300'
//             />
//           </div>

//           {/* Password */}
//           <div className='relative'>
//             <FaLock className='absolute left-3 top-3 text-gray-500' />
//             <input
//               type='password'
//               name='password'
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder='Password'
//               className='w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300'
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type='submit'
//             className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition-all duration-300'
//           >
//             Login
//           </button>

//           {/* Forgot Password Link */}
//           <div className='text-right text-sm text-gray-500'>
//             <a href='/forgot-password' className='hover:underline'>
//               Forgot Password?
//             </a>
//           </div>

//           {/* Divider */}
//           <div className='flex items-center justify-between mt-6'>
//             <span className='border-b w-1/5 lg:w-1/4'></span>
//             <span className='text-xs text-gray-500 uppercase'>or</span>
//             <span className='border-b w-1/5 lg:w-1/4'></span>
//           </div>

//           {/* Sign up option */}
//           <div className='text-center text-sm text-gray-500'>
//             Don’t have an account?{' '}
//             <a href='/signup' className='text-blue-500 hover:underline'>
//               Sign Up
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext'; // Import AuthContext

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setIsAuthenticated, setUserRole } = useContext(AuthContext); // Use AuthContext to update state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token, userRole } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', userRole);

        setIsAuthenticated(true); // Update authentication state
        setUserRole(userRole); // Update user role

        // Redirect based on user role
        if (userRole === 'admin' || userRole === 'manager') {
          navigate('/dashboard');
        } else if (userRole === 'user') {
          navigate('/userhome');
        }
      } else {
        alert(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
          <div className="text-right text-sm text-gray-500">
            <a href="/forgot-password" className="hover:underline">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

