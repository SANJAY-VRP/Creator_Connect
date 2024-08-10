// LoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import MainHome from './MainHome'; // Import MainHome component
import './Login2.css'; // Import LoginForm.css for styling

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state
    const [userEmail, setUserEmail] = useState(''); // Add userEmail state

    const handleLoginSuccess = (email) => {
        setLoggedIn(true);
        setUserEmail(email); // Set the logged-in user's email
    };

    // Modify handleSubmit function to handle successful login
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Login successful:', response.data);
            handleLoginSuccess(email); // Pass email to handleLoginSuccess
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                console.error('Error logging in:', error.response.data.error);
            } else {
                console.error('Error logging in:', error.message);
            }
            // Handle error - display an error message to the user
        }
    };

    // Render MainHome component if loggedIn is true
    if (loggedIn) {
        return <MainHome userEmail={userEmail} />;
    }

    // Render login form if not logged in
    return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        {/* Login form */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
          <div className="w-72">
            {/* Heading */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* Form */}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

           

              <div className="mb-3">
                <button type="submit" className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Log in</button>
               
              </div>
            </form>

         
          </div>
        </div>

        {/* Login banner */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://images.pexels.com/photos/6333758/pexels-photo-6333758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Login Banner" />
        </div>
      </div>

      {/* Credit */}
    
    </div>
  );
};

export default LoginForm;
