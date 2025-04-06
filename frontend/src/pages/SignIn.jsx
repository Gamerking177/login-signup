import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthController from '../controller/authcontroller';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await AuthController.signIn(email, password);

    if (result.success) {
      setError({ email: false, password: false });
      navigate("/");
    } else {
      setError({ email: true, password: true });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#1E409F] to-[#E41C24]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 ${error.email ? 'border-red-500' : 'focus:ring-blue-500'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={`w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 ${error.password ? 'border-red-500' : 'focus:ring-blue-500'}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        {error.email && <p className="mt-4 text-red-600 text-center">Invalid credentials.</p>}

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
